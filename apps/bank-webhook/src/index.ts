import {PrismaClient} from "@repo/db/client"
import express from "express"

const db = new PrismaClient();

const app = express();

app.use(express.json())

app.post("/hdfcWebhook",async (req, res)=>{

    const paymentInformation = {
        token: req.body.token,
        userId:req.body.user_identifier,
        amount: req.body.amount
    }
    
    try {
        console.log(paymentInformation.token)
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})

app.get("/hook",(req, res)=>{

     res.json({
        message:"hi there"
    })
})

app.post("/hook", (req, res)=>{

    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    res.json({
        paymentInformation
    })

})

app.listen(3003)
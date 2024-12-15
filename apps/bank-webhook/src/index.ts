import {PrismaClient} from "@repo/db/client"
import express from "express"

const db = new PrismaClient();

const app = express();
app.post("/hdfcWebhook",async (req, res)=>{

    const paymentInformation = {
        token: req.body.token,
        userId:req.body.user_identifier,
        amount: req.body.amount
    }
   await db.balance.update({
    where:{
        userId:paymentInformation.userId
    },
    data:{
        amount:{
            increment: paymentInformation.amount
            
        }
    }
   });
   await db.onRampTransaction.update({
    where:{
        token:paymentInformation.token,
    },
    data:{
        status:"success"
    }
   })
   res.status(200).json({
    message:"captured"
   })
})

app.listen(3003)
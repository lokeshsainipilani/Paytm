"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { PrismaClient,  } from "@repo/db/client";


const prisma = new PrismaClient();


export async function p2pTransfer(to:string, amount:number){
    const session = await getServerSession(authOptions);
    const from = session?.user?.id
    if(!from){
        return {
            message:"error while sending"
        }
    }
    const toUser = await  prisma.user.findFirst({
        where:{
            number:to
        }
    });
    if(!toUser){
        return{
            message:"user not found"
        }
    }
    await prisma.$transaction(async (tx:any)=>{
        await tx.$queryRaw`SELECT * FROM "Balance" where "userId" = ${Number(from)} FOR UPDATE`;

        const fromBalance = await tx.balance.findUnique({
            where:{
                userId:Number(from)
            }
        });
        if(!fromBalance || fromBalance.amount < amount){
            
            throw new Error("Insufficient funds");
        }
        await tx.balance.update({
            where:{
                userId:Number(from)
            },
            data:{
                amount:{decrement:amount}
            }
        });
        await tx.balance.update({
            where:{
                userId:toUser.id
            },
            data:{
                amount:{increment:amount}
            }
            
        });
        await tx.p2pTransfer.create({
            data: {
              fromUserId: Number(from),
              toUserId: toUser.id,
              amount,
              timeStamp: new Date(),
            },
        });
    })

}
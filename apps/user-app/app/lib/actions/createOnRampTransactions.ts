"use server"


import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { number } from "framer-motion";
import { PrismaClient } from "@repo/db/client";

const prisma = new PrismaClient();
export async function createOnRampTransactions(amount:number, provider:string){
    const session = await getServerSession(authOptions);
    
    const userId = session.user.id
    if(!userId){
       return {
         message:"user does not logged in"
       }
    }

    const token= (Math.random()*1000).toString();

    try{
        await prisma.$transaction([
             prisma.onRampTransaction.create({
                data:{
                    userId: Number(userId),
                    amount: amount,
                    status:"success",
                    startTime: new Date(),
                    provider,
                    token: token
        
                }
            }),
            prisma.balance.upsert({
                where:{
                    userId:Number(userId)
                },
                update:{
                    amount:{
                        increment:amount
                    }
                },
                create:{
                    userId:Number(userId),
                    amount:amount,
                    locked:0
                }
            })
        
        ]);
        return {
            message:" on ramp transaction added"
        }
    }catch(e){
        console.log(e);
        return {
        message: 'Error while processing transaction',
        };
    }
    }
    
    
    
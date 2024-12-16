"use server"

import { PrismaClient } from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

const prisma = new PrismaClient();
export async function createOnRampTransactions(amount:number, provider:string){
    const session = await getServerSession(authOptions);
    
    const userId = session.user.id
    if(!userId){
        message:"user does not logged in"
    }
    const token= (Math.random()*1000).toString();
    await prisma.onRampTransaction.create({
        data:{
            userId: Number(userId),
            amount: amount,
            status:"processing",
            startTime: new Date(),
            provider,
            token: token

        }
    })
    return {
        message:" on ramp transaction added"
    }
}
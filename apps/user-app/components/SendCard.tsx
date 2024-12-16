"use client"

import { Center } from "@repo/ui/center"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/textInput"
import { Button } from "@repo/ui/button"
import { useState } from "react"
import { p2pTransfer } from "../app/lib/actions/p2pTransfer"



export function SendCard(){
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState<number>(0);

    return <div className="h-[90vh]">
        <Center>
            <Card title="Send" >
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value)=>{
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value)=>{
                        setAmount(Number(value))
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button appName="sendcard" onClick={async ()=>{
                            await p2pTransfer(number, amount*100)
                        }}>
                            Send
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}
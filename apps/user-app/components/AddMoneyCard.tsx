// "use client"

// import { Button } from "@repo/ui/button"
// import { Card } from "@repo/ui/card"
// import { Center } from "@repo/ui/center"
// import { Select } from "@repo/ui/select"
// import { useState } from "react"
// import { TextInput } from "@repo/ui/textInput"
// import { OnRampTransactions } from "./OnRampTransactions"
// import { createOnRampTransactions } from "../app/lib/actions/createOnRampTransactions"

// const SUPPORTED_BANKS = [{
//     name:"HDFC Bank",
//     redirectUrl:"https://netbanking.hdfcbank.com"
// },{
//     name:"Axis Bank",
//     redirectUrl:"https://www.axisbank.com"
// }] 



// export const AddMoney = () => {
//     const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
//     const [amount, setAmount] = useState(0);
//     const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name ||"")
//     return <Card title="Add Money">
//         <div className="w-full">
//             <TextInput label={"Amount"} placeholder={"Amount"} onChange={(amount) => {
//                 setAmount(Number(amount))
//             }} />
//             <div className="py-4 text-left">
//                  Bank
//             </div>
//             <Select onSelect={(value) => {
//                 setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
//                 setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
//                 }} options={SUPPORTED_BANKS.map(x => ({
//                 key: x.name,
//                 value: x.name
//             }))} />
//             <div className="flex justify-center pt-4 bg-gray-400">
//                <Button  onClick={async () => {
//                     await createOnRampTransactions(amount*100, provider)
//                    window.location.href = redirectUrl || ""; }}>
//                   Add Money
//                </Button>
//             </div>
//         </div>
//    </Card>
// }




"use client";

import { useState } from "react";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textInput";
import { Select } from "@repo/ui/select";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoney = () => {
  const [value, setValue] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const router = useRouter();
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl,
  );
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={(val) => {
            setValue(Number(val));
          }}
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name || "",
            );
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || "",
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4 " >
          <Button
            onClick={async () => {
              if (provider === "HDFC Bank") {
                window.open(`/Bank/hdfc?amount=${value}`, "_blank");
              } else if (provider === "Axis Bank") {
                window.open(`/Bank/axis?amount=${value}`, "_blank");
              }
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
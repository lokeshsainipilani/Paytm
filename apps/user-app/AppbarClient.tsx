"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation";
import { Appbar } from "./components/appbar";

export function AppbarClient(){
    const session = useSession();
    const router = useRouter();

    return <div>
        <Appbar onSignin={signIn} onSignout={async()=>{
            await signOut({redirect:false})
            router.push("/home")
        }} user={session.data?.user}/>
    </div>
}

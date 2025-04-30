"use client"
import { Appbar } from "../../components/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  return (
<Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
  )
}

export default page


// "use client"

// import {useBalance} from "@repo/store/useBalance"

// export default function(){
//     const balance = useBalance();
//     return <div>
//         hi there
//         {balance}
//     </div>
// }
// import { SendCard } from "../../../components/SendCard"


// export default function(){
//     return <div className="w-full m-10">
//         <SendCard/>
//     </div>
// }

// // app/p2p-transfer/page.tsx
// // app/p2p-transfer/page.tsx
// // app/p2p-transfer/page.tsx
// // app/p2p-transfer/page.tsx
// // app/p2p-transfer/page.tsx
// "use client";

// import { useState } from "react";

// export default function P2PTransferPage() {
//   const [form, setForm] = useState({
//     phone: '',
//     amount: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//     alert(`Sending ₹${form.amount} to ${form.phone}`);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl space-y-8">
//         {/* Title */}
//         <h1 className="text-4xl font-bold text-center text-blue-900">Send Money</h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Phone Number */}
//           <div>
//             <label htmlFor="phone" className="block text-sm font-semibold text-blue-700 mb-2">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               placeholder="Enter phone number"
//               className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Amount */}
//           <div>
//             <label htmlFor="amount" className="block text-sm font-semibold text-blue-700 mb-2">
//               Amount (₹)
//             </label>
//             <input
//               type="number"
//               id="amount"
//               name="amount"
//               value={form.amount}
//               onChange={handleChange}
//               required
//               min="1"
//               placeholder="Enter amount"
//               className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg transition"
//             >
//               Send Money
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }


import { SendCard } from "../../../components/SendCard";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'P2P Transfer | PayEase',
  description: 'Fast and safe P2P transfers with PayEase digital wallet application',
}

export default function () {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-center text-4xl mt-20 font-extrabold">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          <span className="text-blue-600">PayEase </span>P2P Transfer
        </h1>
      </div>
      <div className="text-center mb-8 sm:mb-12">
        <p className="mt-2 text-lg sm:text-xl text-slate-800">
          Fast and safe P2P transfers
        </p>
      </div>
      <div className="flex justify-center">
        <SendCard />
      </div>
    </div>
  );
}
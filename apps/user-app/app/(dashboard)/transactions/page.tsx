// app/transactions/page.tsx
// app/transactions/page.tsx
// app/transactions/page.tsx
// app/transactions/page.tsx
export default function TransactionsPage() {
    const transactions = [
      { id: 1, name: "Aman Sharma", date: "2025-04-27", amount: "+ ₹1,500", status: "Success" },
      { id: 2, name: "Zoya Khan", date: "2025-04-26", amount: "- ₹750", status: "Pending" },
      { id: 3, name: "Rahul Verma", date: "2025-04-25", amount: "+ ₹2,000", status: "Success" },
      { id: 4, name: "Sneha Patel", date: "2025-04-24", amount: "- ₹300", status: "Failed" },
      { id: 5, name: "Aditya Singh", date: "2025-04-23", amount: "+ ₹500", status: "Success" },
    ];
  
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-blue-900">Transactions</h1>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              + New Payment
            </button>
          </div>
  
          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Recipient</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-blue-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-900">{tx.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-700">{tx.date}</td>
                    <td className={`px-6 py-4 whitespace-nowrap font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {tx.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full font-semibold ${
                        tx.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:underline">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
  
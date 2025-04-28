// export default function(){
//     return <div>
//         Dashboard page
//     </div>
// }
// app/page.tsx
export default function() {
    return (
      <main className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col">
  
        {/* Navbar */}
        <header className="flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-blue-800">PaySwift</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-blue-700 hover:underline">Features</a>
            <a href="#download" className="text-blue-700 hover:underline">Get Started</a>
          </nav>
        </header>
  
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-24">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">Fast, Secure, and Easy Payments</h2>
          <p className="text-lg text-blue-700 mb-8 max-w-2xl">
            Experience seamless money transfers, transaction tracking, and peer-to-peer payments. Your wallet, redefined.
          </p>
          <a href="#download" className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition">
            Get Started →
          </a>
        </section>
  
        {/* Features Section */}
        <section id="features" className="grid md:grid-cols-3 gap-8 px-10 py-20">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Instant Transfers</h3>
            <p className="text-blue-600">Send and receive money instantly with just a few taps.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Transaction History</h3>
            <p className="text-blue-600">Track every payment with detailed records at your fingertips.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">P2P Transfers</h3>
            <p className="text-blue-600">Peer-to-peer payments made effortless and secure.</p>
          </div>
        </section>
  
        {/* Call to Action */}
        <section id="download" className="flex flex-col items-center justify-center py-20 bg-blue-200">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to Make Your First Payment?</h2>
          <a href="#" className="inline-flex items-center gap-2 border border-blue-700 text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Download the App
          </a>
        </section>
  
        {/* Footer */}
        <footer className="text-center text-blue-700 py-6">
          &copy; 2025 PaySwift. All rights reserved.
        </footer>
  
      </main>
    )
  }
  
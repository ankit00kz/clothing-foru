import Head from 'next/head';
import Link from 'next/link';

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout - Clothing For U</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/"><h1 className="text-2xl font-bold cursor-pointer">🛍️ Clothing For U</h1></Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="Last Name" className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="email" placeholder="Email" className="col-span-2 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="Street Address" className="col-span-2 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="City" className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="State" className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="ZIP Code" className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="Country" className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none" />
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border-2 border-blue-600 rounded-lg cursor-pointer">
                    <input type="radio" name="shipping" defaultChecked className="w-4 h-4" />
                    <span className="ml-3">Standard Shipping - FREE (5-7 business days)</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input type="radio" name="shipping" className="w-4 h-4" />
                    <span className="ml-3">Express Shipping - $15 (2-3 business days)</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border-2 border-blue-600 rounded-lg cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                    <span className="ml-3">💳 Credit Card</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input type="radio" name="payment" className="w-4 h-4" />
                    <span className="ml-3">🅿️ PayPal</span>
                  </label>
                </div>
              </div>

              {/* Card Details */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Card Details</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Card Holder Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="px-4 py-2 border rounded-lg focus:outline-none" />
                    <input type="text" placeholder="CVV" className="px-4 py-2 border rounded-lg focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 h-fit sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-4 pb-4 border-b">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$89.98</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$9.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span className="text-blue-600">$98.98</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Complete Purchase
              </button>
              <p className="text-gray-600 text-xs text-center mt-4">Your payment is secure and encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

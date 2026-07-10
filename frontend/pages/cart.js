import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Cart() {
  const [cartItems] = useState([
    { id: 1, name: 'Premium T-Shirt', price: 29.99, quantity: 2, size: 'M', color: 'Black' },
    { id: 2, name: 'Denim Jeans', price: 59.99, quantity: 1, size: 'L', color: 'Blue' },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <>
      <Head>
        <title>Shopping Cart - Clothing For U</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/"><h1 className="text-2xl font-bold cursor-pointer">🛍️ Clothing For U</h1></Link>
              <div className="flex space-x-6">
                <Link href="/shop">Shop</Link>
                <Link href="/cart">🛒 Cart</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6 flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Size: {item.size} | Color: {item.color}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button className="px-2 py-1 hover:bg-gray-100">−</button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button className="px-2 py-1 hover:bg-gray-100">+</button>
                    </div>
                    <span className="text-lg font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="text-red-600 hover:text-red-800 font-semibold">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 h-fit sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 border-b pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span className="text-blue-600">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
                Proceed to Checkout
              </button>
              <Link href="/shop">
                <button className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

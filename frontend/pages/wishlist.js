import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Wishlist() {
  const [wishlistItems] = useState([
    { id: 1, name: 'Premium T-Shirt', price: 29.99, image: 'model-1.jpg' },
    { id: 2, name: 'Denim Jeans', price: 59.99, image: 'model-2.jpg' },
    { id: 3, name: 'Leather Jacket', price: 149.99, image: 'model-3.jpg' },
  ]);

  return (
    <>
      <Head>
        <title>Wishlist - Clothing For U</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/"><h1 className="text-2xl font-bold cursor-pointer">🛍️ Clothing For U</h1></Link>
              <div className="flex space-x-6">
                <Link href="/shop">Shop</Link>
                <Link href="/wishlist">❤️ Wishlist</Link>
                <Link href="/cart">🛒 Cart</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">My Wishlist ❤️</h1>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
                  <div className="bg-gray-300 h-64 flex items-center justify-center">
                    <span className="text-gray-600">Product Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">${item.price.toFixed(2)}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                      <button className="px-3 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-2xl text-gray-600 mb-6">Your wishlist is empty</p>
              <Link href="/shop">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Start Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

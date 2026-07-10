import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  return (
    <>
      <Head>
        <title>Product Details - Clothing For U</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <h1 className="text-2xl font-bold cursor-pointer">🛍️ Clothing For U</h1>
              </Link>
              <div className="flex space-x-6">
                <Link href="/shop">Shop</Link>
                <Link href="/cart">🛒 Cart</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <div className="bg-gray-300 rounded-lg h-96 md:h-full flex items-center justify-center mb-4">
                <img src="/images/models/model-1.jpg" alt="Product" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-300 rounded h-20 cursor-pointer hover:opacity-70"></div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">Premium Cotton T-Shirt</h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">⭐ 4.8</span>
                  <span className="text-gray-600">(245 reviews)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-blue-600">$29.99</span>
                  <span className="text-2xl text-gray-500 line-through">$39.99</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Save 25%</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-lg mb-4">
                  High-quality premium cotton t-shirt perfect for any occasion. Made from 100% organic cotton, providing ultimate comfort and durability.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                  <p className="text-blue-800">✅ In Stock - Free shipping on orders over $50</p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-3">Size</label>
                <div className="flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-semibold transition ${
                        selectedSize === size
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-3">Color</label>
                <div className="flex gap-3">
                  {['Black', 'White', 'Blue', 'Red', 'Gray'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg font-semibold transition ${
                        selectedColor === color
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                  🛒 Add to Cart
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                  ❤️ Save for Later
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 font-semibold">Material</p>
                    <p className="text-gray-900">100% Organic Cotton</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Care</p>
                    <p className="text-gray-900">Machine wash cold</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Fit</p>
                    <p className="text-gray-900">Regular Fit</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Returns</p>
                    <p className="text-gray-900">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border rounded-lg p-6">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold">Customer {review}</p>
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-700">Amazing quality! The material feels premium and fits perfectly. Highly recommend this product.</p>
                  <p className="text-gray-500 text-sm mt-2">Verified Purchase • 2 weeks ago</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Shop() {
  const { products, isLoading } = useSelector(state => state.products);

  return (
    <>
      <Head>
        <title>Shop - Clothing For U</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">🛍️ Clothing For U</h1>
              </Link>
              <div className="flex space-x-6">
                <Link href="/shop" className="text-gray-700 hover:text-gray-900 font-semibold">Shop</Link>
                <Link href="/wishlist" className="text-gray-700 hover:text-gray-900">❤️ Wishlist</Link>
                <Link href="/cart" className="text-gray-700 hover:text-gray-900">🛒 Cart</Link>
                <Link href="/profile" className="text-gray-700 hover:text-gray-900">👤 Profile</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Filters */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none">
                  <option value="">All Categories</option>
                  <option value="mens">Men's</option>
                  <option value="womens">Women's</option>
                  <option value="kids">Kids</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <input type="range" min="0" max="500" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input type="text" placeholder="Search products..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Apply Filters</button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Link href={`/product/${item}`} key={item}>
                <div className="bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer overflow-hidden">
                  <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-80 flex items-center justify-center group">
                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('/images/models/model-${item}.jpg')`}}>
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                        <span>Premium Model Image</span>
                      </div>
                    </div>
                    <button className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 text-lg font-semibold">View Details</span>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Premium T-Shirt {item}</h3>
                    <p className="text-gray-600 text-sm mb-3">High-quality clothing for style</p>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">$29.99</span>
                        <span className="text-sm text-gray-500 line-through ml-2">$39.99</span>
                      </div>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">-25%</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition text-sm">Add to Cart</button>
                      <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">❤️</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

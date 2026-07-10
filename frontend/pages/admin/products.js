// frontend/pages/admin/products.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminProducts() {
  const [activeTab, setActiveTab] = useState('list');
  const [products] = useState([
    { id: 1, name: 'T-Shirt', category: 'Mens', price: 29.99, stock: 45, sales: 120 },
    { id: 2, name: 'Jeans', category: 'Womens', price: 59.99, stock: 30, sales: 85 },
    { id: 3, name: 'Jacket', category: 'Mens', price: 149.99, stock: 15, sales: 42 },
  ]);

  return (
    <>
      <Head>
        <title>Product Management - Admin</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 right-20 top-20"></div>
        </div>

        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 backdrop-blur-2xl bg-white/10 border-r border-white/20 p-6 space-y-6">
            <Link href="/admin/dashboard">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">Admin</h1>
            </Link>
            <nav className="space-y-3">
              {[
                { href: '/admin/dashboard', label: '📊 Dashboard', icon: '📊' },
                { href: '/admin/products', label: '📦 Products', icon: '📦' },
                { href: '/admin/orders', label: '📋 Orders', icon: '📋' },
                { href: '/admin/analytics', label: '📈 Analytics', icon: '📈' },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className="px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold cursor-pointer transition">
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="backdrop-blur-2xl bg-white/10 border-b border-white/20 p-6">
              <h2 className="text-3xl font-bold text-white">Product Management</h2>
            </div>

            <div className="p-6">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('list')}
                  className={`px-6 py-2 rounded-xl font-semibold transition ${
                    activeTab === 'list'
                      ? 'backdrop-blur-md bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'backdrop-blur-md bg-white/10 border border-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  📋 All Products
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-6 py-2 rounded-xl font-semibold transition ${
                    activeTab === 'add'
                      ? 'backdrop-blur-md bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'backdrop-blur-md bg-white/10 border border-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  ➕ Add Product
                </button>
              </div>

              {activeTab === 'list' && (
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                  <table className="w-full">
                    <thead className="bg-white/10 border-b border-white/20">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">Product</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Stock</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Sales</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {products.map((product) => (
                        <tr key={product.id} className="hover:bg-white/10 transition">
                          <td className="px-6 py-4 text-white font-semibold">{product.name}</td>
                          <td className="px-6 py-4 text-white/70">{product.category}</td>
                          <td className="px-6 py-4 text-white/70">${product.price}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              product.stock > 20
                                ? 'bg-green-500/30 text-green-200'
                                : 'bg-yellow-500/30 text-yellow-200'
                            }`}>
                              {product.stock}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-white/70">{product.sales}</td>
                          <td className="px-6 py-4 space-x-2">
                            <button className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-lg hover:bg-blue-500/50 transition text-sm">Edit</button>
                            <button className="px-3 py-1 bg-red-500/30 text-red-200 rounded-lg hover:bg-red-500/50 transition text-sm">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'add' && (
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Add New Product</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-white/80 font-semibold mb-2">Product Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 font-semibold mb-2">Category</label>
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 backdrop-blur-md">
                          <option>Mens</option>
                          <option>Womens</option>
                          <option>Kids</option>
                          <option>Accessories</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/80 font-semibold mb-2">Price</label>
                        <input type="number" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/80 font-semibold mb-2">Description</label>
                      <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-md" rows="4"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold rounded-xl transition shadow-lg">
                      Add Product
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}

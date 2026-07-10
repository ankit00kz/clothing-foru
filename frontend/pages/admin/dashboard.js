import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products] = useState([
    { id: 1, name: 'T-Shirt', price: 29.99, stock: 45, sales: 120 },
    { id: 2, name: 'Jeans', price: 59.99, stock: 30, sales: 85 },
    { id: 3, name: 'Jacket', price: 149.99, stock: 15, sales: 42 },
  ]);

  const [orders] = useState([
    { id: 'ORD001', customer: 'John Doe', total: 89.98, status: 'pending', date: '2024-07-08' },
    { id: 'ORD002', customer: 'Jane Smith', total: 149.97, status: 'shipped', date: '2024-07-07' },
    { id: 'ORD003', customer: 'Bob Johnson', total: 59.99, status: 'delivered', date: '2024-07-06' },
  ]);

  return (
    <>
      <Head>
        <title>Admin Dashboard - Clothing For U</title>
      </Head>

      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white">
          <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <nav className="mt-10 space-y-2">
            {[
              { id: 'dashboard', label: '📊 Dashboard' },
              { id: 'products', label: '📦 Products' },
              { id: 'orders', label: '📋 Orders' },
              { id: 'users', label: '👥 Users' },
              { id: 'analytics', label: '📈 Analytics' },
              { id: 'settings', label: '⚙️ Settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-6 py-3 font-semibold transition ${
                  activeTab === item.id ? 'bg-blue-600 border-l-4 border-blue-300' : 'hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white shadow">
            <div className="px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Welcome back, Admin!</h2>
              <div className="flex items-center gap-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Sales', value: '$12,500', icon: '💰' },
                    { label: 'Orders', value: '340', icon: '📦' },
                    { label: 'Customers', value: '1,245', icon: '👥' },
                    { label: 'Revenue', value: '$45,230', icon: '📈' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-lg shadow p-6">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold">Products Management</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Product</button>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold">Product</th>
                        <th className="px-6 py-3 text-left font-semibold">Price</th>
                        <th className="px-6 py-3 text-left font-semibold">Stock</th>
                        <th className="px-6 py-3 text-left font-semibold">Sales</th>
                        <th className="px-6 py-3 text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-t hover:bg-gray-50">
                          <td className="px-6 py-3">{product.name}</td>
                          <td className="px-6 py-3">${product.price.toFixed(2)}</td>
                          <td className="px-6 py-3">{product.stock}</td>
                          <td className="px-6 py-3">{product.sales}</td>
                          <td className="px-6 py-3">
                            <button className="text-blue-600 hover:underline">Edit</button>
                            <button className="text-red-600 hover:underline ml-3">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Orders Management</h3>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold">Order ID</th>
                        <th className="px-6 py-3 text-left font-semibold">Customer</th>
                        <th className="px-6 py-3 text-left font-semibold">Total</th>
                        <th className="px-6 py-3 text-left font-semibold">Status</th>
                        <th className="px-6 py-3 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-t hover:bg-gray-50">
                          <td className="px-6 py-3 font-semibold">{order.id}</td>
                          <td className="px-6 py-3">{order.customer}</td>
                          <td className="px-6 py-3">${order.total.toFixed(2)}</td>
                          <td className="px-6 py-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-3">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// frontend/pages/admin/orders.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminOrders() {
  const [orders] = useState([
    { id: 'ORD001', customer: 'John Doe', total: 89.98, status: 'pending', date: '2024-07-08', items: 3 },
    { id: 'ORD002', customer: 'Jane Smith', total: 149.97, status: 'shipped', date: '2024-07-07', items: 2 },
    { id: 'ORD003', customer: 'Bob Johnson', total: 59.99, status: 'delivered', date: '2024-07-06', items: 1 },
  ]);

  return (
    <>
      <Head>
        <title>Order Management - Admin</title>
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
                { href: '/admin/dashboard', label: '📊 Dashboard' },
                { href: '/admin/products', label: '📦 Products' },
                { href: '/admin/orders', label: '📋 Orders' },
                { href: '/admin/analytics', label: '📈 Analytics' },
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
              <h2 className="text-3xl font-bold text-white">Order Management</h2>
            </div>

            <div className="p-6">
              <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <table className="w-full">
                  <thead className="bg-white/10 border-b border-white/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Order ID</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Customer</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Items</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Total</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-white/10 transition">
                        <td className="px-6 py-4 text-white font-semibold">{order.id}</td>
                        <td className="px-6 py-4 text-white/70">{order.customer}</td>
                        <td className="px-6 py-4 text-white/70">{order.items}</td>
                        <td className="px-6 py-4 text-white font-semibold">${order.total}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'pending'
                              ? 'bg-yellow-500/30 text-yellow-200'
                              : order.status === 'shipped'
                              ? 'bg-blue-500/30 text-blue-200'
                              : 'bg-green-500/30 text-green-200'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-white/70">{order.date}</td>
                        <td className="px-6 py-4">
                          <button className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-lg hover:bg-cyan-500/50 transition text-sm">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

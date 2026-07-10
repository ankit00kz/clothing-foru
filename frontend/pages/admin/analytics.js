// frontend/pages/admin/analytics.js
import Head from 'next/head';
import Link from 'next/link';

export default function AdminAnalytics() {
  return (
    <>
      <Head>
        <title>Analytics - Admin</title>
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
              <h2 className="text-3xl font-bold text-white">Analytics & Reports</h2>
            </div>

            <div className="p-6 space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Revenue', value: '$45,230', icon: '💰', trend: '+12%' },
                  { label: 'Total Orders', value: '340', icon: '📦', trend: '+8%' },
                  { label: 'Total Customers', value: '1,245', icon: '👥', trend: '+15%' },
                  { label: 'Avg Order Value', value: '$132.97', icon: '🎯', trend: '+5%' },
                ].map((stat, i) => (
                  <div key={i} className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <p className="text-white/70 text-sm font-semibold mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-green-400 text-sm font-semibold">{stat.trend} this month</p>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Sales Trend</h3>
                  <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center">
                    <p className="text-white/50">Chart visualization would appear here</p>
                  </div>
                </div>
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Product Performance</h3>
                  <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center">
                    <p className="text-white/50">Chart visualization would appear here</p>
                  </div>
                </div>
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

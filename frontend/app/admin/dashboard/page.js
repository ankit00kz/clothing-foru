'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminDashboard() {
  const { token } = useSelector((state) => state.auth);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard/stats`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setStats(response.data.stats);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <StatCard label="Total Users" value={stats?.totalUsers || 0} />
              <StatCard label="Total Orders" value={stats?.totalOrders || 0} />
              <StatCard label="Total Products" value={stats?.totalProducts || 0} />
              <StatCard label="Paid Orders" value={stats?.paidOrders || 0} />
              <StatCard label="Total Revenue" value={`$${stats?.totalRevenue || 0}`} />
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AdminCard title="User Management" href="/admin/users" />
            <AdminCard title="Order Management" href="/admin/orders" />
            <AdminCard title="Product Management" href="/admin/products" />
            <AdminCard title="Analytics" href="/admin/analytics" />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
}

function AdminCard({ title, href }) {
  return (
    <a href={href} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 mt-2">Click to manage →</p>
    </a>
  );
}

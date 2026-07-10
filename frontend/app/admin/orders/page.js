'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function OrdersManagement() {
  const { token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const query = statusFilter ? `&status=${statusFilter}` : '';
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/orders?page=${page}${query}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrders(response.data.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, page, statusFilter]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/orders/${orderId}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPage(1);
    } catch (error) {
      console.error('Failed to update order:', error);
    }
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Order ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Total</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Payment</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className="px-6 py-4 text-sm text-gray-900">{order._id.slice(-8)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.user?.name}</td>
                      <td className="px-6 py-4 text-sm font-semibold">${order.totalPrice}</td>
                      <td className="px-6 py-4 text-sm">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-xs"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.paymentStatus === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : order.paymentStatus === 'refunded'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-900">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

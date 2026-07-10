'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function UsersManagement() {
  const { token } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/users?page=${page}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(response.data.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token, page]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/users/${userId}/role`,
        { role: newRole },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Refresh users list
      setPage(1);
    } catch (error) {
      console.error('Failed to update user role:', error);
    }
  };

  const handleDeactivateUser = async (userId) => {
    if (!confirm('Are you sure you want to deactivate this user?')) return;
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/users/${userId}/deactivate`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPage(1);
    } catch (error) {
      console.error('Failed to deactivate user:', error);
    }
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Users Management</h1>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                      <td className="px-6 py-4 text-sm">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user._id, e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded"
                        >
                          <option value="customer">Customer</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button
                          onClick={() => handleDeactivateUser(user._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Deactivate
                        </button>
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

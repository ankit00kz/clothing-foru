import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '555-123-4567',
    address: '123 Main St, New York, NY 10001',
  });

  const [orders] = useState([
    { id: 'ORD001', date: '2024-07-08', total: 89.98, status: 'Delivered' },
    { id: 'ORD002', date: '2024-07-05', total: 149.97, status: 'Shipped' },
    { id: 'ORD003', date: '2024-06-30', total: 59.99, status: 'Delivered' },
  ]);

  return (
    <>
      <Head>
        <title>My Profile - Clothing For U</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/"><h1 className="text-2xl font-bold cursor-pointer">🛍️ Clothing For U</h1></Link>
              <div className="flex space-x-6">
                <Link href="/shop">Shop</Link>
                <Link href="/profile">👤 Profile</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">My Profile</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              {isEditing ? (
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name</label>
                      <input type="text" defaultValue={profile.firstName} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name</label>
                      <input type="text" defaultValue={profile.lastName} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" defaultValue={profile.email} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input type="text" defaultValue={profile.phone} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Address</label>
                    <input type="text" defaultValue={profile.address} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Full Name</p>
                    <p className="text-lg font-semibold">{profile.firstName} {profile.lastName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="text-lg font-semibold">{profile.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <p className="text-lg font-semibold">{profile.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Address</p>
                    <p className="text-lg font-semibold">{profile.address}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <ul className="space-y-3">
                  <li><button className="text-blue-600 hover:underline font-semibold">Change Password</button></li>
                  <li><button className="text-blue-600 hover:underline font-semibold">Manage Addresses</button></li>
                  <li><button className="text-blue-600 hover:underline font-semibold">Payment Methods</button></li>
                  <li><button className="text-blue-600 hover:underline font-semibold">Notifications</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Order History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Order ID</th>
                    <th className="px-6 py-3 text-left font-semibold">Date</th>
                    <th className="px-6 py-3 text-left font-semibold">Total</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                    <th className="px-6 py-3 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-3 font-semibold">{order.id}</td>
                      <td className="px-6 py-3">{order.date}</td>
                      <td className="px-6 py-3">${order.total.toFixed(2)}</td>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <button className="text-blue-600 hover:underline">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

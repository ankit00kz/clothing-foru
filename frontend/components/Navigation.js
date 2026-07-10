'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="glass sticky top-0 z-50 px-4 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-black gradient-text">👕 ClothingForU</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="hover:gradient-text transition-all font-semibold">
            Shop
          </Link>
          <Link href="/categories" className="hover:gradient-text transition-all font-semibold">
            Categories
          </Link>
          <Link href="/about" className="hover:gradient-text transition-all font-semibold">
            About
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="hidden md:block input-glass bg-white/10 text-gray-900 placeholder-gray-600 px-4 py-2 rounded-lg w-48"
          />

          {/* Cart */}
          <Link href="/cart" className="hover:scale-110 transition-transform">
            <span className="text-2xl">🛒</span>
          </Link>

          {/* Auth Links */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link
                href={user?.role === 'admin' ? '/admin/dashboard' : '/profile'}
                className="btn-glass px-4 py-2 text-sm"
              >
                {user?.name || 'Profile'}
              </Link>
              <button
                onClick={handleLogout}
                className="btn-gradient px-4 py-2 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/auth/login" className="btn-glass px-4 py-2 text-sm">
                Login
              </Link>
              <Link href="/auth/register" className="btn-gradient px-4 py-2 text-sm">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <Link href="/shop" className="block hover:gradient-text font-semibold">
            Shop
          </Link>
          <Link href="/categories" className="block hover:gradient-text font-semibold">
            Categories
          </Link>
          <Link href="/about" className="block hover:gradient-text font-semibold">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass mt-20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-4 gradient-text">Clothing For U</h3>
            <p className="text-gray-600 mb-4">Premium fashion with stunning 2D animations and glassmorphism design.</p>
            <div className="flex gap-4 text-2xl">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📷</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/shop" className="hover:gradient-text transition-all">All Products</Link></li>
              <li><Link href="/shop?category=men" className="hover:gradient-text transition-all">Men</Link></li>
              <li><Link href="/shop?category=women" className="hover:gradient-text transition-all">Women</Link></li>
              <li><Link href="/shop?category=kids" className="hover:gradient-text transition-all">Kids</Link></li>
              <li><Link href="/shop?category=sale" className="hover:gradient-text transition-all">Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/contact" className="hover:gradient-text transition-all">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:gradient-text transition-all">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:gradient-text transition-all">Returns</Link></li>
              <li><Link href="/faq" className="hover:gradient-text transition-all">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/privacy" className="hover:gradient-text transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:gradient-text transition-all">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:gradient-text transition-all">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; 2024 Clothing For U. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-gray-600 mt-4 md:mt-0">
              <Link href="#" className="hover:gradient-text transition-all">Accessibility</Link>
              <Link href="#" className="hover:gradient-text transition-all">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

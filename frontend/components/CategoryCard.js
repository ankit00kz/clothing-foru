'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CategoryCard({ icon, name, slug, count, color = 'from-blue-400 to-purple-600' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/shop?category=${slug}`}>
      <div
        className="glass group cursor-pointer p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Blob */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl group-hover:blur-2xl`}
          style={{
            background: `linear-gradient(135deg, var(--primary-gradient))`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>

          {/* Category Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
            {name}
          </h3>

          {/* Product Count */}
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {count} Products
          </p>

          {/* Hover Arrow */}
          <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-purple-600 font-semibold">Explore →</span>
          </div>
        </div>

        {/* Animated Border */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `conic-gradient(from 45deg, #667eea, #764ba2, #667eea)`,
            padding: '2px',
          }}
        >
          <div className="inset-px rounded-2xl bg-white hidden" />
        </div>
      </div>
    </Link>
  );
}

'use client';

import { useState } from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  // Men's Categories
  { icon: '👔', name: 'Men Clothing', slug: 'men-clothing', count: 245 },
  { icon: '👞', name: 'Men Shoes', slug: 'men-shoes', count: 189 },
  { icon: '🎩', name: 'Men Accessories', slug: 'men-accessories', count: 156 },

  // Women's Categories
  { icon: '👗', name: 'Women Clothing', slug: 'women-clothing', count: 312 },
  { icon: '👠', name: 'Women Shoes', slug: 'women-shoes', count: 203 },
  { icon: '💄', name: 'Women Accessories', slug: 'women-accessories', count: 178 },

  // Kids Categories
  { icon: '👶', name: 'Kids Clothing', slug: 'kids-clothing', count: 234 },
  { icon: '👟', name: 'Kids Shoes', slug: 'kids-shoes', count: 145 },
  { icon: '🧸', name: 'Kids Accessories', slug: 'kids-accessories', count: 98 },

  // Specialty Categories
  { icon: '⚽', name: 'Sports & Activewear', slug: 'sports-wear', count: 267 },
  { icon: '🥻', name: 'Ethnic Wear', slug: 'ethnic-wear', count: 189 },
  { icon: '🎩', name: 'Formal Wear', slug: 'formal-wear', count: 134 },
  { icon: '🏖️', name: 'Casual Wear', slug: 'casual-wear', count: 298 },
  { icon: '❄️', name: 'Seasonal', slug: 'seasonal', count: 156 },
  { icon: '🔥', name: 'Sale Items', slug: 'sale', count: 423 },
];

export default function CategoryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animation: 'blob 7s infinite 2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4 gradient-text">
            Explore Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a world of fashion with our diverse range of categories and styles
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.slug}
              className="scale-in"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              onMouseEnter={() => setSelectedCategory(category.slug)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Floating Shape Decoration */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </section>
  );
}

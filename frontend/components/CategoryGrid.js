'use client';

import { useState } from 'react';
import { getCategoryImages, getRandomProductImage } from '@/lib/productImages';
import Image from 'next/image';

const categoryList = [
  { slug: 'men-clothing', name: 'Men Clothing', icon: '👔', count: 245 },
  { slug: 'men-shoes', name: 'Men Shoes', icon: '👞', count: 189 },
  { slug: 'men-accessories', name: 'Men Accessories', icon: '🧢', count: 156 },
  { slug: 'women-clothing', name: 'Women Clothing', icon: '👗', count: 312 },
  { slug: 'women-shoes', name: 'Women Shoes', icon: '👠', count: 203 },
  { slug: 'women-accessories', name: 'Women Accessories', icon: '👜', count: 178 },
  { slug: 'kids-clothing', name: 'Kids Clothing', icon: '👶', count: 234 },
  { slug: 'kids-shoes', name: 'Kids Shoes', icon: '👟', count: 145 },
  { slug: 'kids-accessories', name: 'Kids Accessories', icon: '🧸', count: 98 },
  { slug: 'unisex-clothing', name: 'Unisex Clothing', icon: '👕', count: 267 },
  { slug: 'unisex-shoes', name: 'Unisex Shoes', icon: '👟', count: 134 },
  { slug: 'unisex-accessories', name: 'Unisex Accessories', icon: '⌚', count: 156 },
  { slug: 'sports-wear', name: 'Sports & Activewear', icon: '⛹️', count: 267 },
  { slug: 'ethnic-wear', name: 'Ethnic Wear', icon: '🎭', count: 189 },
  { slug: 'formal-wear', name: 'Formal Wear', icon: '🎩', count: 134 },
  { slug: 'casual-wear', name: 'Casual Wear', icon: '🌴', count: 298 },
  { slug: 'seasonal', name: 'Seasonal', icon: '❄️', count: 156 },
  { slug: 'sale', name: 'Sale Items', icon: '🔥', count: 423 },
];

export default function CategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryImage, setCategoryImage] = useState({});

  const handleCategoryHover = (slug) => {
    const images = getCategoryImages(slug);
    const randomImg = getRandomProductImage(slug);
    setCategoryImage(prev => ({ ...prev, [slug]: randomImg }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {categoryList.map((category) => {
        const img = categoryImage[category.slug] || getRandomProductImage(category.slug);
        return (
          <div
            key={category.slug}
            onMouseEnter={() => handleCategoryHover(category.slug)}
            className="glass group cursor-pointer p-4 rounded-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
          >
            {/* Background Image */}
            {img && (
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Image
                  src={img.url}
                  alt={category.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-bold text-sm md:text-base text-gray-900 line-clamp-2 group-hover:gradient-text transition-all duration-300">
                {category.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">{category.count} items</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductCardGlass({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const discount = product.discount || ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0);

  return (
    <Link href={`/product/${product._id}`}>
      <div
        className="product-card cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="product-card-image relative">
          <Image
            src={product.images?.[0] || '/placeholder-product.png'}
            alt={product.name}
            fill
            className="object-cover"
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              -{discount}%
            </div>
          )}

          {/* New Arrival Badge */}
          {product.isNewArrival && (
            <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-purple-600">
              🆕 New
            </div>
          )}

          {/* Overlay Action Buttons */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button className="btn-glass scale-75 hover:scale-90 transition-transform">
              ❤️ Add to Wishlist
            </button>
            <button className="btn-gradient scale-75 hover:scale-90 transition-transform">
              🛒 Quick Add
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          {/* Category */}
          <div className="flex gap-2 flex-wrap">
            <span className="category-badge text-xs">{product.category}</span>
            {product.isTrending && <span className="category-badge text-xs bg-orange-200 text-orange-700 border-orange-300">🔥 Trending</span>}
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:gradient-text transition-all">
            {product.name}
          </h3>

          {/* Brand */}
          {product.brand && <p className="text-sm text-gray-600">{product.brand}</p>}

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? '⭐' : '☆'}>
                  {i < Math.floor(product.rating) ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviewCount})</span>
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-2">
            <span className="text-2xl font-bold gradient-text">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Stock Status */}
          <div className={`text-sm font-semibold ${
            product.stock > 5
              ? 'text-green-600'
              : product.stock > 0
              ? 'text-orange-600'
              : 'text-red-600'
          }`}>
            {product.stock > 5 ? '✓ In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
          </div>
        </div>
      </div>
    </Link>
  );
}

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCardGlass from './ProductCardGlass';
import AnimatedSection from './AnimatedSection';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('featured');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/products`,
          {
            params: {
              [activeTab === 'featured' ? 'isFeatured' : activeTab === 'trending' ? 'isTrending' : 'isNewArrival']: true,
              limit: 6,
            },
          }
        );
        setProducts(response.data.data || []);
      } catch (error) {
        console.log('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeTab]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 slide-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4 gradient-text-accent">Featured Collection</h2>
          <p className="text-xl text-gray-600">Handpicked items you'll love</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: 'featured', label: '✨ Featured' },
            { id: 'trending', label: '🔥 Trending' },
            { id: 'new', label: '🆕 New Arrivals' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'btn-gradient shadow-lg transform scale-105'
                  : 'category-badge hover:scale-105'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin">
              <div className="w-16 h-16 border-4 border-purple-300 border-t-purple-600 rounded-full" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={product._id} className="scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProductCardGlass product={product} />
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="flex justify-center mt-12 slide-in-up">
          <button className="btn-gradient text-lg px-10 py-4 transform hover:scale-105">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
}

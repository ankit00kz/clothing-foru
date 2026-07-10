'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCardGlass from './ProductCardGlass';
import { getCategoryImages, getRandomProductImage } from '@/lib/productImages';

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
        
        // Add images to products from our library
        const productsWithImages = response.data.data?.map((product) => {
          const categoryImages = getCategoryImages(product.category);
          const randomImage = getRandomProductImage(product.category);
          
          return {
            ...product,
            images: product.images && product.images.length > 0 
              ? product.images 
              : [randomImage?.url || randomImage?.thumb],
            thumbnail: product.thumbnail || randomImage?.thumb,
          };
        }) || [];
        
        setProducts(productsWithImages);
      } catch (error) {
        console.log('Failed to fetch products, using sample data');
        
        // Fallback: Create sample products with real images
        const sampleProducts = [
          {
            _id: '1',
            name: 'Classic Cotton T-Shirt',
            category: 'men-clothing',
            price: 29.99,
            originalPrice: 49.99,
            stock: 45,
            rating: 4.5,
            reviewCount: 128,
            isNewArrival: true,
            isTrending: true,
            ...getRandomProductImage('men-clothing'),
          },
          {
            _id: '2',
            name: 'Summer Floral Dress',
            category: 'women-clothing',
            price: 59.99,
            originalPrice: 89.99,
            stock: 32,
            rating: 4.8,
            reviewCount: 256,
            isNewArrival: true,
            ...getRandomProductImage('women-clothing'),
          },
          {
            _id: '3',
            name: 'Running Shoes',
            category: 'sports-wear',
            price: 119.99,
            originalPrice: 179.99,
            stock: 67,
            rating: 4.9,
            reviewCount: 389,
            isTrending: true,
            ...getRandomProductImage('sports-wear'),
          },
          {
            _id: '4',
            name: 'Kids Character Shirt',
            category: 'kids-clothing',
            price: 24.99,
            originalPrice: 34.99,
            stock: 28,
            rating: 4.7,
            reviewCount: 167,
            isNewArrival: true,
            ...getRandomProductImage('kids-clothing'),
          },
          {
            _id: '5',
            name: 'Casual Jeans',
            category: 'casual-wear',
            price: 59.99,
            originalPrice: 79.99,
            stock: 55,
            rating: 4.6,
            reviewCount: 212,
            ...getRandomProductImage('casual-wear'),
          },
          {
            _id: '6',
            name: 'Ethnic Saree',
            category: 'ethnic-wear',
            price: 89.99,
            originalPrice: 129.99,
            stock: 20,
            rating: 4.8,
            reviewCount: 98,
            ...getRandomProductImage('ethnic-wear'),
          },
        ];
        
        const productsWithImages = sampleProducts.map((product) => ({
          ...product,
          images: [product.url],
          colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'White', hex: '#FFFFFF' },
          ],
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        }));
        
        setProducts(productsWithImages);
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
            {products.length > 0 ? (
              products.map((product, idx) => (
                <div key={product._id} className="scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <ProductCardGlass product={product} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products available</p>
              </div>
            )}
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

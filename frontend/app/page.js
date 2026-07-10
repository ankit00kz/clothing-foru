'use client';

import HeroSection from '@/components/HeroSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import FeaturedProducts from '@/components/FeaturedProducts';
import AnimatedSection from '@/components/AnimatedSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Showcase */}
      <AnimatedSection>
        <CategoryShowcase />
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection>
        <FeaturedProducts />
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection>
        <NewsletterSection />
      </AnimatedSection>
    </div>
  );
}

function NewsletterSection() {
  return (
    <section className="py-20 px-4 animated-bg relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center text-white relative z-10">
        <h2 className="text-5xl font-black mb-4">Stay Updated</h2>
        <p className="text-xl mb-8 opacity-90">Subscribe to get exclusive deals and latest trends delivered to your inbox</p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-glass flex-1 text-white"
          />
          <button className="btn-gradient px-8 py-3 font-semibold transition-transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

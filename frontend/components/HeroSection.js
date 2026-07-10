'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg" />

      {/* Floating Blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{
          animation: 'blob 7s infinite',
        }}
      />
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{
          animation: 'blob 7s infinite 2s',
        }}
      />
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{
          animation: 'blob 7s infinite 4s',
        }}
      />

      {/* Interactive Mouse Follow Element */}
      <div
        className="absolute w-96 h-96 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)',
          transition: 'all 0.3s ease-out',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-white drop-shadow-lg slide-in-down">
            Fashion Meets
            <br />
            <span className="gradient-text">Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md slide-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our exclusive collection of premium clothing with stunning 2D animated designs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-gradient text-lg px-10 py-4 transform hover:scale-105">
              ✨ Shop Now
            </button>
            <button className="btn-glass text-lg px-10 py-4 text-white transform hover:scale-105">
              🎬 Watch Video
            </button>
          </div>

          {/* Floating Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: '🚚', title: 'Fast Delivery', desc: 'Free shipping on orders above $50' },
              { icon: '💳', title: 'Secure Payment', desc: 'Safe & encrypted transactions' },
              { icon: '↩️', title: 'Easy Returns', desc: '30-day hassle-free returns' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl transform hover:scale-110 hover:shadow-2xl transition-all duration-300 float"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full"
          style={{
            animation: 'wave 8s linear infinite',
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.87,168.19-17.92,250.06-.88C823.75,31,906.35,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
            opacity="0.3"
          />
        </svg>
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          50% { transform: translateX(25px); }
          100% { transform: translateX(50px); }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-in-down {
          animation: slideInDown 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Clothing For U - Premium Fashion Store</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 right-20 top-20"></div>
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-20 left-20"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 backdrop-blur-2xl bg-white/10 border-b border-white/20 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition">
                  🎨 Clothing For U
                </h1>
              </Link>
              <div className="flex space-x-6 items-center">
                <Link href="/shop" className="text-white/80 hover:text-white transition font-semibold">Shop</Link>
                <Link href="/wishlist" className="text-white/80 hover:text-white transition font-semibold">Wishlist</Link>
                <Link href="/cart" className="text-white/80 hover:text-white transition font-semibold">Cart</Link>
                <div className="flex gap-3">
                  <Link href="/login">
                    <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold backdrop-blur-md transition">
                      Login
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold shadow-lg transition">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Your Style,{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Your Fashion
                </span>
              </h2>
              <p className="text-xl text-white/70">Discover premium quality clothing with cutting-edge design. Explore our exclusive collection and express your unique style.</p>
              <div className="flex gap-4 pt-4">
                <Link href="/shop">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    🛍️ Shop Now
                  </button>
                </Link>
                <button className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 text-white font-bold rounded-2xl transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="backdrop-blur-3xl bg-white/10 border border-white/30 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">👗</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Premium Quality', desc: 'High-quality materials for comfort and durability' },
              { icon: '🚀', title: 'Fast Shipping', desc: 'Free shipping on orders over $50' },
              { icon: '💯', title: '100% Authentic', desc: 'Genuine products guaranteed' },
            ].map((feature, i) => (
              <div
                key={i}
                className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-2xl p-8 hover:bg-white/20 transition transform hover:scale-105 duration-300 shadow-lg"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products Preview */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Featured Collection</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Link href={`/product/${item}`} key={item}>
                <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-2xl overflow-hidden hover:bg-white/20 transition transform hover:scale-105 duration-300 shadow-lg cursor-pointer group">
                  <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center overflow-hidden relative">
                    <span className="text-6xl group-hover:scale-110 transition duration-300">👔</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2">Premium Item {item}</h4>
                    <p className="text-white/70 text-sm mb-4">High-quality fashion piece</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        $29.99
                      </span>
                      <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full">-25%</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
}

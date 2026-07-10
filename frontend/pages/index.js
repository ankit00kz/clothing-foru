import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clothing For U - Shop Latest Fashion</title>
        <meta name="description" content="Shop the latest clothing and fashion trends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">🛍️ Clothing For U</h1>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Cart</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Welcome to Clothing For U</h2>
            <p className="text-xl mb-8">Discover the latest fashion trends and express your style</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure transactions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">↩️</div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                  <div className="bg-gray-200 h-64 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xl">Product Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Product {item}</h3>
                    <p className="text-gray-600 mb-4">Amazing clothing item</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">$29.99</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">About Us</h4>
                <p className="text-gray-400 text-sm">Your one-stop shop for trendy clothing</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><a href="#" className="hover:text-white">Shop</a></li>
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Customer Service</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Returns</a></li>
                  <li><a href="#" className="hover:text-white">Shipping</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                  <li><a href="#" className="hover:text-white">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Clothing For U. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

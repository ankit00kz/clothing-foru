import './styles/globals.css';
import { Providers } from './providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Clothing For U - Fashion with 2D Animations',
  description: 'Premium clothing store with stunning glassmorphism design and 2D animations',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

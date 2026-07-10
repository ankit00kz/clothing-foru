/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#f59e0b',
        accent: '#ef4444',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};

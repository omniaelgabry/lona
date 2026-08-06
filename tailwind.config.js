/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./shop.html",
    "./product.html",
    "./checkout.html",
    "./about.html",
    "./wishlist.html",
    "./account.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          beige: '#F5F5DC',
          gold: '#D4AF37',
          black: '#121212',
          white: '#FFFFFF',
          gray: '#E5E7EB',
          darkGray: '#374151'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

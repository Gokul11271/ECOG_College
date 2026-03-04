/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inst-primary': '#0B1120', // Deep Slate Black
        'inst-navy': '#151C2C',    // Rich Charcoal
        'inst-blue': '#4F6C85',    // Muted Slate Blue
        'inst-yellow': '#D4AF37',  // Champagne Gold
        'inst-orange': '#C5A059',  // Warm Gold
        'inst-black': '#000000',   // Pure Black
        'inst-dark-gray': '#333333', // Dark Text Gray
        'inst-med-gray': '#7A7A7A',  // Medium Gray text
        'inst-light-border': '#EAEAEA', // Light Gray border
        'inst-light-bg': '#F9F9F9',    // Soft Off-White Background
        'inst-white': '#FFFFFF',    // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'rgba(255, 255, 255, 0.33)',
        'bg-num-color': 'rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
}
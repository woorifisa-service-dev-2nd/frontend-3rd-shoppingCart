/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
      'spin-slow': 'spin 1.8s infinite'
    }},
  },
  plugins: [],
}


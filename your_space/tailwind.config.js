/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
  },
    extend: {},
  plugins: [],
}


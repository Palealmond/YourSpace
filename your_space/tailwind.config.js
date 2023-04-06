/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    maxWidth: {
      '1100': '1100px',
    },
  },
    extend: {},
  plugins: [],
}


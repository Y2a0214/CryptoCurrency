/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0A152F',
        'blue-bit': '#17D1C6'
      },
      spacing: {
        '10%': '10%',
      }
    },
  },
  plugins: [],
}
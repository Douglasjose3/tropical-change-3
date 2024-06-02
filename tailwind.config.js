/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        beach: 'url("assets/background.png")',
        chart: 'url("assets/included.jpg")',
      },
      colors: {
        orangeLight: '#F7EDB2',
        orangeMedium: '#FFAC33',
        orangeDark: '#F16354',
        blueMedium: '#1E7C8C',
      },
    },
  },
  plugins: [],
}
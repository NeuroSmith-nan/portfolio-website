/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- 1. เพิ่มบรรทัดนี้
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
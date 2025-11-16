/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // semua file di folder app
    "./components/**/*.{js,ts,jsx,tsx}", // semua komponen jika ada
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

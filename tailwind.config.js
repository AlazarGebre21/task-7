/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}", // optional if you use Tailwind here,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

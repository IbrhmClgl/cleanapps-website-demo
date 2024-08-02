/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-page": "#f28302",
        "txt-dark-gray": "#444444",
        "bg-dark-gray": "#444444",
      },
      screens: {
        "xs": "320px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};

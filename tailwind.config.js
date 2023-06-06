/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#f9f5f3",
          100: "#f2eae6",
          200: "#e2ccc9",
          300: "#d3b0ac",
          400: "#b68c85",
          500: "#99575e",
          600: "#884d54",
          700: "#713f44",
          800: "#5a3234",
          900: "#4a2829",
        },
      },
    },
  },
  plugins: [],
};

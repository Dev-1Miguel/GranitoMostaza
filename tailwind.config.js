/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: "#8B2323",
          cream: "#F5EEDC",
          rose: "#C48B8B",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
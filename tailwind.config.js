/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oi: ["var(--font-oi)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

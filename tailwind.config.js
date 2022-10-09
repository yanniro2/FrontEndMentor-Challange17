/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      Mobile: { "min": "375px", "max": "600px" },
      Desktop: { "min": "1200px", "max": "1440px" },
    },
    colors: {
      "Violet": "hsl(257, 40%, 49%)",
      "Soft-Magenta": "hsl(300, 69%, 71%)",
    },
    fontFamily: {
      "Popins": ["Poppins"],
      "Open-Sans": ["Open Sans"],
    },
    fontWeight: {
      "ms": 400,
      "lg": 600,
    },
    cursor: {
      pointer: 'pointer',
    },
    extend: {},
  },
  plugins: [],
}

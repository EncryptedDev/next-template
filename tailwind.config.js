module.exports = {
  content: [],
  purge: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        default: [
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
          "Apple Color Emoji"
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

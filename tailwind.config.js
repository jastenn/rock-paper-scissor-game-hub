module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(229, 25%, 31%)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      padding: {
        4.5: "1.125rem",
      },
      boxShadow: {
        "inset-solid": "inset 0 4px 1px rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [],
};

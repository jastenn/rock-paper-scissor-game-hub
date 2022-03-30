module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        "short-only": { raw: "(max-height: 580px) and (max-width: 767px)" },
      },
      backgroundImage: {
        pentagon: 'url("/src/assets/images/bg-pentagon.svg")',
      },
      colors: {
        "dark-blue": "hsl(229, 25%, 31%)",
        white: "#FBFBFB",
        "dark-gray": "hsl(217, 16%, 45%)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      padding: {
        4.5: "1.125rem",
      },
      boxShadow: {
        "inset-solid-4": "inset 0 4px 1px rgba(0, 0, 0, .2)",
        "inset-solid-6": "inset 0 6px 1px rgba(0, 0, 0, .2)",
      },
      fontSize: {
        4.5: "2.5rem",
      },
    },
  },
  plugins: [],
};

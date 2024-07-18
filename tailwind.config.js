export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["'Inter'", "sans-serif"],
      noto: ["'Noto Sans'", "sans-serif"],
    },
    extend: {
      screens: {
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

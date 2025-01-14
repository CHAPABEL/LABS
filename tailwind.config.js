{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        corry: "#E29578",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  plugins: [],
};

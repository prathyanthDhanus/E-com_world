/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#EDA415",
        customBlue: "#003F62",
        lighterBlue: "#005F93",
        customWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const colors = import("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 66%, 49%)", // Cyan
        secondary: "hsl(0, 87%, 67%)", // Red
        secondaryTranslucent: "hsla(0, 87%, 67%, 0.45)",
        darkViolet: "hsl(257, 27%, 26%)",
        customGray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
        softWhite: "hsl(0, 0%, 96%)",
        ...colors, // Tailwind's default colors
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },

      fontSize: {
        baseFS: "1.125rem", // 18px
      },
    },
  },

  plugins: [],
};

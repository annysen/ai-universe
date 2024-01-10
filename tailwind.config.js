/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mytheme: {
      primary: "#0082ff",

      secondary: "#bc6200",

      accent: "#008a00",

      neutral: "#2b2535",

      "base-100": "#ffffff",

      info: "#00c6ff",

      success: "#00fab1",

      warning: "#d66500",

      error: "#ff0061",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

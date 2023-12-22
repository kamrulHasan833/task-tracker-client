/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#6E3EB8",
        "secondary-color": "#c21b5e",
      },
      maxWidth: {
        standard: "96rem",
        large: "120rem",
        small: "64rem",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};

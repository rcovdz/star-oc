/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FCFCFC",
          2: "#35C0ED",
          3: "#08376B",
        },
      },
      fontFamily: {
        p: "var(--font-p)",
        a: "var(--font-a)",
      },
      backgroundImage: {
        "hero-bg": "url(assets/hero-bg.jpg)",
      },
    },
    screens: {
      // base: "379px" -> small phone
      xs: "380px", // mobile phone
      sm: "480px", // tablet
      md: "770px",
      lg: "1025px",
      xl: "1280px",
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".main_wrapper": {
          "@apply py-[1.449rem] xs:py-[2.43rem] md:py-[3.411rem] lg:py-[1.658rem] xl:py-[1.376rem]":
            {},
        },
      });
    }),
  ],
};

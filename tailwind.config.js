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
      sm: "480px", // small tablet
      md: "770px", // tablet
      lg: "1025px", // laptop
      xl: "1280px", // desktop
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".main_container": {
          "@apply max-w-[91.75rem] mx-auto px-[1.25rem] pt-[5.39rem] xs:pt-[5.455rem] sm:pt-[5.453rem] md:pt-[5.781rem] md:px-10 lg:pt-[7.031rem] xl:pt-[7.531rem] xl:px-12":
            {},
        },
        ".main_wrapper": {
          "@apply flex flex-col gap-3 py-[1.449rem] xs:py-[2.468rem] md:py-[1rem] lg:py-[1.354rem] xl:py-[1.94rem]":
            {},
        },
        ".container": {
          "@apply max-w-[91.75rem] mx-auto px-[1.25rem] md:px-10 xl:px-12": {},
        },
        ".wrapper": {
          "@apply mb-[1.449rem] xs:mb-[2.468rem] md:mb-[1rem] lg:mb-[1.354rem] xl:mb-[1.94rem]":
            {},
        },
      });
    }),
  ],
};

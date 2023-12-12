const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "top-gradient": "url('/topGradient.svg')",
      },
      colors: {
        primary: colors.neutral,
      },
      textColor: {},
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

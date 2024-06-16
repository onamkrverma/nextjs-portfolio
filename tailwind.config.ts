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
        danger: colors.red,
      },
      textColor: {},
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": colors.neutral[600],
            "--tw-prose-invert-body": colors.neutral[400],
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;

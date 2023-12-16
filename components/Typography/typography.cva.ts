import { cva } from "class-variance-authority";

const typography = cva("", {
  variants: {
    variant: {
      primary: ["text-primary-900 dark:text-primary-50"],
      secondary: ["text-primary-600 dark:text-primary-400"],
      button: ["text-white font-semibold"],
      error: ["text-sm text-danger-600"],
      "app-primary": ["text-app-primary-700"],
      success: ["text-green-800"],
    },
    size: {
      h1: "text-6xl",
      h2: "text-5xl",
      h3: "text-4xl",
      h4: "text-3xl",
      h5: "text-2xl",
      h6: "text-xl",
      subheading: "text-lg",
      body1: "text-base",
      body2: "text-sm",
      small: "text-xs",
    },
    weight: {
      light: ["font-thin"],
      normal: ["font-normal"],
      medium: ["font-medium"],
      bold: ["font-bold"],
      "semi-bold": ["font-semibold"],
    },
    disabled: {
      true: ["text-neutral-400 italic"],
    },
  },
  defaultVariants: {
    size: "body1",
    weight: "normal",
    variant: "primary",
  },
});

export default typography;

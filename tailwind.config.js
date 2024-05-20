import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-blue": "var(--dark-blue)",
      "cph-blue": "var(--cph-blue)",
      "light-blue": "var(--light-blue)",
      "dark-yellow": "var(--dark-yellow)",
      "cph-yellow": "var(--cph-yellow)",
      "light-yellow": "var(--light-yellow)",
      "cph-white": "var(--cph-white)",
      "grey-lighter": "var(--grey-lighter)",
      "grey-light": "var(--grey-light)",
      "grey-mid": "var(--grey-mid)",
      "grey-dark": "var(--grey-dark)",
      "grey-text": "var(--grey-text)",
    },
    fontSize: {
      1: "var(--fs-1)",
      2: "var(--fs-2)",
      3: "var(--fs-3)",
      4: "var(--fs-4)",
      5: "var(--fs-5)",
      6: "var(--fs-6)",
      large: "var(--fs-large)",
      p: "var(--fs-p)",
      small: "var(--fs-small)",
      smaller: "var(--fs-smaller)",
    },
    extend: {
      boxShadow: {
        card: "rgba(0, 0, 0, 0.15) 0px 0px 15px 0px ",
        boxbox: "rgba(0, 0, 0, 0.2) 0px 4px 12px 2px",
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

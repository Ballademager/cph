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
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D4670",
        secondary: "#E5E5E5",
        text: "#CDCDCD",
        darkGray: "#1D1C1A",
        graytext: "#ABABAB",
        footerbg: "#161616",
      },
      boxShadow: {
        'navShadow': '0px 0px 32px #443C68',
        'menuShadow': '0px 0px 32px #443C68',
        'footerShadow': '0px -11px 32px #443C68',
      }
    },
  },
  plugins: [],
};

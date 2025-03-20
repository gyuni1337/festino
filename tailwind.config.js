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
        // primary: "#4D4670",
        primary: "#A491FF",
        secondary: "#E5E5E5",
        // text: "#CDCDCD",
        text: "white",
        darkGray: "#141313",
        graytext: "#ABABAB",
        lightPurple: "#A491FF",
        footerbg: "#161616",
      },
      boxShadow: {
        // 'navShadow': '0px 0px 32px #443C68',
        'navShadow': '0px 0px 20px #A491FF',
        // 'menuShadow': '0px 0px 32px #443C68',
        'menuShadow': '0px 0px 15px #A491FF',
        'footerShadow': '0px -11px 32px #443C68',
      }
    },
  },
  plugins: [],
};

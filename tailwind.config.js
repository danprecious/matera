/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_local-components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(98, 135, 236)",
        secondary: "rgb(247, 107, 107)",
        accent: "rgb(233, 230, 230)",
        bg: "white",
        bgdark: "black",
      },
    },
  },
  plugins: [],
}

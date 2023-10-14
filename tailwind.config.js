/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "logo": ["Lobster Two", "sans-serif"],
        "navlinks": ["Montserrat", "sans-serif"],
        "article": ["Roboto", "sans-serif"],
      },
      colors: {
        "dark": "#191919",
        "light": "#FAFAFA"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'tablet':'640px',
      'laptop':'1024px',
      'desktop':'1280px'
    },
    extend: {
      fontFamily:{
        'poppins' : ['Poppins'],
      }
    },
  },
  plugins: [],
})
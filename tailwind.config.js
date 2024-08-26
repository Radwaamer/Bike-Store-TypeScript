/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#51E8EF",
        "white-color":"#FFFFFF",
        "gray":"#848484",
        "black-color":"#000000"
      }
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    container: {
      padding: '1rem'
    }
  },
  plugins: [],
}


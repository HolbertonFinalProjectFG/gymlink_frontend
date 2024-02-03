/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans : ['Inter', 'sans-serif']
    },
    extend: {
      colors:{
        light:{
          primary: '#F09518',
          primary_light: '#FFCD88',
          secondary: '#E4E3E2',
          backg: '#EFF0F1',
          secondary_op: '#232323'
        }
      },
    } 
  },
  plugins: [],
}
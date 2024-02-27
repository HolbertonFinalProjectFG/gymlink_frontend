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
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
      }
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
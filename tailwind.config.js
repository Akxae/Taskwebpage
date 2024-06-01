/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '106p':'106%',
        '37pp':'37%',
      },
      height:{
        '110vh':'130vh',
        '90vh':'90vh',
        '80vh':'90vh',
        '50vh':'50vh'
      },
      borderRadius:{
        '5rem':'3.5rem'
      }
      ,
      fontSize:{
        '1px':'8px'
      }
      ,
      aspectRatio:{
        '3/2ap':'3/2'
      }
      ,
      inset:{
        '30':'30rem'
      }
    },
    fontFamily:{
      abc:['Orbitron' , 'sans-serif']
    }
  },
  plugins: [],
}
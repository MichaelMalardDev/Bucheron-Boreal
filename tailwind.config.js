/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        generalsans: "GeneralSans",
        generalsansbold: "GeneralSans-Bold",
        gambetta: "Gambetta"
      },
      colors:{
        'perso-beige': "#D5A051",
        'perso-vert': "#93A656",
        'perso-vertFonce' : '#3B4222',
        'perso-brunFonce': "#613F19",
        'perso-rouge': "#BA4242",
      }
    },
    screens:{
      'xl': '1200px'
    }
  },
  plugins: [],
}


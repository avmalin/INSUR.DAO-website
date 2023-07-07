/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'linked-in': '#0177b5',
      
      },
      fontFamily:{
        'oswald':['Oswald'],
        'oswald-extra-light':['Oswald-ExtraLight'],
      }
  },
  },
  plugins: [],
}


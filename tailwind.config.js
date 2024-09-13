/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // Color blanco para títulos
        secondary: '#D53F8C', // Color rosa/magenta
        tertiary: '#e0f2fe', // Color cyan-200
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Para títulos
        body: ['Poppins', 'sans-serif'], // Para el cuerpo del texto
      },
    },
  },
  plugins: [],
}

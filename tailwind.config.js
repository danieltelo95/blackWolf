module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1', // Un tono púrpura, ideal para temas místicos.
        secondary: '#D53F8C', // Un tono rosa/magenta para un contraste atractivo.
        tertiary: '#ECC94B', // Un amarillo suave, perfecto para detalles o acentos.
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Para títulos, que den un aspecto elegante y clásico.
        body: ['Poppins', 'sans-serif'], // Para el cuerpo del texto, moderno y fácil de leer.
      },
    },
  },
}

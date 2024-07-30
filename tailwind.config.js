module.exports = {
  content: [
    './*.html', // Inclure tous les fichiers HTML à la racine
    './**/*.html', // Inclure tous les fichiers HTML dans les sous-dossiers
    './js/**/*.js',],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
        'lora': ['Lora', 'sans-serif'] 
      },
      colors: {
        main: "#292736",
        "main-light": "#4A4856",
        "red-dark": "#D41313",
        "red-light": "#F4C4C4",
        "gray-dark": "#626262",
        "gray-light": "#E6E6E6",
      },
      maxWidth: {
        260: '260px',
      }
    },
  },
  plugins: [],
};
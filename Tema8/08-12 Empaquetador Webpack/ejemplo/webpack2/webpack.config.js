const path = require('path');

module.exports = {
  entry: './src/index.js',        // archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // carpeta de salida
    filename: 'bundle.js'         // archivo generado
  },
  mode: 'development'             // modo: development o production
};

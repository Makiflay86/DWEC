const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* entry: {
        main: './src/index.js',
        contacto: './src/contacto.js',
    }, */
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                type: "javascript/auto"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['main']   // importante: solo carga main.bundle.js
        })/* ,
        new HtmlWebpackPlugin({
            template: 'src/contacto.html',
            filename: 'contacto.html',
            chunks: ['contacto']  // importante: solo carga contacto.bundle.js Es para evitar duplicaciones
        }), */
    ],
    devtool: 'source-map'
};
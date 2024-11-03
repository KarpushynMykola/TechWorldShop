const path = require('path');

module.exports = {
    entry: './src/index.js', // Зміни на свій вхідний файл
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Зміни на бажану папку виводу
    },
    mode: 'development', // або 'production'
};

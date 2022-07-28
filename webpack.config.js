const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index',
    watch: true,

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 9000,
    }
};
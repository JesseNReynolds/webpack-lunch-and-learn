const path = require('path');

module.exports = {

    optimization: {
        minimize: false
    },
    
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
        ]
    },

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // I had to add this to the webpack in web content, but it seems to be doing it by default
        // environment: {
        //     arrowFunction: false
        // }
    }


};
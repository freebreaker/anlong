
require('babel-register');
require('path/to/es6/script');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:'./build',
        historyApiFallback: true,
        inline: true,
        port: 8181
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
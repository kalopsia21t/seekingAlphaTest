const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack/loaders');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.(jsx)$/, exclude: /node_modules/, use: [loaders.BABEL_LOADER] },
            { test: /\.(css)$/, use: [{ loader: 'style-loader' }, loaders.CSS_LOADER] },            
            { test: /\.(less)$/, use: [{ loader: 'style-loader' }, loaders.CSS_LOADER, loaders.LESS_LOADER] }
        ]
    },

    resolve: {
        extensions: ['*', ".js", ".jsx"],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

};
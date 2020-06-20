var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
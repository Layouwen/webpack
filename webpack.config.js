var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test - 首页',
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        })
    ],
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                    }
                },
                'css-loader',
            ]
            // use: ['style-loader', 'css-loader']
        }]
    }
}
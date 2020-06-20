module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    }
}
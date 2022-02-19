const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: resolve(__dirname, 'src/js/main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssPlugin.loader, 'css-loader']
            },
            {
                test: /\.mp3$/i,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HTMLWebpackPlugin({ template: resolve(__dirname, 'src', 'index.html') }),
        new BundleAnalyzer(),
    ]
}
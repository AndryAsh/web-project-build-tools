const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: resolve(__dirname, './src/index.js'),
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: {
                    loader: 'img-optimize-loader',
                    options: {
                        compress: {
                            mode: 'high',
                            webp: true,
                            gifsicle: true,
                            disableOnDevelopment: false,
                        },
                    },
                },
            },
            {
                test: /\.(mp[3|4])$/i,
                use: [
                    'file-loader',
                ],
            },
        ],
    }
}

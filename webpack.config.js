const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './dist/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        }),
        new MiniCssExtractPlugin({
        }),
      ],
}
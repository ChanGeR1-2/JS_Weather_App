const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        watchFiles: ['src/**'],
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|webp|svg|jpeg)$/,
                type: 'asset/resource',
            },
        ],
    },
}
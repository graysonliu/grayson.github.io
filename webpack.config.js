const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    // mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                // for images, PDF files
                test: /\.(pdf|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        port: 3000,
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Zijian Liu",
            favicon: "./src/images/thinking.svg"
        })
    ]
};

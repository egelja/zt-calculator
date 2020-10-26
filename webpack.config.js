var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    stats: { colors: true },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    failOnError: true,
                    failOnWarning: true,
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./webpage_plain.html",
            template: "./src/webpage/plain.html",
        }),
        new HtmlWebpackPlugin({
            filename: "./webpage.html",
            template: "./src/webpage/fancy.html",
        }),
        new WorkerPlugin({
            globalObject: false
        }),
    ],
};

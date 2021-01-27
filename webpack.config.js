var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/main.js",
        charts: "./src/js/charts.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    stats: { colors: true },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
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
            filename: "./webpage.html",
            template: "./src/webpage.html",
        }),
        new WorkerPlugin({
            globalObject: false,
        }),
        new ESLintPlugin({
            failOnError: true,
            failOnWarning: true,
        }),
    ],
};

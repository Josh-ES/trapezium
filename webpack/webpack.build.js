var path = require("path");
var webpack = require("webpack");

var DtsBundlePlugin = require("./webpack.dts.plugin");

module.exports = {
    entry: {
        main: "./src/index",
    },

    resolve: {
        extensions: [".ts"],
    },

    output: {
        filename: "trapezium.js",
    },

    module: {
        rules: [
            /**
             * Enable inline source maps for code coverage report.
             *
             * See project repository for details / configuration reference:
             * https://github.com/s-panferov/awesome-typescript-loader
             */
            {
                test: /\.ts(x?)$/,
                use: [
                    "ts-loader",
                ],
            },
        ],
    },

    plugins: [
        new DtsBundlePlugin(),
    ],
};

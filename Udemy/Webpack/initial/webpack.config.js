const path = require("path");// let node determine the path
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: './src/index.js', // relative path
    output: {
        path: path.resolve(__dirname, "build"), // must be an absolute path, __dirname is constant in nodejs (reference to current working directory), folder called build
        // filename: 'bundle.js', // final name of output
        filename: "[name].[chunkhash].js", // essentially adds random characters to the file name to 'bust' browser caching
        publicPath: "build/"
    },
    module: {
        rules: [
            {
                use: "babel-loader", // tells webpack what loader to run
                test: /\*js$/, // used by webpack and applied to all file names that we import into our project (just makes sure the file ends with .js - if it does, babel will get applied....if it doesn't (like .css), it won't get applied)
                exclude: /node_modules/
            },
            {
                // use: ["style-loader", "css-loader"],//applied from right to left
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ],
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    // "url-loader",
                    {
                        loader: "url-loader",
                        options: {
                            limit: 40000// look for any image that is 40,000 bytes large...if larger, save as separate file, else include in bundle.js output
                        }
                    },
                    "image-webpack-loader"
                ]
            }
        ]
    },
    plugins: [
        // find any files transformed by loader and saved to "styles.css"
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};

module.exports = config;

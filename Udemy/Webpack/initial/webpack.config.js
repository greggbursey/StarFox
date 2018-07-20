const path = require("path");// let node determine the path
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: './src/index.js',// relative path
    output: {
        path: path.resolve(__dirname, "build"),// must be an absolute path, __dirname is constant in nodejs (reference to current working directory), folder called build
        filename: 'bundle.js'// final name of output
    },
    module: {
        rules: [
            {
                use: "babel-loader",// tells webpack what loader to run
                test: /\*js$/,//used by webpack and applied to all file names that we import into our project (just makes sure the file ends with .js - if it does, babel will get applied....if it doesn't (like .css), it won't get applied)
            },
            {
                //use: ["style-loader", "css-loader"],//applied from right to left
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
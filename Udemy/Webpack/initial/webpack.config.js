const path = require("path");// let node determine the path

const config = {
    entry: './src/index.js',// relative path
    output: {
        path: path.resolve(__dirname, "build"),// must be an absolute path, __dirname is constant in nodejs (reference to current working directory), folder called build
        filename: 'bundle.js'// final name of output
    }
};

module.exports = config;
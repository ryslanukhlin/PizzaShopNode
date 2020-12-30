const path = require('path')

module.exports = {
    mode: "development",
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname, "client/dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
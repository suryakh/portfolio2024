const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    "entry": "./index.js",
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
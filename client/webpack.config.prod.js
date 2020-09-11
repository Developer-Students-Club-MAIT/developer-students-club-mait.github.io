const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)/,
              exclude: /node_modules/,
              use: { loader: 'babel-loader' }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: {
                  loader: 'url-loader',
                  options: { 
                    limit: 15360,
                    name: '[path][name].[ext]'
                  }
              }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: resolve(__dirname, 'src', 'index.html')
        })
    ]
}
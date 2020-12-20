const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    name: 'server',
    mode: 'development',
    entry: './src/App/App.js',
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    output: {
        path: path.join(__dirname, '../dist/node'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        publicPath: '/dist/node/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          src: path.resolve(__dirname, '../src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new LoadablePlugin()
    ]
}
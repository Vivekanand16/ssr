const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    name: 'web',
    mode: 'production',
    entry: './src/App/ClientApp.js',
    target: 'web',
    output: {
        path: path.join(__dirname, '../dist/client'),
        filename: '[name].js',
        publicPath: '/client/'
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
        new LoadablePlugin(), 
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist/**/*')]
        })
    ]
}
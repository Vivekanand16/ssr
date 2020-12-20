const webpack = require('webpack')

const WebpackClient = require('./webpack.client.js')
const WebpackServer = require('./webpack.server.js')

webpack([WebpackClient, WebpackServer]).run((err, stats) => {
    if(err) {
        console.log("Error in webpack")
    }
    else {
        console.log("Bundling Success")
    }
})
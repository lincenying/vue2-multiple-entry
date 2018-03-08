var path = require("path")
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var entris = require('./entris')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
        }]
    },
    output: {
        publicPath: '/'
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({'process.env': config.dev.env}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
})

Object.keys(entris).forEach(function(entry) {
    config.plugins.push(
        new HtmlWebpackPlugin({
            chunks: ['vendors', entry],
            filename: entry + '/index.html',
            template: 'src/template/index.html',
            inject: true
        })
    )
})

Object.keys(config.entry).forEach(function(name) {
    config.entry[name] = ['./build/dev-client'].concat(config.entry[name])
})

module.exports = config

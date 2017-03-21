var path = require("path")
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var utils = require('./utils')
var entris = require('./entris')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders()
    },
    output: {
        publicPath: '/'
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({'process.env': config.dev.env}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                vue: {
                    loaders: utils.cssLoaders()
                }
            }
        })
    ]
})

Object.keys(entris).forEach(function(entry) {
    config.plugins.push(
        new HtmlWebpackPlugin({
            chunks: ['vendor', entry],
            filename: entry + '.html',
            template: 'src/template/index.html',
            inject: true
        })
    )
})

Object.keys(config.entry).forEach(function(name) {
    config.entry[name] = ['./build/dev-client'].concat(config.entry[name])
})

module.exports = config

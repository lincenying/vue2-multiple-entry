const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('../config')
const entris = require('./entris')

let webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: false,
            usePostCSS: false
        })
    },
    output: {
        publicPath: '/'
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({ 'process.env': config.dev.env }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new OpenBrowserPlugin()
    ]
})

Object.keys(entris).forEach(function(entry) {
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            isProd: false,
            chunks: ['vendors', entry],
            filename: entry + '/index.html',
            template: 'src/template/index.html',
            inject: true
        })
    )
})

Object.keys(webpackConfig.entry).forEach(function(name) {
    webpackConfig.entry[name] = ['./build/dev-client'].concat(webpackConfig.entry[name])
})

module.exports = webpackConfig

/* global require, module, process */
var path = require("path")
var config = require('../config')
var utils = require('./utils')
var entris = require('./entris')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const SwRegisterWebpackPlugin = require('sw-register-webpack-plugin')

config.build.productionSourceMap = false

baseWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
        },  {
            test: /\.less/,
            loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'less-loader'])
        }]
    },
    devtool: config.build.productionSourceMap
        ? '#source-map'
        : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash:7].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:7].css')),
        new SWPrecacheWebpackPlugin(config.swPrecache.build),
        new SwRegisterWebpackPlugin({
            prefix: '/',
            filePath: path.resolve(__dirname, '../src/sw-register.js')
        })
    ]
})

Object.keys(entris).forEach(function(entry) {
    baseWebpackConfig.plugins.push(new HtmlWebpackPlugin({
        chunks: [ 'vendors', entry ],
        filename: entry + '/index.html',
        template: 'src/template/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }))
})

module.exports = baseWebpackConfig

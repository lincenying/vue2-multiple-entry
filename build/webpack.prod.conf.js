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

config.build.productionSourceMap = false

baseWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.build.productionSourceMap, extract: true})
    },
    devtool: config.build.productionSourceMap
        ? '#source-map'
        : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash:7].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash:7].js')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'manifest', chunks: ['vendor']}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:7].css')),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                context: __dirname,
                vue: {
                    loaders: utils.cssLoaders({sourceMap: config.build.productionSourceMap, extract: true})
                }
            }
        })
    ]
})

Object.keys(entris).forEach(function(entry) {
    baseWebpackConfig.plugins.push(new HtmlWebpackPlugin({
        chunks: [ 'manifest', 'vendor', entry ],
        filename: entry + '.html',
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

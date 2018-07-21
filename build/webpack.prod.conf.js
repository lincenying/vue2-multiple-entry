/* global require, module, process */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
// const SwRegisterWebpackPlugin = require('sw-register-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const utils = require('./utils')
const config = require('../config')
const entris = require('./entris')

let baseWebpackConfig = require('./webpack.base.conf')

baseWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash:7].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -20,
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                cache: true,
                sourceMap: config.build.productionSourceMap,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    // 避免 cssnano 重新计算 z-index
                    // safe: true
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: utils.assetsPath('css/[name].[contenthash:7].css'),
            chunkFilename: utils.assetsPath('css/[name].[contenthash:7].css'),
        }),
        new SWPrecacheWebpackPlugin(config.swPrecache.build),
        // new SwRegisterWebpackPlugin({
        //     prefix: '/',
        //     filePath: path.resolve(__dirname, '../src/sw-register.js')
        // })
    ]
})

Object.keys(entris).forEach(function(entry) {
    const chunks = ['manifest', 'vendors', entry]
    baseWebpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            isProd: true,
            chunks,
            filename: entry + '/index.html',
            template: 'src/template/index.html',
            inject: true,
            chunksSortMode(chunk1, chunk2) {
                const orders = chunks
                const order1 = orders.indexOf(chunk1.names[0])
                const order2 = orders.indexOf(chunk2.names[0])
                return order1 - order2
            }
        })
    )
})

module.exports = baseWebpackConfig

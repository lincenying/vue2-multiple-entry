/* global require, module, __dirname */

const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const config = require('../config')
const utils = require('./utils')
const entris = require('./entris')

const projectRoot = path.resolve(__dirname, '../')
const isProd = process.env.NODE_ENV === 'production'

const jsLoader = [
    {
        loader: 'cache-loader',
        options: {
            cacheDirectory: path.join(__dirname, '../node_modules/.cache/babel-loader'),
            cacheIdentifier: process.env.NODE_ENV + '_babel'
        }
    }
]
if (env !== 'development') {
    jsLoader.push({
        loader: 'thread-loader'
    })
}
jsLoader.push({
    loader: 'babel-loader'
})

const baseWebpackConfig = {
    entry: {
        vendors: ['vue']
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: isProd ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [path.join(__dirname, '../node_modules')],
        alias: {
            '~src': path.resolve(__dirname, '../src'),
            '~api': path.resolve(__dirname, '../src/api/index'),
            '~api-config': path.resolve(__dirname, '../src/api/config'),
            '~components': path.resolve(__dirname, '../src/components'),
            '~pages': path.resolve(__dirname, '../src/pages'),
            '~polyfill': path.resolve(__dirname, '../src/polyfill'),
            '~store': path.resolve(__dirname, '../src/store'),
            '~utils': path.resolve(__dirname, '../src/utils')
        }
    },
    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },
    module: {
        rules: [
            // 取消编译前eslint验证, 可以直接使用 npm run lint
            // {
            //     test: /\.vue$/,
            //     loader: 'eslint-loader',
            //     enforce: 'pre',
            //     include: projectRoot,
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     enforce: 'pre',
            //     include: projectRoot,
            //     exclude: /node_modules/
            // },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.join(__dirname, '../node_modules/.cache/vue-loader'),
                            cacheIdentifier: process.env.NODE_ENV + '_vue'
                        }
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: true
                            },
                            cacheDirectory: path.join(__dirname, '../node_modules/.cache/vue-loader'),
                            cacheIdentifier: process.env.NODE_ENV + '_vue'
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                include: projectRoot,
                exclude: /node_modules/,
                use: jsLoader
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' })
    ]
}
baseWebpackConfig.entry = Object.assign(baseWebpackConfig.entry, entris)
module.exports = baseWebpackConfig

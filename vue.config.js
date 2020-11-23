/* eslint-disable no-inline-comments */
const entris = require('./entris')
const pages = {}
Object.keys(entris).forEach(item => {
    pages[item] = {
        // page 的入口
        entry: 'src/modules/' + item + '/index.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: item + '.html'
    }
})

module.exports = {
    publicPath: '/',
    // publicPath: '/vue2-multiple-entry/',
    pages,
    configureWebpack: {
        devtool: 'source-map',
        performance: {
            hints: 'warning',
            maxAssetSize: 30000000, // 单位为字节
            maxEntrypointSize: 50000000, // 单位为字节
            assetFilter(assetFilename) {
                // 提供资源文件名的断言函数
                return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
        config.module.rule('eslint').uses.clear()
        config.module.rule('eslint').clear()
    },
    css: {
        loaderOptions: {}
    },
    pluginOptions: {},
    devServer: {
        port: 8086,
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        historyApiFallback: {
            rewrites: [
                // shows views/landing.html as the landing page
                { from: /^\/$/, to: '/index.html' },
                // shows views/subpage.html for all routes starting with /subpage
                { from: /^\/module2/, to: '/module2.html' },
                { from: /^\/module3/, to: '/module3.html' },
                { from: /^\/router/, to: '/router.html' },
                { from: /^\/vuex/, to: '/vuex.html' },
                { from: /^\/view/, to: '/view.html' }
            ]
        }
    }
}

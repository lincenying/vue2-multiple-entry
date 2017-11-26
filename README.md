# vue2 多页配置实例

基于`vue2 + vue-router + vuex`而组成的多页配置实例

多页实例中包含 纯单页, 基于 vue-router 的单页, 基于 vue-router + vuex 的单页, 多种模式自由组合

在 module 文件夹中只留一个模块, 就变成 纯`SPA`

所有模块均带修改head里的title, 所有模块也都包含`ajax`例子, 任何不带`ajax`的例子都是耍流氓

vuex模块带有懒加载

DEMO: http://old.mmxiaowu.com/vue2-multiple-entry/index

```

fork
git clone

// 安装依赖
npm install  or  yarn

// 生产模式
npm run build

// 开发模式
npm run dev
```

# 目录结构
- /build/          = webpack配置文件目录
- /dist/           = webpack编译后生成文件目录
- /src/api/        = axios配置目录
- /src/assets/     = 静态文件目录
- /src/components/ = 组件目录
- /src/modules/    = 多页面模块, 每个模块一个文件夹
- /src/modules/router    = 多页面模块之带路由模块的例子
- /src/modules/vuex    = 多页面模块之带路由和vuex的模块的例子
- /static/         = 静态文件目录
- /template/       = html文件模版
- /utils/          = 一些有用的插件

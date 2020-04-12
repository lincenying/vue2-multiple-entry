const fs = require('fs')
const path = require('path')
const entryPath = path.resolve(__dirname, './src/modules')

const entris = fs.readdirSync(entryPath).reduce(function (o, dirname) {
    o[dirname] = path.join(entryPath, dirname)
    return o
}, {})

module.exports = entris

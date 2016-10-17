var fs = require('fs')
var path = require('path')
var entryPath = path.resolve(__dirname, '../src/modules')

var entris = fs.readdirSync(entryPath).reduce(function (o, dirname) {
    o[dirname] = path.join(entryPath, dirname)
    return o
}, {})

module.exports = entris

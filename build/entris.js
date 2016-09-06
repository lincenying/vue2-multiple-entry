var fs = require('fs')
var path = require('path')
var entryPath = path.resolve(__dirname, '../src/entry')

var entris = fs.readdirSync(entryPath).reduce(function (o, filename) {
    /\.js$/.test(filename) && (o[filename.replace('.js', '')] = path.join(entryPath, filename))
    return o
}, {})

module.exports = entris

import toastr from 'toastr'
toastr.options.positionClass = 'toast-top-center'

function pluralize(time, label) {
    return time + label
}

export const setMessage = config => {
    let content, type
    if (typeof config === 'string') {
        content = config
        type = 'error'
    } else {
        content = config.content
        type = config.type
    }
    toastr[type](content)
}

export const strlen = str => {
    let charCode = -1
    const len = str.length
    let realLength = 0
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) realLength += 1
        else realLength += 2
    }
    return realLength
}

export function timeAgo(time) {
    const preg = /^[\d]+$/
    const timestamp = preg.test(time)
    if (!timestamp) {
        const tmp = Date.parse(time)
        time = tmp / 1000
    }
    const between = Date.now() / 1000 - Number(time)
    if (between < 60) {
        return '刚刚'
    } else if (between < 3600) {
        return pluralize(parseInt(between / 60, 10), ' 分钟前')
    } else if (between < 86400) {
        return pluralize(parseInt(between / 3600, 10), ' 小时前')
    }
    return pluralize(parseInt(between / 86400, 10), ' 天前')
}

export const timeYmd = timestamp => {
    var time = new Date(timestamp * 1000)
    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var date = time.getDate()
    return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}

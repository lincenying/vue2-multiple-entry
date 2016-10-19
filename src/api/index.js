import request from '../utils/request'

export function getTopics(config) {
    return request(`https://cnodejs.org/api/v1/topics?page=${config.page}`)
}

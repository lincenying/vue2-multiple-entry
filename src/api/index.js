import config from '@/api/config'
import { setMessage } from '@/utils'
import axios from 'axios'
import NProgress from 'nprogress'
import qs from 'qs'

axios.interceptors.request.use(
    config => {
        NProgress.start()
        return config
    },
    error => Promise.reject(error)
)

axios.interceptors.response.use(
    response => response,
    error => Promise.resolve(error.response)
)

function checkStatus(response) {
    NProgress.done()
    if (response.status === 200 || response.status === 304) {
        return response.data
    }
    return {
        success: false,
        message: response.statusText,
        data: response.statusText
    }
}

function checkCode(res) {
    if (!res.success) {
        setMessage(res.message || res.data)
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url: config.api + url,
            data: qs.stringify(data),
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(checkStatus)
            .then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: config.api + url,
            params,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(checkStatus)
            .then(checkCode)
    }
}

import axios from 'axios'
import qs from 'qs'
// import { isJSON } from './index'
// import Router from "vue-router";
import route from '@/router'

// 基本实例
const service = axios.create({
        headers: {
            'content-type': 'application/json',
            'Authorization': window.accesstoken,
            'accessToken': window.accesstoken
        }
    })
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // request 拦截器
    // 对表单数据进行序列化
service.interceptors.request.use(request => {
    request.timeout = 5000
    return request
}, error => {
    return Promise.reject(error)
})

/**
 * @description 接口返回数据说明
 * @version 1.0.0
 * code 状态码 200 => success
 * msg 返回信息
 * data 请求数据
 */
// response 拦截器
service.interceptors.response.use(response => {
    // if (!response.data.success) {
    //   return Promise.reject('error')
    // }
    // if (isJSON(response.data)) {
    //   response.data = JSON.parse(response.data)
    // }
    // if (response.data) {
    //   return response.data
    // }
    return response.data
}, error => {
    return Promise.reject(error)
})

export default service
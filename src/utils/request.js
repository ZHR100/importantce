import axios from 'axios'

export function request(config) {
    const ins = axios.create({
        baseURL: 'http://127.0.0.1:7111/wangyiyun'
    })

    return ins(config)
}
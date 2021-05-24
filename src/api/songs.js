import { request } from '../utils/request'

export function getTopList() {
    return request({
        url: '/toplist',
    })
}
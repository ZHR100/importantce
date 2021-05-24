import { request } from '../utils/request'

export function getBanner(type) {
    return request({
        // url: '/banner?type=' + type
        url: '/banner',
        params: {
            type
        }
    })
}

export function getPersonalized() {
    return request({
        url: '/personalized',
    })
}

export function getPlaylistDetail(id) {
    return request({
        url: '/playlist/detail?id=' + id,
    })
}


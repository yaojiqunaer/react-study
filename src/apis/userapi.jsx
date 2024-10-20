import { request } from '@/utils'

export function login(loginData) {
    return request({
        url: '/posts',
        method: 'POST',
        data: loginData
    })
}

export function getUser() {
    return request({
        url: '/users/1',
        method: 'GET',
    })
}
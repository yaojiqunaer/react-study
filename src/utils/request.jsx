import axios from "axios"
import { getToken, removeToken } from "@/utils/token"
import router from '@/router'
import { message } from "antd"

const baseURL = "https://jsonplaceholder.typicode.com"

const request = axios.create({
    baseURL: baseURL,
    timeout: 30_000,
})

request.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            removeToken()
            message.error('登录已过期，请重新登录')
            router.navigate('/login')
        }
        return Promise.reject(error)
    }
)

export default request
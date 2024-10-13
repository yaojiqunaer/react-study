import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com"

const request = axios.create({
    baseURL: baseURL,
    timeout: 30_000,
})

request.interceptors.request.use(
    (config) => {
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
        return Promise.reject(error)
    }
)

export default request
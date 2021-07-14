import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertData = payload => api.post(`/insert`, payload)
export const getAllData = () => api.get(`/getAllData`)
export const login = (payload) => api.post(`/login`, payload)


const apis = {
    insertData,
    getAllData,
    login
}

export default apis
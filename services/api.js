import axios from '@nuxtjs/axios'

const api = axios.create({
    baseUrl: 'http://localhost:8055/items/tasks'
})

export const getTasks = async () => api.get()
export const getTask = async (id) => api.get(`/${id}`)
export const newTask = async (data) => api.post('', data)
export const editTask = async (id, data) => api.patch(`/${id}`, data)
export const deleteTask = async (id) => api.delete(`/${id}`)
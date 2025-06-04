import axios from "axios"

export const BASE_URL = `http://localhost:3000/api/v1`

export const APP_API = {
    auth: `${BASE_URL}/auth`,
    movie: `${BASE_URL}/movie`
}

const configs = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}

export const BASE_CONFIG = {
    doPost: async (api, data) => {
        return await axios.post(api, data, configs)
    },
    doGet: async (api) => {
        return await axios.post(api, configs)
    },
    doPut: async (api, id, data) => {
        return await axios.put(`${api}/${id}`, data, configs)
    },
    doDelete: async (api, id) => {
        return await axios.delete(`${api}/${id}`, configs)
    }
}
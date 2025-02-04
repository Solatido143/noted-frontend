import axios from 'axios'

const API_URL = 'https://noted-backend-dev.onrender.com/api'

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/auth`, { username, password }, {
            responseType: 'text'
        })
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message
    }
}


export const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, { username, password })
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message
    }
}

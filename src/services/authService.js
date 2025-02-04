import axios from 'axios'

const API_URL = 'https://noted-backend-dev.onrender.com/api'

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, { email, password })
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message
    }
}

export const register = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, { name, email, password })
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message
    }
}

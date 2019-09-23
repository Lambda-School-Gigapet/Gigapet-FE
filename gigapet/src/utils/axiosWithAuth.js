import axios from 'axios'

export default function axiosWithAuth() {
    const token = localStorage.getItem('gigapet-auth-token')
    
    return axios.create({
        // TODO: change baseUrl to that of deployed backend
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    })
}
import axios from 'axios'

export default function axiosWithAuth() {
    const token = localStorage.getItem('gigapet-auth-token')
    
    return axios.create({
        baseURL: 'https://gigapets-be.herokuapp.com/api',
        headers: {
            Authorization: token,
        }
    })
}
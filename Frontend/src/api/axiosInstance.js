import axios from "axios";

const token = localStorage.getItem('token') || sessionStorage.getItem('token')

const axiosInstance = axios.create({
    baseURL: 'http://178.128.109.23:3001/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    
})

export default axiosInstance;

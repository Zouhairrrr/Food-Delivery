import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json'
    }
    ,
    timeout: 10000,
    withCredentials: true,
    responseType: 'json',
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },
    maxRedirects: 5,
    maxContentLength: 2000,
})
export default api;
import axios from 'axios'

const api = axios.create({
    baseURL: ''  //your IP
});

export default api;
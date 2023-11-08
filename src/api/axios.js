import axios from "axios";

const instance = axios.create({
    baseURL: 'https://taskscenter-backend-api-834d631505bc.herokuapp.com/api',
    withCredentials: true
})

export default instance;
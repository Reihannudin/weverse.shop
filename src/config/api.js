import axios from 'axios';
import {API_URL} from "./index";

const api = axios.create({
    baseUrl : API_URL,
    headers : {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }
});

export default api
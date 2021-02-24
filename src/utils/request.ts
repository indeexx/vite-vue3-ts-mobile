import axios from 'axios'
let baseURL = "";
const service = axios.create({
    baseURL,
    timeout: 30000
});
service.interceptors.request.use(config => {
    const token = window.localStorage.getItem("accessToken");
    if(token){
        config.headers.common.Authorization = token;
    }
    return config;
},
error => Promise.reject(error));
service.interceptors.response.use(response => {
    const res = response.data;
    if(response.status !== 200)return Promise.reject(new Error(res.message || "Error"));
    else return res;
},error => Promise.reject(error));

export default service;
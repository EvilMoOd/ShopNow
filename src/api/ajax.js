import axios from "axios";
//进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store";

//二次封装
const requests = axios.create({
    //基础路径自带/api
    baseURL: "/api",
    //请求超过5s则超时
    timeout: 5000,
});
//请求和响应拦截器
requests.interceptors.request.use((config) => {
    //uuid游客身份
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    // token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config;
});

requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('failed'))
});

export default requests;
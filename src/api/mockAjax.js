import axios from "axios";
//进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

//二次封装
const requests = axios.create({
    //基础路径自带/api
    baseURL: "/mock",
    //请求超过5s则超时
    timeout: 5000,
});
//请求和响应拦截器
requests.interceptors.request.use((config) => {
    nprogress.start();
    return config;
});

requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('faile'))
});

export default requests;
import requests from "./request";

    //axios发请求返回promise对象
export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'});

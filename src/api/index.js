import requests from "./ajax";
import mockRequests from './mockAjax'

//axios发请求返回promise对象
//侧边栏
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
//轮播图
export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqGetFloorList = () => mockRequests.get('/floor')

//发送给服务器的默认参数至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })
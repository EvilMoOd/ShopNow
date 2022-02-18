import requests from "./ajax";
import mockRequests from './mockAjax'

//axios发请求返回promise对象
//侧边栏
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
//轮播图
export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqGetFloorList = () => mockRequests.get('/floor')

//发送给服务器的默认参数至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });
//商品详情，这里的skuId是路由跳转时地址栏的skuId,在detail页中用dispatch传参
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
//注册验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
//注册
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', method: 'post', data })
//登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })
//带着token拿用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })
//退出登录
export const reqLoginOut = () => requests({ url: '/user/passport/logout', method: 'get' })
//产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId, buyNum) => requests({ url: `/cart/addToCart/${skuId}/${buyNum}`, method: "post" })
//获取购物车
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
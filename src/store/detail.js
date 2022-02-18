import { reqAddOrUpdateShopCart, reqGoodsInfo } from "../api"
import { getUUID } from '@/utils/uuid_token'

const state = {
    goodInfo: {},
    uuid_token: getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code === 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, buyNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, buyNum)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("添加购物车失败"))
        }
    }
}
const getters = {
    //导航信息
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    //产品信息
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    //售卖属性
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}
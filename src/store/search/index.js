import { reqGetSearchInfo } from "@/api";

const state = {
    searchList: {}
};
const actions = {
    //params发送请求至少是个空对象
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    }
};

const mutations = {
    GETSEARCHLIST(state, data) {
        state.searchList = data;
    }
};
//getter作用，把仓库中的数据简化分类
const getters = {
    //这里的形参是当前模块仓库的state，非总仓库
    goodsList(state){
        //如果断网则返回不到数据，则访问会报错
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
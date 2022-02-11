import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

const state = {
    //仓库数据格式取决于json里面的数据类型
    //侧边菜单数据
    categoryList: [],
    //轮播图数据
    bannerList: [],
    //floor数据
    floorList:[]
};
//接收请求回来的数据到result中，把result.data传到mutation
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    //获取首页轮播图
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
};
//接收result.data为data，然后放入state的categoryList中
const mutations = {
    CATEGORYLIST(state, data) {
        state.categoryList = data
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,data){
        state.floorList = data
    }
};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}
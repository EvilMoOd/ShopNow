import { reqCategoryList } from "@/api";

const state = {
    categoryList:[],
};
//接收请求回来的数据到result中，把result.data传到mutation
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    }
};
//接收result.data为data，然后放入state的categoryList中
const mutations = {
    CATEGORYLIST(state,data){
        state.categoryList = data
    }
};
const getters = {

};

export default{
    state,
    mutations,
    actions,
    getters
}
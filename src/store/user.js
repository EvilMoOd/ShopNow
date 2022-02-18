import { reqGetCode, reqUserLogin } from '@/api';
import { reqLoginOut, reqUserInfo, reqUserRegister } from '../api';
import { setToken } from '../utils/token';

const state = {
    code: "",
    //页面刷新时vux的state会刷新重置，所以之前dispatch的登录token会重置
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    LOGINOUT(state) {
        state.token = "";
        state.userInfo = {};
        localStorage.removeItem("TOKEN")
    }
}
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        //获取验证码的这个接口：把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            //这里将ok：true返回给注册页
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        console.log(result);
        if (result.code == 200) {
            //这里将ok：true返回给注册页
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    //登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            //vueX存储token
            commit("USERLOGIN", result.data.token);
            //存到localStorage
            setToken(result.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error("登录失败"));
        }
    },
    //退出登录
    async loginOut({ commit }) {
        let result = await reqLoginOut();
        if (result.code == 200) {
            commit("LOGINOUT")
            return "ok"
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //请求用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
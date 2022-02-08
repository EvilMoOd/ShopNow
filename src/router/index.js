//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//重写push方法
let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

export default new VueRouter({
    routes: [
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search",
            component:Search,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"*",
            redirect:"/home",
            meta:{show:true}
        }
    ]
})
//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes'

Vue.use(VueRouter);
//重写push方法
let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

export default new VueRouter({
    routes,
    scrollBehavior(ro, from, savePosition) {
        return { y: 0 }
    }
})
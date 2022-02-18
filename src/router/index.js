//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes'
import store from "@/store"

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

let router = new VueRouter({
    routes,
    scrollBehavior(ro, from, savePosition) {
        return { y: 0 }
    }
})

// router.beforeEach((to, from, next) => {
//     let token = store.state.user.token;
//     if (token) {
//         if (to.path == '/login') {
//             next('/home')
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })

export default router
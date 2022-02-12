import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)

import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)

import 'swiper/css/swiper.css'

import '@/mock/mockServe';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')

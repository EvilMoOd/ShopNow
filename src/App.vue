<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  //全局获取一次就不用反复获取加载
  mounted() {
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>

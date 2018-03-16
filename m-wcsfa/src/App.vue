<template>
  <div id="app">
    <In-Header></In-Header>

    <router-view></router-view>

    <In-Footer></In-Footer>
  </div>
</template>

<script>

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    "In-Header":Header,
    "In-Footer":Footer
  }

}
</script>

<style>

</style>

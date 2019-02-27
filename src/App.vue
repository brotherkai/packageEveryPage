<template>
  <div id="app">
    <router-view/>
 <router-link to="/">
    <h2>首页</h2>
 </router-link>
 <router-link to="/cs1">
    <h2>测试1</h2>
 </router-link>
 <router-link to="/cs2">
    <h2>测试2</h2>
 </router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

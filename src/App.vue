<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
//注意点：1.下面的代码必须在每个页面都中引入
import { Component, Vue } from "vue-property-decorator";
@Component
//注意点：2.每个页面都有组件名称：App/自定义
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

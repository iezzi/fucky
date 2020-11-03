<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <input v-model="title">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>HELLOWORLD:</h2>
    <HelloWorld msg="EVERETT CUMS AGIAN tk"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'yooo'
    }
  },
  components: {
    HelloWorld
  }
}
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

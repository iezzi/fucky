import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App), // ES6
  // render: function (h) {
  //   return h(App)
  // },
}).$mount('#app')

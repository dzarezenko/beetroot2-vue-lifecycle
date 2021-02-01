import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let comp = new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

setTimeout(() => {
  comp.$destroy();
}, 5000);

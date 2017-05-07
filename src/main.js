import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import App from './GameVue.vue'

new Vue({
  el: 'body',
  components: { App }
})

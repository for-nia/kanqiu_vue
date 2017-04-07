import Vue from 'vue'
//import VueSuperagent from 'vue-superagent'
import VueResource from 'vue-resource'
//Vue.use(VueSuperagent);
Vue.use(VueResource);
import App from './GameVue.vue'

new Vue({
  el: 'body',
  components: { App }
})

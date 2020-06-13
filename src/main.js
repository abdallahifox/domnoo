import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import ScrollReveal from 'vue-scroll-reveal'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial);
Vue.use(VueResource);

Vue.use(ScrollReveal);

Vue.http.options.root = 'https://domnoo-725d3.firebaseio.com/'
new Vue({
  el:'#app',
  render: h => h(App),
})

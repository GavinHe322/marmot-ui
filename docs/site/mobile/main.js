import Vue from 'vue';
/*eslint-disable*/
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from '../router.js';

console.log(routes, '??');

Vue.use(VueRouter)

const router = new VueRouter({

})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

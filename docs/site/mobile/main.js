import Vue from 'vue';
/*eslint-disable*/
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from '../router.js';
import '../../../src/packages/index.less';

import { importAll } from '../utils/index.js';


Vue.use(VueRouter)

const componentMap = {};
const context = require.context('../../../src/packages', true, /demo\/index.vue$/);

importAll(componentMap, context);

const router = new VueRouter({
  mode: 'hash',
  routes: routes({ mobile: true, componentMap }),
})

router.afterEach((to, form, next) => {
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

// 这里给 iframe-router 调用
window.vueRouter = router;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

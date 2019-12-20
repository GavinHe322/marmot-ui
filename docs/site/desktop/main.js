import Vue from 'vue';
/*eslint-disable*/
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from '../router.js';
import '../../../src/packages/index.less';

import { importAll, isMobile } from '../utils/index.js';

if (isMobile) {
  location.replace('mobile.html' + location.hash);
}

Vue.use(VueRouter)

const docs = {};
const docsFromMarkdown = require.context('../../markdown', false, /.md$/);
const docsFromPackages = require.context('../../../src/packages', true, /README\.md$/);

importAll(docs, docsFromMarkdown)
importAll(docs, docsFromPackages)

const router = new VueRouter({
  mode: 'hash',
  routes: routes({ componentMap: docs })
})

router.beforeEach((to, form, next) => {
  Vue.nextTick(() => window.syncPath())
  next()
})

// // 这里给 iframe-router 调用
window.vueRouter = router;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

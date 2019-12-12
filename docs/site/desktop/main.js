import Vue from 'vue';
/*eslint-disable*/
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from '../router.js';

import { importAll } from '../utils/index.js';

Vue.use(VueRouter)

const docs = {};
const docsFromMarkdown = require.context('../../markdown', false, /.md$/);

importAll(docs, docsFromMarkdown)

const router = new VueRouter({
  mode: 'hash',
  routes: routes({ componentMap: docs })
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

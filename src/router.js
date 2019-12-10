import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import BackTop from '@/packages/backTop/demo/index.vue';


const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/BackTop',
      component: BackTop,
    },
  ],
});

export default router

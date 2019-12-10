import Vue from 'vue';
import router from './router.js';
import App from './App.vue';

import './index.less';

console.log(router);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

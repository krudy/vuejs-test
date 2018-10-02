import Vue from 'vue';
import router from './router';

import App from './index.vue';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

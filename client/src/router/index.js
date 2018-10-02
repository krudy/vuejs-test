import Vue from 'vue';
import Router from 'vue-router';

import Search from '../pages/Search.vue';
import Result from '../pages/Result.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
  ],
});

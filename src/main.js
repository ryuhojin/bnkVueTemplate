// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import Directive from '@/utils/directive';
import 'tui-grid/dist/tui-grid.css';
import '@/assets/css/tui-pagination.css'
Vue.prototype.$directive = Directive;

import { ValidationProvider } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

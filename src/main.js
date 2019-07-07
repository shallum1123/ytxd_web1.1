// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios';
import vueMoment from 'moment';
Vue.use(vueMoment);
Vue.use(ElementUI);
Vue.config.productionTip = false

NProgress.configure({ showSpinner: false });

// router.beforeEach((to, from, next) => {
  // NProgress.start();
  // if (to.path == '/login') {
  //   // next({path:})
  //   // sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if ( to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
// })

router.afterEach(transition => {
NProgress.done();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

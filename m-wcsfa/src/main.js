// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//import VueRouter from 'vue-router'
import router from '@/router'
import VueResource from 'vue-resource'
import axios from 'axios'

//import VeeValidate from 'vee-validate'

import VeeValidate,{Validator} from 'vee-validate'
import zh_CN from '../node_modules/vee-validate/dist/locale/zh_CN.js'


import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale:'zh_CN'
});
Vue.use(VeeValidate,{
  errorBagName:'errors',
  fieldsBagName:'fields',
  delay:300,
  locale:'zh_CN',
  dictionary:{
    zh_CN
  },
  strict:true,
  classes:false,
  events:'blur',
  inject:true,
  validity:false,
  aria:true,
  i18n:null,
  i18nRootKey:'validation'


});

Vue.use(VueResource);
Vue.use(router);
Vue.use(VeeValidate,{Validator});
//引入Axios 不能用use
Vue.prototype.$axios=axios;
import './assets/css/style.css'


  Vue.config.productionTip = false;
//
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

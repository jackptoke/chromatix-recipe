import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import TextInput from '@/components/TextInput';
import MyButton from '@/components/MyButton';

Vue.component('TextInput', TextInput);
Vue.component('MyButton', MyButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

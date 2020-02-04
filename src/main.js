import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import TextInput from '@/components/TextInput';
import MyButton from '@/components/MyButton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight);
library.add(faSpinner);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('TextInput', TextInput);
Vue.component('MyButton', MyButton);

Vue.config.productionTip = false
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

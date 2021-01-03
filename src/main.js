import Vue from 'vue'
import App from './App.vue'

// import styles
import '../node_modules/hint.css/hint.css';
import './assets/fontawesome5/css/all.min.css';
import './assets/tailwind.css';
import './assets/main.scss';

// import advanced features
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

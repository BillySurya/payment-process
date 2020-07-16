import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/main.styl";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

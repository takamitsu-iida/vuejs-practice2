import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSSフレームワークBulmaを利用
// require("./bulma.scss");
// import "./bulma.scss";

Vue.config.productionTip = false;

new Vue({
  data: {
    showNav: false
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");

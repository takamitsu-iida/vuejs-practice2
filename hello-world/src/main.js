import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSSフレームワークBulmaを利用
// vue.config.jsでローダー指定しない場合は、ここで指定する
// require("./bulma.scss");
// import "./bulma.scss";

// font-awesomeの使いたいCSSをimportで取り込む
// import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  data: {
    showNav: false
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");

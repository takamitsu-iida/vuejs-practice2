import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSSフレームワークBulmaを利用
// vue.config.jsでローダー指定しない場合は、ここで指定する
// import "./bulma.scss";

// font-awesomeの使いたいCSSをimportで取り込む
// vue.config.jsでローダー指定しない場合は、ここで指定する
// import "@fortawesome/fontawesome-free/css/all.css";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

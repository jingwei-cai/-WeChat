import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

/**
 * @author 组件引入
 */
import Icon from "./components/icon.vue";
/**
 * @author 组件样式引入
 */
import "./assets/icon/iconfont.css";
/**
 * @author
 */
Vue.component("Icon", Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

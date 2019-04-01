import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

/**
 * @author 组件引入
 */
import icon from "@/views/icon/src/icon.vue";
/**
 * @author 组件样式引入
 */
import "./views/icon/iconfont.css";
/**
 * @author
 */
Vue.component("icon", icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

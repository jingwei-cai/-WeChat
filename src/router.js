import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "iocn",
      component: () => import("./views/icon.vue")
    },
    {
      path: "/addressBook",
      name: "iocn",
      component: () => import("./views/addressBook/index.vue")
    }
  ]
});

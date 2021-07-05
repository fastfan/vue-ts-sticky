import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "@/icons";
import "element-ui/lib/theme-chalk/index.css";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import store from "./store";

import SvgIcon from "@/components/SvgIcon/index.vue";
Vue.component("SvgIcon", SvgIcon);
Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

(window as any).eventBus = new Vue();
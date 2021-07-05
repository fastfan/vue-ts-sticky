import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const assessmentModel = () => import("@/views/assessment-model/src/index.vue");

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/assessmentModel",
    name: "AssessmentModel",
    component: assessmentModel,
  },
  {
    path: "*",
    redirect: "/home",
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

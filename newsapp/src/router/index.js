import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewsDetail from "../views/NewsDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/newsdetail/:id",
    name: "NewsDetail",
    component: NewsDetail,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

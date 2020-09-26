import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/helloWorld",
    name: "HelloWorld",
    component: HelloWorld,
    props: {
      msg: "hi there!"
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Login1 from "../views/Login1.vue";
import Home from "../views/Home.vue";
import Subscribe from "../views/Subscribe.vue";
import Info from "../views/Info.vue";
import Import from "../views/Import.vue";
import Tree from "../views/Tree.vue";
import Fun from "../views/Fun.vue";
import Menu1 from "../views/Menu1.vue";
import Navigation from "../views/Navigation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/login1",
    name: "Login1",
    component: Login1,
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: Navigation,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/subscribe",
        name: "Subscribe",
        // component: () =>
        //     import ('@/views/Subscribe')
        component: Subscribe,
      },

      {
        path: "/import",
        name: "Import",
        component: Import,
      },
      {
        path: "/info",
        name: "Info",
        component: Info,
      },
      {
        path: "/tree",
        name: "Tree",
        component: Tree,
      },
      {
        path: "/fun",
        name: "Fun",
        component: Fun,
      },
      {
        path: "/menu1",
        name: "Menu1",
        component: Menu1,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Import from '../views/Import.vue'
import Tree from '../views/Tree.vue'
import Fun from '../views/Fun.vue'
import Menu1 from '../views/Menu1.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/import',
    name: 'Import',
    component: Import,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/walking',
    name: '走马灯',
    component: () =>
        import ('@/views/Walking')
  },
  {
    path: '/tree',
    name: 'Tree',
    component: Tree,
  },
  {
    path: '/fun',
    name: 'Fun',
    component: Fun,
  },
  {
    path: '/menu1',
    name: 'Menu1',
    component: Menu1,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

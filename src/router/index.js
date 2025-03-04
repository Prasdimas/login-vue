import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../components/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import WorkOrder from '../views/WorkOrder.vue'
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'profile',
        name: 'DashboardProfile',
        component: HelloWorld
      },
      {
        path: '',
        name: 'WorkOrder',
        component: WorkOrder
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

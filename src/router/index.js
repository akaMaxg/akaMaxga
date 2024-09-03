import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CareerView from '@/views/CareerView.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

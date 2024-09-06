import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import AboutView from '../views/AboutView.vue'
import CareerView from '@/views/CareerView.vue';
import StartView from '@/views/StartView.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
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

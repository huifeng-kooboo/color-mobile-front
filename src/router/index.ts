import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ToningInterface from '@/views/ToningInterface.vue'
import PersonalCenter from '@/views/PersonalCenter.vue'
import FbxViewer from '@/views/FbxViewer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   //history:  createWebHistory('/'),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage
    }, {
      path: '/toningInterface',
      name: 'toningInteface',
      component: ToningInterface
    }, {
      path: '/personalCenter',
      name: 'personalCenter',
      component: PersonalCenter
    }, {
      path: '/fbxViewer',
      name: 'fbxViewer',
      component: FbxViewer
    }
  ]
})

export default router

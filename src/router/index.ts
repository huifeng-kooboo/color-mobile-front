import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/LoginPage.vue"
import PersonalCenter from "@/views/PersonalCenter.vue"
import FbxViewer from "@/views/FbxViewer.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   //history:  createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },{
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

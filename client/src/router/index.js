// Файл с локальными маршрутами, так как приложение не большое
// выносить их в отдельный файл не стал

import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import registration from '@/components/registration'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Страница регистрации пользователя
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },

    // Страница входа пользователя

    {
      path: '/login',
      name: 'login',
      component: login
    },

    // Страница получения данных пользователя

    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})

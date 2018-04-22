import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import User from '@/components/User'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

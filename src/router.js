import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const LazyLoadComponent = componentName => () => import(`./views/${componentName}`)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Info',
      // component: LazyLoadComponent('info.vue')
      component: () => import('./views/info.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('./views/skills.vue')
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: () => import('./views/profiles.vue')
    },
    {
      path: '/career',
      name: 'Career',
      component: () => import('./views/career.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/contact.vue')
    }
  ]
})

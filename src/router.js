import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Music from './views/Music.vue'
import Images from './views/Images.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    }
  ]
})

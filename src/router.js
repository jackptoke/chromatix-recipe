import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/index.vue'
import NProgress from 'nprogress'
// import store from '@/store/store'
import NotFound from './pages/NotFound.vue'
import NetworkIssue from './pages/NetworkIssue.vue';
import Recipe from './pages/Recipe';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/recipe/:title',
        name: 'recipe',
        component: Recipe
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

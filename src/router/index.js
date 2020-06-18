import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      component: () => import('../views/home/Home'),
    },
    {
      path: '/home', 
      component: () => import('../views/home/Home'),
      meta: {navShow: true}
    },
    {
      path: '/info',
      component: () => import('../views/info/Info'),
      meta: {navShow: true}
    },
    {
      path: '/mine',
      component: () => import('../views/mine/Mine'),
      meta: {navShow: true}
    },
    {
      path: '/info/details',
      component: () => import('../views/info/InfoDetails')
    },
    {
      path: '/info/read',
      component: () => import('../views/info/ReadMine')
    },
    {
      path: '/info/advert',
      component: () => import('../views/info/Advert')
    },
    {
      path: '/info/evolve',
      component: () => import('../views/info/Evolve')
    },
    {
      path: '/company',
      component: () => import('../views/companyInfo/CompanyInfo')
    },
    {
      path: '/recruit',
      component: () => import('../views/companyInfo/Recruiting')
    },
    {
      path: '/details',
      component: () => import('../views/jobDetails/JobDetails')
    }
  ]
})

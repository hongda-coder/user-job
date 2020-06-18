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
      path: '/home',  // 首页
      component: () => import('../views/home/Home'),
      meta: {navShow: true}
    },
    {
      path: '/info', // 信息
      component: () => import('../views/info/Info'),
      meta: {navShow: true}
    },
    {
      path: '/mine', // 我的
      component: () => import('../views/mine/Mine'),
      meta: {navShow: true}
    },
    {
      path: '/info/details', // 信息详情
      component: () => import('../views/info/InfoDetails')
    },
    {
      path: '/info/read',   // 谁查看了本宝宝
      component: () => import('../views/info/ReadMine')
    },
    {
      path: '/info/advert', // 招聘会
      component: () => import('../views/info/Advert')
    },
    {
      path: '/info/evolve', // 面试进展
      component: () => import('../views/info/Evolve')
    },
    {
      path: '/company', // 公司信息
      component: () => import('../views/companyInfo/CompanyInfo')
    },
    {
      path: '/recruit', // 在招职位
      component: () => import('../views/companyInfo/Recruiting')
    },
    {
      path: '/details', // 职位详情
      component: () => import('../views/jobDetails/JobDetails')
    },
    {
      path: '/resume/browser',  // 预览简历
      component: () => import('../views/mine/BrowserResume')
    },
    {
      path: '/resume',  // 我的简历
      component: () => import('../views/resume/Resume')
    },
    {
      path: '/collect',  // 收藏职位
      component: () => import('../views/mine/Collect')
    },
    {
      path: '/resume/hidden',  // 隐藏设置
      component: () => import('../views/resume/HiddenSet')
    }
  ]
})

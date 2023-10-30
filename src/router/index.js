import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'chat',
      component: defineAsyncComponent(() => import(`../views/movemap.vue`)),
      meta: {
        title: '易聊',
      },
    },
    {
      path: '/*',
      redirect: '/',
    },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

router.afterEach((to, from)=>{
  // console.log(to, from)
  console.log('afterEach')
})

export default router
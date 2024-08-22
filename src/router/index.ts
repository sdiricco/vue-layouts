import { createWebHashHistory, createRouter } from 'vue-router'
const HomeView = () => import('../views/Home.vue')
const Layout1View = () => import('../views/Layout1.vue')
const Layout2View = () => import('../views/Layout2.vue')
const Layout3View = () => import('../views/Layout3.vue')
const Layout4View = () => import('../views/Layout4.vue')
const Layout5View = () => import('../views/Layout5.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/layout1', name: 'layout1', component: Layout1View },
    { path: '/layout2', name: 'layout2', component: Layout2View },
    { path: '/layout3', name: 'layout3', component: Layout3View },
    { path: '/layout4', name: 'layout4', component: Layout4View },
    { path: '/layout5', name: 'layout5', component: Layout5View },
  ],
})

export default router
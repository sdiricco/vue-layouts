import { createWebHashHistory, createRouter } from 'vue-router'
const HomeView = () => import('../views/Home.vue')
const Layout1View = () => import('../views/Layout1.vue')
const Layout2View = () => import('../views/Layout2.vue')
const Layout3View = () => import('../views/Layout3.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/layout1', name: 'layout1', component: Layout1View },
    { path: '/layout2', name: 'layout2', component: Layout2View },
    { path: '/layout3', name: 'layout3', component: Layout3View },
  ],
})

export default router
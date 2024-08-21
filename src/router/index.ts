import { createWebHistory, createRouter } from 'vue-router'
const HomeView = () => import('../views/Home.vue')
const Layout1View = () => import('../views/Layout1.vue')
const Layout2View = () => import('../views/Layout2.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/layout1', name: 'layout1', component: Layout1View },
    { path: '/layout2', name: 'layout2', component: Layout2View },
  ],
})

export default router
import { createMemoryHistory, createRouter } from 'vue-router'
const Layout1View = () => import('../views/Layout1.vue')
const HomeView = () => import('../views/Home.vue')

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/layout1', component: Layout1View },
  ],
})

export default router
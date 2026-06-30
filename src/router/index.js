import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorksView from '@/views/WorksView.vue'
import WorkDetailView from '@/views/WorkDetailView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              component: HomeView },
    { path: '/works',         component: WorksView },
    { path: '/works/:id',     component: WorkDetailView },
    { path: '/contact',       component: ContactView },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router
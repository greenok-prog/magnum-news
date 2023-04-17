import NewsVue from '@/views/News.vue'
import NewsFull from '@/views/NewsFull.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: NewsVue, name: 'News' },
    { path: '/:id', component: NewsFull, name: 'NewsFull' }
  ],
  scrollBehavior() {
    window.scrollTo(150, 0);
  }
})

export default router

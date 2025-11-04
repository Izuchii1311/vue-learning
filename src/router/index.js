import DocsLayout from '@/components/layouts/DocsLayout.vue'
import AboutView from '@/view/public/AboutView.vue'
import HomeView from '@/view/public/HomeView.vue'
import MainDocsView from '@/view/public/MainDocsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DocsLayout,
      redirect: { name: 'MainDocs' },
      children: [
        {
          path: 'main-docs',
          name: 'MainDocs',
          component: MainDocsView,
          meta: { layout: 'MainDocs', },
        },
        {
          path: 'home',
          name: 'Home',
          component: HomeView,
          meta: { layout: 'Home', },
        },
        {
          path: 'about',
          name: 'About',
          component: AboutView,
          meta: { layout: 'About', },
        },
      ],
    },
  ],
})

export default router

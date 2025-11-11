import DocsLayout from '@/layouts/DocsLayout.vue'
// import DynamicDocsLayout from '@/layouts/DynamicDocsLayout.vue'
import AboutView from '@/view/public/AboutView.vue'
import InstallationView from '@/view/public/docs/getting-started/InstallationView.vue'
import PluginsView from '@/view/public/docs/getting-started/PluginsView.vue'
import SetupView from '@/view/public/docs/getting-started/SetupView.vue'
import HomeView from '@/view/public/HomeView.vue'
import MainDocsView from '@/view/public/MainDocsView.vue'
import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   component: DocsLayout,
    //   redirect: { name: 'MainDocs' },
    //   children: [
    //     {
    //       path: 'main-docs',
    //       name: 'MainDocs',
    //       component: MainDocsView,
    //       meta: {
    //         layout: 'MainDocs',
    //         showSidebar: true,
    //       },
    //       children: [
    //         {
    //           path: 'setup',
    //           name: 'Setup',
    //           component: SetupView,
    //           meta: {
    //             layout: 'MainDocs',
    //             showSidebar: true,
    //           },
    //         },
    //         {
    //           path: 'plugins',
    //           name: 'Plugins',
    //           component: PluginsView,
    //           meta: {
    //             layout: 'MainDocs',
    //             showSidebar: true,
    //           },
    //         },
    //         {
    //           path: 'installation',
    //           name: 'Installation',
    //           component: InstallationView,
    //           meta: {
    //             layout: 'MainDocs',
    //             showSidebar: true,
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       path: 'home',
    //       name: 'Home',
    //       component: HomeView,
    //       meta: {
    //         layout: 'Home',
    //         showSidebar: false,
    //       },
    //     },
    //     {
    //       path: 'about',
    //       name: 'About',
    //       component: AboutView,
    //       meta: {
    //         layout: 'About',
    //         showSidebar: false,
    //       },
    //     },
    //   ],
    // },

    /**
     * Dokumentasi Style Code Untuk Routing
     */
    {
      path: '/',
      redirect: '/documentation',
    },
    {
      path: '/documentation',
      component: () => import('@/layouts/DocsLayout.vue'),
      meta: {
        middleware: 'guest',
      },
      children: [
        {
          path: '',
          name: 'setup-documentation',
          component: () => import('@/view/documentation/VueInstallation.vue'),
          meta: {
            // Optional
            pageTitle: 'Vue Installation',
            breadcrumb: ['Documentation', 'Vue Installation'],

            // Sebisa mungkin jangan menambahkan kondisi layouting di route, karena menyulitkan dinamis perubahan layout yang diinginkan
            // layout: 'MainDocs',
            // showSidebar: true,
          },
        },
        {
          path: 'vue-installation',
          name: 'VueInstallation',
          component: () => import('@/view/documentation/VueInstallation.vue'),
          meta: {
            // Optional
            pageTitle: 'Vue Installation',
            breadcrumb: ['Documentation', 'Vue Installation'],

            // Sebisa mungkin jangan menambahkan kondisi layouting di route, karena menyulitkan dinamis perubahan layout yang diinginkan
            // layout: 'MainDocs',
            // showSidebar: true,
          },
        },
      ],
    },
    // Default fallback route
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

export default router

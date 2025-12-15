import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/documentation',
    },

     // ==================== DOCS LAYOUT ====================
    {
      path: '/documentation',
      component: () => import('@/layouts/DocsLayout.vue'),
      meta: {
        requiresLayout: 'DocsLayout',
      },
      children: [
        {
          path: '',
          name: 'DocsOverview',
          component: () => import('@/view/public/MainDocsView.vue'),
          meta: {
            breadcrumb: ['Documentation'],
            showSidebar: true,
            showToc: false,
          },
        },
        {
          path: 'vue-introduction',
          name: 'VueIntroduction',
          component: () => import('@/view/public/docs/getting-started/IntroductionView.vue'),
          meta: {
            breadcrumb: ['Documentation', 'Getting Started', 'Vue Introduction'],
            showSidebar: true,
            showToc: true,
          },
        },
        {
          path: 'vue-installation',
          name: 'VueInstallation',
          component: () => import('@/view/public/docs/getting-started/InstallationView.vue'),
          meta: {
            breadcrumb: ['Documentation', 'Getting Started', 'Vue Installation'],
            showSidebar: true,
            showToc: true,
          },
        },
        {
          path: 'vue-setup',
          name: 'VueSetup',
          component: () => import('@/view/public/docs/getting-started/SetupView.vue'),
          meta: {
            breadcrumb: ['Documentation', 'Getting Started', 'Vue Setup'],
            showSidebar: true,
            showToc: true,
          },
        },
        {
          path: 'vue-plugins',
          name: 'VuePlugins',
          component: () => import('@/view/public/docs/getting-started/PluginsView.vue'),
          meta: {
            breadcrumb: ['Documentation', 'Getting Started', 'Vue Plugins'],
            showSidebar: true,
            showToc: true,
          },
        },
      ],
    },

    // ==================== DEFAULT LAYOUT ====================
    {
      path: '/home',
      component: () => import('@/layouts/DefaultLayout.vue'),
      meta: {
        requiresLayout: 'DefaultLayout',
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/view/public/HomeView.vue'),

        }
      ]
    },
    {
      path: '/about',
      component: () => import('@/layouts/DefaultLayout.vue'),
      meta: {
        requiresLayout: 'DefaultLayout',
      },
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('@/view/public/AboutView.vue'),

        }
      ]
    },

    // Default fallback route
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

export default router

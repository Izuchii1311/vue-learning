import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /**
     * Dokumentasi Style Code Untuk Routing
     */
    // Sebisa mungkin jangan menambahkan kondisi layouting di route, karena menyulitkan dinamis perubahan layout yang diinginkan
    // layout: 'MainDocs',
    // showSidebar: true,
    {
      path: '/',
      redirect: '/documentation',
    },

     // ==================== DOCS LAYOUT ====================
    {
      path: '/documentation',
      component: () => import('@/layouts/DocsLayout.vue'),
      meta: {
        // middleware: 'DocsLayout',
        requiresLayout: 'DocsLayout',
        // menurut urang tetep harus ada layout lut, karena disini dianggap sebagai halaman yang punya layout husus soalnya kalo di halaman lain layout nya beda
        // nahh buat ngebedain antara halaman si dokementasi ama halaman yang lain pake si layout ini
        // nahh buat pendapat maneh tentang "karena menyulitkan dinamis perubahan layout yang diinginkan" malah engga lut
        // jadinya kita tuh malah gausah bikin layout buat halaman-halaman lain, jadi cukup satu layout buat ngatur banyak halaman sekaligus
      },
      children: [
        {
          path: '',
          name: 'DocsOverview',
          component: () => import('@/view/public/MainDocsView.vue'),
          meta: {
            pageTitle: 'Documentation Overview',
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
            pageTitle: 'Vue Introduction',
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
            pageTitle: 'Vue Installation Guide',
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
            pageTitle: 'Vue Project Setup',
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
            pageTitle: 'Vue Project Setup Plugins',
            breadcrumb: ['Documentation', 'Getting Started', 'Vue Plugins'],
            showSidebar: true,
            showToc: true,
          },
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/public/HomeView.vue'),
      meta: {
        requiresLayout: 'DefaultLayout',
        showSidebar: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/view/public/AboutView.vue'),
      meta: {
        requiresLayout: 'DefaultLayout',
        showSidebar: false,
      },
    },

    // ==================== DEFAULT LAYOUT ====================
    {
      path: '/home',
      component: () => import('@/layouts/DefaultLayout.vue'),
      meta: {
        requiresLayout: 'DefaultLayout',
        showSidebar: false,
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/view/public/HomeView.vue'),
          meta: {
            pageTitle: 'Home',
            breadcrumb: ['Home'],
          }
        }
      ]
    },
    {
      path: '/about',
      component: () => import('@/layouts/DefaultLayout.vue'),
      meta: {
        requiresLayout: 'DefaultLayout',
        showSidebar: false,
      },
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('@/view/public/AboutView.vue'),
          meta: {
            pageTitle: 'About Us',
            breadcrumb: ['About'],
          }
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

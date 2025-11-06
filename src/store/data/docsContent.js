// ============================================
// FILE: data/docs-content.js
// ============================================

/**
 * CLEAN, STRUCTURED CONTENT DATA
 * No HTML strings, no inline styles
 * Pure data that maps to reusable components
 */

export const docsContent = {
  "getting-started": {
    installation: {
      title: "Installation Guide",
      description: "Learn how to install and set up the project from scratch",
      tags: ["setup", "installation", "getting-started"],

      // Content as structured blocks - NO HTML!
      blocks: [
        {
          type: "heading",
          content: "Prerequisites",
          props: { level: "h2" }
        },
        {
          type: "paragraph",
          content: "Before you begin, ensure you have the following installed on your system:"
        },
        {
          type: "list",
          props: {
            items: [
              "Node.js (v18 or higher)",
              "npm or yarn package manager",
              "Git version control"
            ]
          }
        },
        {
          type: "alert",
          props: {
            type: "info",
            title: "Pro Tip",
            content: "We recommend using nvm (Node Version Manager) to manage multiple Node.js versions on your system."
          }
        },
        {
          type: "heading",
          content: "Installation Steps",
          props: { level: "h2" }
        },
        {
          type: "list",
          props: {
            ordered: true,
            items: [
              "Clone the repository",
              "Navigate to project directory",
              "Install dependencies",
              "Start development server"
            ]
          }
        },
        {
          type: "codeBlock",
          content: `
git clone https://github.com/your-repo/project.git
cd project
npm install
npm run dev`,
          props: {
            language: "bash",
            title: "Terminal"
          }
        },
        {
          type: "heading",
          content: "Verification",
          props: { level: "h2" }
        },
        {
          type: "paragraph",
          content: "Once the server starts, open your browser and navigate to http://localhost:5173 to verify the installation was successful."
        },
        {
          type: "callout",
          props: {
            title: "Next Steps",
            content: "After successful installation, check out the Plugins section to learn about extending functionality."
          }
        }
      ]
    },

    plugins: {
      title: "Plugins",
      description: "Available plugins and how to integrate them into your project",
      tags: ["plugins", "extensions", "configuration"],

      blocks: [
        {
          type: "heading",
          content: "Overview",
          props: { level: "h2" }
        },
        {
          type: "paragraph",
          content: "Our framework supports various plugins to extend functionality. Here are the most commonly used plugins:"
        },
        {
          type: "heading",
          content: "Router Plugin",
          props: { level: "h3" }
        },
        {
          type: "paragraph",
          content: "Handles application routing and navigation between pages."
        },
        {
          type: "codeBlock",
          content: `
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // your routes
  ]
})`,
          props: {
            language: "javascript",
            title: "router/index.js"
          }
        },
        {
          type: "heading",
          content: "State Management",
          props: { level: "h3" }
        },
        {
          type: "paragraph",
          content: "Centralized state management for your application data."
        },
        {
          type: "tabs",
          props: {
            tabs: [
              {
                label: "Pinia",
                content: [
                  {
                    type: "codeBlock",
                    content: `import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: ''
  }),
  actions: {
    setUser(data) {
      this.name = data.name
      this.email = data.email
    }
  }
})`,
                    props: {
                      language: "javascript",
                      title: "stores/user.js"
                    }
                  }
                ]
              },
              {
                label: "Vuex",
                content: [
                  {
                    type: "codeBlock",
                    content: `import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  }
})`,
                    props: {
                      language: "javascript",
                      title: "store/index.js"
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          type: "alert",
          props: {
            type: "success",
            title: "Recommendation",
            content: "We recommend using Pinia for new projects as it's the official state management library for Vue 3."
          }
        }
      ]
    },

    migrations: {
      title: "Database Migrations",
      description: "Managing database schema changes and migrations",
      tags: ["database", "migrations", "schema"],

      blocks: [
        {
          type: "heading",
          content: "What are Migrations?",
          props: { level: "h2" }
        },
        {
          type: "paragraph",
          content: "Migrations are version control for your database schema. They allow you to track and manage changes to your database structure over time."
        },
        {
          type: "alert",
          props: {
            type: "warning",
            title: "Important",
            content: "Always backup your database before running migrations in production!"
          }
        },
        {
          type: "heading",
          content: "Creating a Migration",
          props: { level: "h2" }
        },
        {
          type: "codeBlock",
          content: "npm run migrate:create create_users_table",
          props: {
            language: "bash",
            title: "Terminal"
          }
        },
        {
          type: "paragraph",
          content: "This will create a new migration file in your migrations directory."
        }
      ]
    }
  },

  dashboard: {
    header: {
      title: "Header Component",
      description: "Customize and configure your dashboard header",
      tags: ["components", "ui", "header"],

      blocks: [
        {
          type: "heading",
          content: "Header Configuration",
          props: { level: "h2" }
        },
        {
          type: "paragraph",
          content: "The header component provides navigation and branding for your dashboard."
        },
        {
          type: "heading",
          content: "Features",
          props: { level: "h3" }
        },
        {
          type: "list",
          props: {
            items: [
              "Responsive design that adapts to all screen sizes",
              "Customizable logo placement and sizing",
              "Flexible navigation menu structure",
              "User profile dropdown with custom actions"
            ]
          }
        },
        {
          type: "codeBlock",
          content: `<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <Logo />
        <Navigation />
        <UserDropdown />
      </div>
    </div>
  </header>
</template>`,
          props: {
            language: "vue",
            title: "HeaderComponent.vue"
          }
        }
      ]
    },

    sidebar: {
      title: "Sidebar Navigation",
      description: "Configure and customize your sidebar navigation menu",
      tags: ["components", "navigation", "sidebar"],

      blocks: [
        {
          type: "heading",
          content: "Sidebar Setup",
          props: { level: "h2" }
        },
        {
          type: "paragraph",
          content: "The sidebar provides the main navigation structure for your dashboard application."
        },
        {
          type: "callout",
          props: {
            title: "Responsive Behavior",
            content: "The sidebar automatically collapses on mobile devices and can be toggled with a hamburger menu."
          }
        }
      ]
    }
  }
}

// ============================================
// HELPER: Get content by category and page
// ============================================

export function getDocContent(category, page) {
  return docsContent[category]?.[page] || null
}

// ============================================
// HELPER: Get all pages in a category
// ============================================

export function getCategoryPages(category) {
  return Object.keys(docsContent[category] || {})
}

// ============================================
// HELPER: Search content
// ============================================

export function searchDocs(query) {
  const results = []
  const lowerQuery = query.toLowerCase()

  Object.entries(docsContent).forEach(([category, pages]) => {
    Object.entries(pages).forEach(([pageSlug, pageData]) => {
      // Search in title and description
      if (
        pageData.title.toLowerCase().includes(lowerQuery) ||
        pageData.description.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          category,
          page: pageSlug,
          title: pageData.title,
          description: pageData.description
        })
      }
    })
  })

  return results
}

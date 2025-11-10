// src/stores/sidebarStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  // State
  const isCollapsed = ref(false)

  // Actions
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
  }

  const collapseSidebar = () => {
    isCollapsed.value = true
  }

  const expandSidebar = () => {
    isCollapsed.value = false
  }

  return {
    // State
    isCollapsed,

    // Actions
    toggleSidebar,
    collapseSidebar,
    expandSidebar
  }
})

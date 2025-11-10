import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  // State
  const isCollapsed = ref(false);
  const isMobileOpen = ref(false);

  // Getters
  const sidebarState = computed(() => isCollapsed.value ? 'collapsed' : 'expanded');
  const isSidebarVisible = computed(() => !isCollapsed.value);

  // Actions
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  const expandSidebar = () => {
    isCollapsed.value = false;
  };

  const collapseSidebar = () => {
    isCollapsed.value = true;
  };

  const toggleMobileSidebar = () => {
    isMobileOpen.value = !isMobileOpen.value;

    if (isMobileOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileSidebar = () => {
    isMobileOpen.value = false;
    document.body.style.overflow = '';
  };

  return {
    // State
    isCollapsed,
    isMobileOpen,

    // Getters
    sidebarState,
    isSidebarVisible,

    // Actions
    toggleSidebar,
    expandSidebar,
    collapseSidebar,
    toggleMobileSidebar,
    closeMobileSidebar
  };
});

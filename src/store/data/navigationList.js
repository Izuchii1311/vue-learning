import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
  // State
  const navItems = ref([
    {
      title: "Documentation",
      pathName: "DocsOverview",
      children: [
        {
          title: "Vue Introduction",
          pathName: "VueIntroduction"
        },
        {
          title: "Vue Installation",
          pathName: "VueInstallation"
        },
        {
          title: "Vue Setup",
          pathName: "VueSetup"
        },
        {
          title: "Vue Plugins",
          pathName: "VuePlugins"
        },
      ]
    },
    {
      title: "Home",
      pathName: "home"
    },
    {
      title: "About",
      pathName: "about"
    },
  ]);

  // getters
  const mainNavItems = computed(() =>
    navItems.value.map(item => ({
      title: item.title,
      pathName: item.pathName
    }))
  );

  const navItemsWithChildren = computed(() =>
    navItems.value.filter(item => item.children && item.children.length > 0)
  );

  const getChildrenByParent = (parentName) => {
    const parent = navItems.value.find(item => item.pathName === parentName);
    return parent?.children || [];
  };

  const sidebarNavigation = computed(() => {
    const docsItem = navItems.value.find(item => item.pathName === 'DocsOverview');
    return docsItem?.children || [];
  });

  // actions
  const addNavItem = (item) => {
    navItems.value.push(item);
  };

  const updateNavItem = (index, updatedItem) => {
    navItems.value[index] = { ...navItems.value[index], ...updatedItem };
  };

  const removeNavItem = (index) => {
    navItems.value.splice(index, 1);
  };

  return {
    // State
    navItems,

    // Getters
    mainNavItems,
    navItemsWithChildren,
    getChildrenByParent,
    sidebarNavigation,

    // Actions
    addNavItem,
    updateNavItem,
    removeNavItem
  };
})

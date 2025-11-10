import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useNavbarStore = defineStore("navbar", () => {
  // State
  const isMobileMenuOpen = ref(false);
  const openDropDowns = ref(new Set());

  // getters
  const isAnyDropdownOpen = computed(() => openDropDowns.value.size > 0);

  // actions
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;

    if (isMobileMenuOpen.value) {
      document.body.style.overflow = "hidden";
      // Reset dropdowns ketika mobile menu dibuka
      openDropDowns.value.clear();
    } else {
      document.body.style.overflow = "";
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (openDropDowns.value.has(dropdownName)) {
      openDropDowns.value.delete(dropdownName);
    } else {
      openDropDowns.value.add(dropdownName);
    }
  };

  const isDropdownOpen = (dropdownName) => {
    return openDropDowns.value.has(dropdownName);
  };

  const closeAllDropdowns = () => {
    openDropDowns.value.clear();
  };

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = "";
  };

  return {
    // State
    isMobileMenuOpen,
    openDropDowns,

    // Getters
    isAnyDropdownOpen,

    // Actions
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    isDropdownOpen,
    closeAllDropdowns
  }

})

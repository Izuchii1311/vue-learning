<template>
  <nav
    class="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 border-b border-gray-300 bg-white shadow-sm"
  >
    <!-- Bagian kiri dengan hamburger dan logo -->
    <div class="flex items-center gap-2 sm:gap-2.5">
      <!-- Mobile Menu Button -->
      <button
        v-if="showSidebarToggle"
        aria-label="Mobile menu"
        @click="navbarStore.toggleMobileMenu()"
        class="flex lg:hidden items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <svg
          width="20"
          height="14"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="transition-transform"
          :class="{ 'rotate-90': navbarStore.isMobileMenuOpen }"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      <!-- Desktop Sidebar Toggle Button -->
      <button
        v-if="showSidebarToggle"
        @click="sidebarStore.toggleSidebar()"
        class="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg
          width="40"
          height="22"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="transition-transform duration-300"
          :class="{ 'rotate-180': sidebarStore.isCollapsed }"
        >
          <path
            d="M2 4H14M2 8H14M2 12H14"
            stroke="#426287"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <!-- Logo -->
      <router-link to="/" class="shrink-0">
        <img
          class="h-7 sm:h-8 md:h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="Logo"
        />
      </router-link>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="navbarStore.isMobileMenuOpen"
        @click="navbarStore.closeMobileMenu()"
        class="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
      ></div>
    </transition>

    <!-- Mobile Menu Sidebar -->
    <transition name="slide">
      <div
        v-if="navbarStore.isMobileMenuOpen"
        class="fixed top-0 left-0 h-full w-64 bg-white shadow-xl lg:hidden z-50 flex flex-col"
      >
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            class="h-8"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="Logo"
          />
          <button
            @click="navbarStore.closeMobileMenu()"
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Content -->
        <div class="flex-1 overflow-y-auto p-4">
          <div class="space-y-1">
            <div
              v-for="(item, index) in navigationStore.navItems"
              :key="index"
              class="border-b border-gray-100 last:border-b-0"
            >
              <!-- Item tanpa children -->
              <router-link
                v-if="!item.children"
                :to="{ name: item.pathName }"
                @click="navbarStore.closeMobileMenu()"
                class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-gray-100"
                active-class="bg-indigo-50 text-indigo-600"
              >
                {{ item.title }}
              </router-link>

              <!-- Item dengan children (dropdown) -->
              <div v-else>
                <button
                  @click="navbarStore.toggleDropdown(item.pathName)"
                  class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-gray-100"
                  :class="{
                    'bg-indigo-50 text-indigo-600': navbarStore.isDropdownOpen(
                      item.pathName
                    ),
                    'text-gray-700': !navbarStore.isDropdownOpen(item.pathName),
                  }"
                >
                  <span>{{ item.title }}</span>
                  <svg
                    class="w-4 h-4 transition-transform duration-200"
                    :class="{ 'rotate-180': navbarStore.isDropdownOpen(item.pathName) }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <!-- Dropdown Content -->
                <transition name="dropdown">
                  <div
                    v-if="navbarStore.isDropdownOpen(item.pathName)"
                    class="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-3"
                  >
                    <router-link
                      v-for="(child, childIndex) in item.children"
                      :key="childIndex"
                      :to="{ name: child.pathName }"
                      @click="navbarStore.closeMobileMenu()"
                      class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                      active-class="bg-indigo-50 text-indigo-600"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3"></span>
                      {{ child.title }}
                    </router-link>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Footer -->
        <div class="p-4 border-t border-gray-200 space-y-2">
          <button
            class="w-full px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-lg text-sm font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </transition>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-4 lg:gap-6">
      <!-- Desktop Nav Links -->
      <div class="flex items-center gap-6">
        <router-link
          v-for="(item, index) in navigationStore.mainNavItems"
          :key="index"
          :to="{ name: item.pathName }"
          class="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          active-class="text-indigo-600"
        >
          {{ item.title }}
        </router-link>
      </div>

      <!-- Search Bar -->
      <div
        class="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full hover:border-gray-400 transition-colors"
      >
        <input
          class="py-1.5 w-32 xl:w-48 bg-transparent outline-none focus:outline-none focus:ring-0 border-none placeholder-gray-500 text-sm"
          type="text"
          placeholder="Search..."
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.836 10.615 15 14.695"
            stroke="#7A7B7D"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            clip-rule="evenodd"
            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
            stroke="#7A7B7D"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- Cart Icon -->
      <button class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <svg
          width="18"
          height="18"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
            stroke="#615fff"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          class="absolute -top-1 -right-1 text-xs text-white bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center font-medium"
        >
          3
        </span>
      </button>

      <!-- Login Button -->
      <button
        class="px-5 lg:px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm font-medium whitespace-nowrap"
      >
        Login
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useNavbarStore } from "@/store/event/navbarStore";
import { useSidebarStore } from "@/store/event/sidebarToggle";
import { useNavigationStore } from "@/store/data/navigationList";

// Store
const navbarStore = useNavbarStore();
const navigationStore = useNavigationStore();
const sidebarStore = useSidebarStore();

const route = useRoute();

const showSidebarToggle = computed(() => {
  return route.meta.showSidebar === true;
});
</script>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* Dropdown transition for mobile */
.dropdown-enter-active {
  transition: all 0.3s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

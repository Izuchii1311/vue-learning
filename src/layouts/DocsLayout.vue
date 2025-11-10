<template>
  <main class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navbar -->
    <NavbarComponent :show-sidebar-toggle="showSidebar" />

    <!-- Main Content Wrapper -->
    <div class="flex-1 flex overflow-hidden">
      <div
        class="flex-1 flex overflow-hidden w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24"
      >
        <!-- LEFT: Sidebar (Desktop only) -->
        <aside
          v-if="showSidebar"
          class="hidden lg:block shrink-0 transition-all duration-300 ease-in-out overflow-hidden"
          :class="sidebarStore.isCollapsed ? 'w-16 xl:w-20' : 'w-56 xl:w-60 2xl:w-64'"
        >
          <div class="h-full">
            <SideBarComponent />
          </div>
        </aside>

        <!-- LEFT Spacer (hanya muncul kalau sidebar tidak collapsed) -->
        <div
          v-if="showSidebar && !sidebarStore.isCollapsed"
          class="hidden lg:block shrink-0 w-4 xl:w-6"
        ></div>

        <!-- CENTER: Main Content Area -->
        <section
          class="flex-1 overflow-y-auto py-6 lg:py-8 min-w-0 transition-all duration-300"
        >
          <div class="mx-auto transition-all duration-300" :class="contentMaxWidth">
            <RouterView v-slot="{ Component }">
              <transition name="page" mode="out-in">
                <component :is="Component" />
              </transition>
            </RouterView>
          </div>
        </section>

        <!-- RIGHT Spacer (hanya muncul kalau sidebar tidak collapsed) -->
        <div
          v-if="showSidebar && showToc && !sidebarStore.isCollapsed"
          class="hidden xl:block shrink-0 w-4 xl:w-6"
        ></div>

        <!-- RIGHT: TOC (Desktop XL only) -->
        <aside
          v-if="showSidebar && showToc"
          class="hidden xl:block shrink-0 transition-all duration-300 ease-in-out overflow-hidden"
          :class="sidebarStore.isCollapsed ? 'w-16 xl:w-20' : 'w-56 2xl:w-64'"
        >
          <div class="h-full" v-show="!sidebarStore.isCollapsed">
            <TocComponent />
          </div>
          <!-- TOC Collapsed State: Icon/Empty Space untuk symmetry -->
          <div
            v-show="sidebarStore.isCollapsed"
            class="h-full flex items-start justify-center pt-8"
          >
            <!-- Optional: bisa kasih icon atau biarkan kosong untuk symmetry -->
            <div class="w-1 h-1 rounded-full bg-gray-300"></div>
          </div>
        </aside>

        <!-- FALLBACK: Kalau tidak ada TOC tapi sidebar collapsed, kasih spacer kanan -->
        <div
          v-else-if="showSidebar && sidebarStore.isCollapsed"
          class="hidden xl:block shrink-0 transition-all duration-300"
          :class="'w-16 xl:w-20'"
        ></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useSidebarStore } from "@/store/event/sidebarToggle";
import NavbarComponent from "@/components/common/NavbarComponent.vue";
import SideBarComponent from "@/components/common/SideBarComponent.vue";
import TocComponent from "@/components/common/TocComponent.vue";

const route = useRoute();
const sidebarStore = useSidebarStore();

const showSidebar = computed(() => {
  return route.meta.showSidebar === true;
});

const showToc = computed(() => {
  return route.meta.showSidebar !== false;
});

// Dynamic max-width untuk content
const contentMaxWidth = computed(() => {
  // Kalau tidak ada sidebar sama sekali
  if (!showSidebar.value) {
    return "max-w-4xl lg:max-w-5xl xl:max-w-6xl";
  }

  // Kalau sidebar collapsed (lebih lebar)
  if (sidebarStore.isCollapsed) {
    return "max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl";
  }

  // Kalau sidebar expanded (lebih sempit)
  return "max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl";
});
</script>

<style scoped>
/* Page transition */
.page-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Smooth scrolling */
section {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Custom scrollbar (Desktop) */
@media (min-width: 1024px) {
  section::-webkit-scrollbar {
    width: 8px;
  }

  section::-webkit-scrollbar-track {
    background: #f3f4f6;
  }

  section::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }

  section::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
}

/* Hide scrollbar (Mobile & Tablet) */
@media (max-width: 1023px) {
  section::-webkit-scrollbar {
    display: none;
  }

  section {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

/* Prevent overflow issues */
main {
  overflow-x: hidden;
}
</style>

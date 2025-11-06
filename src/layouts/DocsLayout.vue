<template>
  <main class="h-screen flex flex-col bg-gray-50">
    <NavbarComponent />
    <div class="flex-1 overflow-hidden">
      <div class="h-full mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        <div class="flex h-full gap-6">
          <!-- Sidebar -->
          <SideBarComponent v-if="showSidebar" class="w-60 flex-shrink-0" />

          <!-- Main content area -->
          <section class="flex-1 overflow-y-auto py-8">
            <RouterView />
          </section>

          <!-- TOC -->
          <TocComponent v-if="showSidebar" class="w-64 flex-shrink-0" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavbarComponent from "@/components/common/NavbarComponent.vue";
import SideBarComponent from "@/components/common/SideBarComponent.vue";
import TocComponent from "@/components/common/TocComponent.vue";

const route = useRoute();

const showSidebar = computed(() => {
  return route.meta.showSidebar === true;
});
</script>

<style scoped>
/* Smooth transitions */
.flex {
  transition: all 0.3s ease;
}
</style>

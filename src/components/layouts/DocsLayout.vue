<template>
  <main>
    <div class="h-screen flex flex-col">
      <!-- Navbar selalu ditampilkan -->
      <NavbarComponent />

      <!-- Content area dengan conditional sidebar -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar hanya muncul jika meta.showSidebar = true -->
        <SideBarComponent v-if="showSidebar" />

        <!-- Main content area -->
        <section class="flex-1 overflow-y-auto">
          <div class="p-4 md:p-6 lg:p-8">
            <RouterView />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavbarComponent from "../common/NavbarComponent.vue";
import SideBarComponent from "../common/SideBarComponent.vue";

const route = useRoute();

// Computed property untuk mengecek apakah sidebar perlu ditampilkan
const showSidebar = computed(() => {
  return route.meta.showSidebar === true;
});
</script>

<style scoped>
/* Optional: Tambahkan transisi smooth untuk sidebar */
.flex {
  transition: all 0.3s ease;
}
</style>

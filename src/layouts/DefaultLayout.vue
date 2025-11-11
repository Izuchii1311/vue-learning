<template>
  <main class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navbar -->
    <NavbarComponent />

    <!-- Main Content Area - SEDERHANA tanpa sidebar & TOC -->
    <div class="flex-1">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <!-- Full width content untuk home & about -->
        <section class="py-8 lg:py-12">
          <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <RouterView v-slot="{ Component }">
              <transition name="page" mode="out-in">
                <component :is="Component" />
              </transition>
            </RouterView>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import NavbarComponent from "@/components/common/NavbarComponent.vue";
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
</style>

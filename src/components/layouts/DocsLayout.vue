<template>
  <main>
    <!-- Docs Page layout -->
    <div v-if="route.meta.layout === 'MainDocs'">
      <div class="h-screen flex flex-col">
        <NavbarComponent />
        <div class="flex flex-1 overflow-hidden">
          <SideBarComponent />
          <section class="flex-1 overflow-y-auto">
            <div class="p-4 md:p-6 lg:p-8">
              <RouterView />
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Home Page layout -->
    <div v-else>
      <div class="h-screen flex flex-col">
        <NavbarComponent />
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
import { useRoute } from "vue-router";
import NavbarComponent from "../common/NavbarComponent.vue";
import SideBarComponent from "../common/SideBarComponent.vue";

const route = useRoute();
</script>

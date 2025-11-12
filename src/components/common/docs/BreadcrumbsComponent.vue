<template>
  <div class="breadcrumbs text-sm mb-6">
    <ul>
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </router-link>
      </li>

      <!-- Dynamic Breadcrumb Items -->
      <li v-for="(item, index) in breadcrumbItems" :key="index">
        <template v-if="index === breadcrumbItems.length - 1">
          <!-- Last Item (Current Page) -->
          <span class="text-gray-900 font-medium">
            {{ item }}
          </span>
        </template>
        <template v-else>
          <!-- Clickable Items -->
          <router-link
            :to="getRouteForBreadcrumb(item)"
            class="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {{ item }}
          </router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbItems = computed(() => {
  return route.meta.breadcrumb || [];
});

const getRouteForBreadcrumb = (item) => {
  const breadcrumbMap = {
    Documentation: { name: "DocsOverview" },
    "Getting Started": { name: "VueIntroduction" },
  };

  return breadcrumbMap[item] || { name: "DocsOverview" };
};
</script>

<style scoped>
.breadcrumbs ul {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumbs li:not(:first-child)::before {
  content: ">";
  margin: 0 0.5rem;
  color: #9ca3af;
}
</style>

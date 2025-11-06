<template>
  <aside class="w-60 h-full overflow-y-auto py-8 pr-6 border-r border-gray-200">
    <nav class="space-y-8">
      <!-- Getting Started Section -->
      <div class="space-y-3">
        <h2 class="text-xs font-bold tracking-wider uppercase text-gray-500 px-3">
          Getting Started
        </h2>
        <div class="space-y-1">
          <router-link
            v-for="item in navigationList.gettingStarted"
            :key="item.title"
            :to="{ name: item.name }"
            class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-100"
            active-class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
            exact-active-class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
          >
            <span
              class="w-1.5 h-1.5 rounded-full mr-3 transition-colors"
              :class="$route.name === item.name ? 'bg-indigo-600' : 'bg-gray-300'"
            >
            </span>
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <!-- Dashboard Section (uncomment if needed) -->
      <!-- <div class="space-y-3">
        <h2 class="text-xs font-bold tracking-wider uppercase text-gray-500 px-3">
          Dashboard
        </h2>
        <div class="space-y-1">
          <router-link
            v-for="item in dashboardList"
            :key="item.title"
            :to="{ name: item.name, params: item.params }"
            class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 hover:bg-gray-100"
            active-class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3"></span>
            {{ item.title }}
          </router-link>
        </div>
      </div> -->
    </nav>
  </aside>
</template>

<script setup>
import navigationList from "@/store/data/navigationList";
</script>

<style scoped>
.router-link-active {
  font-weight: 600;
  color: #3b82f6; /* Blue color untuk link aktif */
}
</style>

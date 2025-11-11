<template>
  <aside class="h-full overflow-y-auto py-8 pr-6 border-r border-gray-200 transition-all duration-300" :class="{
    'w-60': !sidebarStore.isCollapsed,
    'w-0 opacity-0': sidebarStore.isCollapsed,
  }">
    <nav class="space-y-8 transition-all duration-300" :class="{
      'opacity-100': !sidebarStore.isCollapsed,
      'opacity-0': sidebarStore.isCollapsed,
    }">
      <!-- Getting Started Section -->
      <div class="space-y-3">
        <h2 class="text-xs font-bold tracking-wider uppercase text-gray-500 px-3">
          Getting Started
        </h2>
        <div class="space-y-1">
          <router-link v-for="item in navigationStore.sidebarNavigation" :key="item.pathName"
            :to="{ name: item.pathName }"
            class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-100"
            active-class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
            exact-active-class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
            <span class="w-1.5 h-1.5 rounded-full mr-3 transition-colors"
              :class="$route.name === item.pathName ? 'bg-indigo-600' : 'bg-gray-300'">
            </span>
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { useNavigationStore } from "@/store/data/navigationList";
import { useSidebarStore } from "@/store/event/sidebarStore";

const navigationStore = useNavigationStore();
const sidebarStore = useSidebarStore();
</script>

<style scoped>
.router-link-active {
  font-weight: 600;
  color: #3b82f6;
}
</style>

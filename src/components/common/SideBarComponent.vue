<template>
  <aside class="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800">
    <nav class="space-y-8 text-sm">
      <!-- Getting Started Section -->
      <div class="space-y-2">
        <h2 class="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
          Getting Started
        </h2>
        <div class="flex flex-col space-y-1">
          <router-link
            v-for="item in gettingStartedList"
            :key="item.title"
            :to="{ name: item.name, params: item.params }"
            class="hover:underline"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <!-- Dashboard Section -->
      <div class="space-y-2">
        <h2 class="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
          Dashboard
        </h2>
        <div class="flex flex-col space-y-1">
          <router-link
            v-for="item in dashboardList"
            :key="item.title"
            :to="{ name: item.name, params: item.params }"
            class="hover:underline"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <!-- Pages Section -->
      <div class="space-y-2">
        <h2 class="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
          Pages
        </h2>
        <div class="flex flex-col space-y-1">
          <router-link
            v-for="item in pagesList"
            :key="item.title"
            :to="{ name: item.name, params: item.params }"
            class="hover:underline"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <!-- Misc Section -->
      <div class="space-y-2">
        <h2 class="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
          Misc
        </h2>
        <div class="flex flex-col space-y-1">
          <router-link
            v-for="item in miscList"
            :key="item.title"
            :to="{ name: item.name, params: item.params }"
            class="hover:underline"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
const gettingStartedList = [
  {
    title: "Installation",
    name: "DynamicDocs",
    params: { category: "getting-started", page: "installation" },
  },
  {
    title: "Plugins",
    name: "DynamicDocs",
    params: { category: "getting-started", page: "plugins" },
  },
  {
    title: "Migrations",
    name: "DynamicDocs",
    params: { category: "getting-started", page: "migrations" },
  },
  {
    title: "Appearance",
    name: "DynamicDocs",
    params: { category: "getting-started", page: "appearance" },
  },
  {
    title: "Mamba UI",
    name: "DynamicDocs",
    params: { category: "getting-started", page: "mamba-ui" },
  },
];

const dashboardList = [
  {
    title: "Header",
    name: "DynamicDocs",
    params: { category: "dashboard", page: "header" },
  },
  {
    title: "Sidebar",
    name: "DynamicDocs",
    params: { category: "dashboard", page: "sidebar" },
  },
  {
    title: "Footer",
    name: "DynamicDocs",
    params: { category: "dashboard", page: "footer" },
  },
  {
    title: "Drawer",
    name: "DynamicDocs",
    params: { category: "dashboard", page: "drawer" },
  },
  {
    title: "Page Title",
    name: "DynamicDocs",
    params: { category: "dashboard", page: "page-title" },
  },
  {
    title: "Menus",
    name: "DynamicDocs",
    params: { category: "dashboard", page: "menus" },
  },
];

const pagesList = [
  {
    title: "Homepage",
    name: "DynamicDocs",
    params: { category: "pages", page: "homepage" },
  },
  {
    title: "Users",
    name: "DynamicDocs",
    params: { category: "pages", page: "users" },
  },
  {
    title: "Tools",
    name: "DynamicDocs",
    params: { category: "pages", page: "tools" },
  },
  {
    title: "Settings",
    name: "DynamicDocs",
    params: { category: "pages", page: "settings" },
  },
];

const miscList = [
  {
    title: "Tutorials",
    name: "DynamicDocs",
    params: { category: "misc", page: "tutorials" },
  },
  {
    title: "Changelog",
    name: "DynamicDocs",
    params: { category: "misc", page: "changelog" },
  },
];
</script>

<style scoped>
.router-link-active {
  font-weight: 600;
  color: #3b82f6; /* Blue color untuk link aktif */
}
</style>

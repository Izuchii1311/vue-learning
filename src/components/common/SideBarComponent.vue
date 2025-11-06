<template>
  <aside class="w-60 h-full overflow-y-auto py-8 pr-6">
    <nav class="space-y-8">
      <!-- Getting Started Section -->
      <div class="space-y-3">
        <h2 class="text-xs font-bold tracking-wider uppercase text-gray-500 px-3">
          Getting Started
        </h2>
        <div class="space-y-1">
          <router-link
            v-for="item in gettingStartedList1"
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
const gettingStartedList1 = [
  {
    title: "Installation",
    name: "Installation",
  },
  {
    title: "Plugins",
    name: "Plugins",
  },
  {
    title: "Setup",
    name: "Setup",
  },
];

// const gettingStartedList = [
//   {
//     title: "Installation",
//     name: "DynamicDocs",
//     params: { category: "getting-started", page: "installation" },
//   },
//   {
//     title: "Plugins",
//     name: "DynamicDocs",
//     params: { category: "getting-started", page: "plugins" },
//   },
//   {
//     title: "Migrations",
//     name: "DynamicDocs",
//     params: { category: "getting-started", page: "migrations" },
//   },
//   {
//     title: "Appearance",
//     name: "DynamicDocs",
//     params: { category: "getting-started", page: "appearance" },
//   },
//   {
//     title: "Mamba UI",
//     name: "DynamicDocs",
//     params: { category: "getting-started", page: "mamba-ui" },
//   },
// ];

// const dashboardList = [
//   {
//     title: "Header",
//     name: "DynamicDocs",
//     params: { category: "dashboard", page: "header" },
//   },
//   {
//     title: "Sidebar",
//     name: "DynamicDocs",
//     params: { category: "dashboard", page: "sidebar" },
//   },
//   {
//     title: "Footer",
//     name: "DynamicDocs",
//     params: { category: "dashboard", page: "footer" },
//   },
//   {
//     title: "Drawer",
//     name: "DynamicDocs",
//     params: { category: "dashboard", page: "drawer" },
//   },
//   {
//     title: "Page Title",
//     name: "DynamicDocs",
//     params: { category: "dashboard", page: "page-title" },
//   },
//   {
//     title: "Menus",
//     name: "DynamicDocs",
//     params: { category: "dashboard", page: "menus" },
//   },
// ];

// const pagesList = [
//   {
//     title: "Homepage",
//     name: "DynamicDocs",
//     params: { category: "pages", page: "homepage" },
//   },
//   {
//     title: "Users",
//     name: "DynamicDocs",
//     params: { category: "pages", page: "users" },
//   },
//   {
//     title: "Tools",
//     name: "DynamicDocs",
//     params: { category: "pages", page: "tools" },
//   },
//   {
//     title: "Settings",
//     name: "DynamicDocs",
//     params: { category: "pages", page: "settings" },
//   },
// ];

// const miscList = [
//   {
//     title: "Tutorials",
//     name: "DynamicDocs",
//     params: { category: "misc", page: "tutorials" },
//   },
//   {
//     title: "Changelog",
//     name: "DynamicDocs",
//     params: { category: "misc", page: "changelog" },
//   },
// ];
</script>

<style scoped>
.router-link-active {
  font-weight: 600;
  color: #3b82f6; /* Blue color untuk link aktif */
}
</style>

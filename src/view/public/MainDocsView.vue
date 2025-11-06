<script setup></script>

<template>
  <div>
    <!-- Router View untuk menampilkan nested routes -->
    <router-view></router-view>

    <!-- Jika tidak ada child route yang aktif, tampilkan default content -->
    <div v-if="!$route.name || $route.name === 'MainDocs'">
      <h1>Main Documentation</h1>
      <p>This is the main docs layout</p>
      <p>Please select a documentation topic from the sidebar.</p>
    </div>
  </div>
</template>

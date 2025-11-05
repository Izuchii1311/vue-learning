<template>
  <div class="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
    <div class="flex items-start gap-3">
      <span class="text-2xl">💡</span>
      <div>
        <h4 v-if="title" class="font-semibold text-blue-900 mb-1">{{ title }}</h4>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: String,
  title: String,
});
</script>

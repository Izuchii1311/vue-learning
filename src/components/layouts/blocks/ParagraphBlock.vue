<template>
  <p class="text-gray-700 leading-relaxed mb-4">
    {{ content }}
  </p>
</template>

<script setup>
defineProps({
  content: String,
});
</script>

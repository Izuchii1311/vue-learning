<template>
  <component :is="ordered ? 'ol' : 'ul'" :class="listClasses">
    <li v-for="(item, index) in items" :key="index" class="mb-2">
      {{ item }}
    </li>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  ordered: {
    type: Boolean,
    default: false,
  },
});

const listClasses = computed(() => {
  const base = "text-gray-700 leading-relaxed mb-4";
  return props.ordered
    ? `${base} list-decimal list-inside space-y-2`
    : `${base} list-disc list-inside space-y-2`;
});
</script>

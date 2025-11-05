<template>
  <component :is="level" :class="headingClasses">
    {{ content }}
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  level: {
    type: String,
    default: "h2",
    validator(value) {
      return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    },
  },
  content: {
    type: String,
  },
});

const headingClasses = computed(() => {
  const baseClasses = "font-bold text-gray-900 mb-4";
  const sizeMap = {
    h1: "text-4xl mt-8",
    h2: "text-3xl mt-8",
    h3: "text-2xl mt-6",
    h4: "text-xl mt-4",
    h5: "text-lg mt-4",
    h6: "text-base mt-4",
  };
  return `${baseClasses} ${sizeMap[props.level]}`;
});
</script>

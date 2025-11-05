<template>
  <div :class="alertClasses" class="p-4 rounded-lg mb-6 flex items-start gap-3">
    <span class="text-xl flex-shrink-0">{{ icon }}</span>
    <div class="flex-1">
      <h4 v-if="title" class="font-semibold mb-1">{{ title }}</h4>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  content: String,
  title: String,
  type: {
    type: String,
    default: "info",
    validator: (value) => ["info", "success", "warning", "error"].includes(value),
  },
});

const alertConfig = {
  info: {
    classess: "bg-blue-50 border border-blue-200 text-blue-800",
    icon: "ℹ️",
  },
  success: {
    classess: "bg-green-50 border border-green-200 text-green-800",
    icon: "✅",
  },
  warning: {
    classess: "bg-yellow-50 border border-yellow-200 text-yellow-800",
    icon: "⚠️",
  },
  error: {
    classess: "bg-red-50 border border-red-200 text-red-800",
    icon: "❌",
  },
};

const alertClasses = computed(() => alertConfig[props.type].classess);
const icon = computed(() => alertConfig[props.type].icon);
</script>

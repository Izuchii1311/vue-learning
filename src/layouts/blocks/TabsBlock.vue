<template>
  <div class="mb-6">
    <div class="flex border-b border-gray-200 mb-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="tabButtonClasses(index)"
        class="px-4 py-2 font-medium transition-colors"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <ContentBlock
        v-for="(block, idx) in tabs[activeTab].content"
        :key="idx"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);

const tabButtonClasses = (index) => {
  return activeTab.value === index
    ? "border-b-2 border-blue-500 text-blue-600"
    : "text-gray-600 hover:text-gray-900";
};
</script>

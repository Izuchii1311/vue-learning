<template>
  <div class="mb-8">
    <div
      v-if="title"
      class="flex items-center justify-between bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg text-sm"
    >
      <span>
        {{ title }}
      </span>
      <button @click="copyCode" class="hover:text-white transition">
        {{ copied ? " ✓ Copied!" : "Copy" }}
      </button>
    </div>
    <pre :class="preClassess">
      <code :class="`language-${language}`">
        {{ content }}
      </code>
    </pre>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  content: String,
  language: {
    type: String,
    default: "javascript",
  },
  title: String,
});

const copied = ref(false);

const preClassess = computed(() => {
  return props.title
    ? "bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto"
    : "bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto";
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.content);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error(err);
  }
};
</script>

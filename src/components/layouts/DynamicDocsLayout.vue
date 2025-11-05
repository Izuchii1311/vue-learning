<template>
  <div class="max-w-4xl">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-sm text-gray-600 flex items-center gap-2">
      <router-link :to="{ name: 'MainDocs' }" class="hover:text-blue-600">
        Docs
      </router-link>
      <span>/</span>
      <span class="capitalize">{{ category }}</span>
      <span>/</span>
      <span class="capitalize font-semibold text-gray-900">
        {{ formatPageName(page) }}
      </span>
    </nav>

    <!-- Content -->
    <div
      v-if="content"
      class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8"
    >
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-3 text-gray-900">
          {{ content.title }}
        </h1>
        <p class="text-lg text-gray-600 mb-4">
          {{ content.description }}
        </p>

        <!-- Tags -->
        <div v-if="content.tags.length" class="flex flex-wrap gap-2">
          <span
            v-for="tag in content.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-8">
        <!-- Render Content Blocks Dynamically -->
        <ContentBlock
          v-for="(block, index) in content.blocks"
          :key="index"
          :block="block"
        />
      </div>

      <!-- Navigation -->
      <div class="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center">
        <button
          v-if="previousPage"
          @click="navigateToPage(previousPage)"
          class="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition group"
        >
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          <div class="text-left">
            <div class="text-xs text-gray-500">Previous</div>
            <div class="font-medium">{{ formatPageName(previousPage.page) }}</div>
          </div>
        </button>
        <div v-else></div>

        <button
          v-if="nextPage"
          @click="navigateToPage(nextPage)"
          class="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition group"
        >
          <div class="text-right">
            <div class="text-xs text-gray-500">Next</div>
            <div class="font-medium">{{ formatPageName(nextPage.page) }}</div>
          </div>
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div
      v-else-if="loading"
      class="bg-white rounded-lg shadow-sm border border-gray-200 p-12"
    >
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
        ></div>
        <p class="mt-4 text-gray-600">Loading documentation...</p>
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else class="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
      <div class="text-center">
        <div class="text-6xl mb-4">📚</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p class="text-gray-600 mb-6">
          The documentation page you're looking for doesn't exist yet.
        </p>
        <router-link
          :to="{ name: 'MainDocs' }"
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Documentation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import ContentBlock from "./ContentBlock.vue";
import { getDocContent } from "@/data/docsContent.js";

// Props dari router
const props = defineProps({
  category: String,
  page: String,
});

const router = useRouter();

// State
const content = ref(null);
const loading = ref(false);

// Format page name
const formatPageName = (pageName) => {
  return pageName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Navigation data
const pages = [
  { category: "getting-started", page: "installation" },
  { category: "getting-started", page: "plugins" },
  { category: "getting-started", page: "migrations" },
  { category: "dashboard", page: "header" },
  { category: "dashboard", page: "sidebar" },
];

const currentIndex = computed(() => {
  return pages.findIndex((p) => p.category === props.category && p.page === props.page);
});

const previousPage = computed(() => {
  const index = currentIndex.value;
  return index > 0 ? pages[index - 1] : null;
});

const nextPage = computed(() => {
  const index = currentIndex.value;
  return index >= 0 && index < pages.length - 1 ? pages[index + 1] : null;
});

const navigateToPage = (pageInfo) => {
  router.push({
    name: "DynamicDocs",
    params: {
      category: pageInfo.category,
      page: pageInfo.page,
    },
  });
};

// Load content
const loadContent = () => {
  loading.value = true;
  content.value = null;

  // Simulate API delay
  setTimeout(() => {
    content.value = getDocContent(props.category, props.page);
    loading.value = false;
  }, 300);
};

// Watch untuk perubahan props
watch(() => [props.category, props.page], loadContent, { immediate: true });
</script>

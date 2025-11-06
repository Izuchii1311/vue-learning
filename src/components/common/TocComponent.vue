<template>
  <aside class="w-64 h-full overflow-y-auto py-8 pl-6 border-l border-gray-200">
    <!-- Sticky header -->
    <div class="sticky top-0 bg-gray-50 pb-2 mb-4">
      <h3 class="text-xs font-bold tracking-wider uppercase text-gray-500 px-3">
        On This Page
      </h3>
    </div>

    <!-- Navigation list -->
    <nav class="space-y-1">
      <a
        v-for="(item, index) in tocItems"
        :key="index"
        :href="item.href"
        @click.prevent="scrollToSection(item.href)"
        class="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
        :class="activeSection === item.href ? 'bg-indigo-50' : ''"
      >
        <!-- Active indicator line -->
        <span
          class="w-0.5 h-5 rounded-full transition-all duration-200"
          :class="
            activeSection === item.href
              ? 'bg-indigo-600'
              : 'bg-transparent group-hover:bg-indigo-300'
          "
        ></span>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <p
            class="text-sm font-medium truncate transition-colors duration-200"
            :class="
              activeSection === item.href
                ? 'text-indigo-600'
                : 'text-gray-700 group-hover:text-gray-900'
            "
          >
            {{ item.name }}
          </p>
          <p v-if="item.subtitle" class="text-xs text-gray-500 mt-0.5">
            {{ item.subtitle }}
          </p>
        </div>
      </a>
    </nav>

    <!-- Back to top button -->
    <div class="sticky bottom-0 bg-gradient-to-t from-gray-50 via-gray-50 pt-6 mt-8">
      <button
        @click="scrollToTop"
        class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        Back to Top
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Sample TOC data
const tocItems = ref([
  {
    name: "Vue",
    href: "#cypress",
    subtitle: "Vue V3",
  },
  {
    name: "JavaScript",
    href: "#go",
  },
  {
    name: "JavaScript",
    href: "#jest",
    subtitle: "DOM",
  },
  {
    name: "CSS",
    href: "#junit",
  },
  {
    name: "HTML",
    href: "#minitest",
  },
  {
    name: "Tailwind",
    href: "#mocha",
    subtitle: "Tailwind CSS",
  },
]);

const activeSection = ref("#cypress");

// Scroll to section
const scrollToSection = (href) => {
  activeSection.value = href;
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Track active section on scroll (optional)
const handleScroll = () => {
  // Implementation for detecting active section based on scroll position
  // You can add this logic if needed
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Custom scrollbar */
aside::-webkit-scrollbar {
  width: 6px;
}

aside::-webkit-scrollbar-track {
  background: transparent;
}

aside::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 3px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>

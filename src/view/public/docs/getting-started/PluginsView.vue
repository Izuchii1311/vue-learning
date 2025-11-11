<template>
  <div>
    <BreadcrumbsComponent />

    <!-- Main Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-8 border-b border-gray-200"
      >
        <div class="flex items-center space-x-4">
          <div
            class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Vue Plugins Configuration</h1>
            <p class="text-gray-600 mt-1">
              Essential plugins to enhance your Vue.js development experience
            </p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <div class="prose max-w-none">
          <p class="text-gray-700 leading-relaxed">
            Discover and configure essential Vue.js plugins to extend functionality and
            improve development workflow.
          </p>
        </div>

        <!-- Recommended Plugins -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">Recommended Plugins</h3>

          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div class="flex items-center mb-2">
                <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <h4 class="font-semibold text-gray-900">Vue Router</h4>
              </div>
              <p class="text-sm text-gray-600 mb-3">Official router for Vue.js</p>
              <div class="mockup-code text-xs">
                <pre data-prefix="$"><code>npm install vue-router</code></pre>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div class="flex items-center mb-2">
                <div class="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <h4 class="font-semibold text-gray-900">Pinia</h4>
              </div>
              <p class="text-sm text-gray-600 mb-3">State management solution</p>
              <div class="mockup-code text-xs">
                <pre data-prefix="$"><code>npm install pinia</code></pre>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div class="flex items-center mb-2">
                <div class="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <h4 class="font-semibold text-gray-900">Vue I18n</h4>
              </div>
              <p class="text-sm text-gray-600 mb-3">Internationalization plugin</p>
              <div class="mockup-code text-xs">
                <pre data-prefix="$"><code>npm install vue-i18n</code></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Installation Guide -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h3 class="font-semibold text-gray-900 mb-3">Plugin Installation</h3>
          <p class="text-sm text-gray-600 mb-3">
            Install and configure plugins in your main.js file:
          </p>
          <div class="mockup-code">
            <pre data-prefix="1"><code>import { createApp } from 'vue'</code></pre>
            <pre data-prefix="2"><code>import { createPinia } from 'pinia'</code></pre>
            <pre data-prefix="3"><code>import router from './router'</code></pre>
            <pre data-prefix="4"><code> </code></pre>
            <pre data-prefix="5"><code>const app = createApp(App)</code></pre>
            <pre data-prefix="6"><code>app.use(createPinia())</code></pre>
            <pre data-prefix="7"><code>app.use(router)</code></pre>
            <pre data-prefix="8"><code>app.mount('#app')</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbsComponent from "@/components/common/docs/BreadcrumbsComponent.vue";
</script>

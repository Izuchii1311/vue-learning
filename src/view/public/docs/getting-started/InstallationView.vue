<template>
  <div>
    <BreadcrumbsComponent />

    <!-- Main Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-8 border-b border-gray-200"
      >
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Vue Installation Guide</h1>
            <p class="text-gray-600 mt-1">
              Step-by-step guide to install Vue.js in your project
            </p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <div class="prose max-w-none">
          <p class="text-gray-700 leading-relaxed">
            Follow this comprehensive guide to install Vue.js and set up your development
            environment.
          </p>
        </div>

        <!-- Installation Steps -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">Installation Steps</h3>

          <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
            <h4 class="font-semibold text-gray-900 mb-2">1. Prerequisites</h4>
            <p class="text-sm text-gray-600 mb-3">
              Make sure you have Node.js installed on your system.
            </p>
            <div class="mockup-code">
              <pre data-prefix="$"><code>node --version</code></pre>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 class="font-semibold text-gray-900 mb-2">2. Create Vue Project</h4>
            <p class="text-sm text-gray-600 mb-3">
              Start a new Vue project using the official CLI.
            </p>
            <div class="mockup-code">
              <pre data-prefix="$"><code>npm create vue@latest my-project</code></pre>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 class="font-semibold text-gray-900 mb-2">3. Install Dependencies</h4>
            <p class="text-sm text-gray-600 mb-3">
              Navigate to your project and install dependencies.
            </p>
            <div class="mockup-code">
              <pre data-prefix="$"><code>cd my-project</code></pre>
              <pre data-prefix="$"><code>npm install</code></pre>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-500">
            <h4 class="font-semibold text-gray-900 mb-2">4. Start Development Server</h4>
            <p class="text-sm text-gray-600 mb-3">Launch your development environment.</p>
            <div class="mockup-code">
              <pre data-prefix="$"><code>npm run dev</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbsComponent from "@/components/common/docs/BreadcrumbsComponent.vue";
</script>

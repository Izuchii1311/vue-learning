<template>
  <div>
    <BreadcrumbsComponent />

    <!-- Main Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div
        class="bg-linear-to-r from-blue-50 to-indigo-50 px-6 py-8 border-b border-gray-200"
      >
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Vue Project Setup</h1>
            <p class="text-gray-600 mt-1">
              Configure your Vue project with best practices and recommended settings
            </p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <div class="prose max-w-none">
          <p class="text-gray-700 leading-relaxed">
            Configure your Vue.js project with optimal settings and development tools for
            better productivity.
          </p>
        </div>

        <!-- Setup Options -->
        <div class="grid gap-6 md:grid-cols-2">
          <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
            <h3 class="font-semibold text-gray-900 mb-2">Quick Setup</h3>
            <p class="text-sm text-gray-600 mb-3">
              Get running in 5 minutes with basic configuration
            </p>
            <div class="mockup-code text-sm">
              <pre
                data-prefix=">"
                class="text-success"
              ><code>Basic configuration applied</code></pre>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
            <h3 class="font-semibold text-gray-900 mb-2">Advanced Setup</h3>
            <p class="text-sm text-gray-600 mb-3">
              Custom configuration and advanced options
            </p>
            <div class="mockup-code text-sm">
              <pre
                data-prefix=">"
                class="text-warning"
              ><code>Advanced features enabled</code></pre>
            </div>
          </div>
        </div>

        <!-- Configuration Steps -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">Configuration Steps</h3>

          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 mb-2">Project Structure</h4>
            <p class="text-sm text-gray-600 mb-3">
              Organize your project files efficiently.
            </p>
            <div class="mockup-code">
              <pre data-prefix="src/"><code>components/</code></pre>
              <pre data-prefix="src/"><code>views/</code></pre>
              <pre data-prefix="src/"><code>router/</code></pre>
              <pre data-prefix="src/"><code>stores/</code></pre>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 mb-2">Development Tools</h4>
            <p class="text-sm text-gray-600 mb-3">Essential development dependencies.</p>
            <div class="mockup-code">
              <pre data-prefix="$"><code>npm install -D eslint prettier</code></pre>
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

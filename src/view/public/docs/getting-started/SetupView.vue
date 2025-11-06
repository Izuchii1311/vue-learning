<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm">
          <li>
            <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors"
              >Home</a
            >
          </li>
          <li class="flex items-center">
            <span class="mx-2 text-gray-400">/</span>
            <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors"
              >Components</a
            >
          </li>
          <li class="flex items-center">
            <span class="mx-2 text-gray-400">/</span>
            <span class="text-gray-900 font-medium">Setup Guide</span>
          </li>
        </ol>
      </nav>

      <!-- Main Card -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <!-- Header -->
        <div
          class="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 border-b border-gray-200"
        >
          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Setup Guide</h1>
              <p class="text-gray-600 mt-1">
                Get started with your project setup and configuration
              </p>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-6">
          <div class="prose max-w-none">
            <p class="text-gray-700 leading-relaxed">
              Welcome to the setup guide! Follow these instructions to get your
              application up and running quickly.
            </p>
          </div>

          <!-- Steps -->
          <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-gray-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Quick Start</h3>
              <p class="text-sm text-gray-600">
                Get running in 5 minutes with basic setup
              </p>
            </div>

            <div class="bg-gray-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Advanced Setup</h3>
              <p class="text-sm text-gray-600">
                Custom configuration and advanced options
              </p>
            </div>
          </div>

          <!-- Code Example -->
          <div class="mockup-code w-full">
            <pre data-prefix="$"><code>npm install</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<script setup>
import BreadcrumbsComponent from '@/components/common/docs/BreadcrumbsComponent.vue';
</script>

<template>
  <div>
    <BreadcrumbsComponent />

    <!-- Content untuk Documentation Overview -->
    <div class="space-y-6">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Documentation Overview
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome to our documentation. Get started with our guides and tutorials.
        </p>
      </div>

      <!-- Quick Links Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <router-link
          :to="{ name: 'VueInstallation' }"
          class="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
        >
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-indigo-500 mr-3 group-hover:bg-indigo-600 transition-colors"></div>
            <h3 class="text-lg font-semibold text-gray-900">Vue Installation</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Step-by-step guide to install and set up Vue.js in your project.
          </p>
        </router-link>

        <router-link
          :to="{ name: 'VueSetup' }"
          class="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
        >
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-indigo-500 mr-3 group-hover:bg-indigo-600 transition-colors"></div>
            <h3 class="text-lg font-semibold text-gray-900">Vue Setup</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Configure your Vue project with best practices and recommended settings.
          </p>
        </router-link>

        <router-link
          :to="{ name: 'VuePlugins' }"
          class="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
        >
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-indigo-500 mr-3 group-hover:bg-indigo-600 transition-colors"></div>
            <h3 class="text-lg font-semibold text-gray-900">Vue Plugins</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Explore essential plugins to enhance your Vue.js development experience.
          </p>
        </router-link>
      </div>

      <!-- FAQ Section (Your Existing Content) -->
      <div class="bg-base-100 rounded-lg p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title font-semibold">How do I create an account?</div>
            <div class="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration
              process.
            </div>
          </div>
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div class="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the instructions sent to
              your email.
            </div>
          </div>
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div class="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

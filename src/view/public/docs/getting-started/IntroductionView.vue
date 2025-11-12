<template>
  <div>
    <BreadcrumbsComponent />

    <!-- Main Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div
        class="bg-linear-to-r from-green-50 to-emerald-50 px-6 py-8 border-b border-gray-200 relative group"
        @mouseenter="hoverStore.handleMouseEnter('introduction')"
        @mouseleave="hoverStore.handleMouseLeave('introduction')"
      >
        <!-- Floating Hashtag -->
        <button
          @click="copyStore.copySectionLink('introduction')"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-pointer z-10"
          :class="hashtagClasses"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
        </button>

        <!-- Content dengan margin yang berubah -->
        <div
          class="flex items-center space-x-4 transition-all duration-300"
          :class="contentShiftClass"
        >
          <div>
            <h1 id="introduction" class="text-2xl font-bold text-gray-900 uppercase">
              Vue Introduction
            </h1>
            <p class="text-gray-600 mt-1">Apa itu Vue.js? Bagaimana cara memulainya?</p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <div class="prose max-w-none">
          <p class="text-gray-700 leading-relaxed">
            Vue (cara pengucapannya /vjuː/, seperti view) adalah sebuah kerangka kerja nan
            progresif untuk membangun antarmuka pengguna. Tidak seperti beberapa kerangka
            kerja monolitik yang lain, Vue dirancang dari dasar sekali agar dapat diadopsi
            secara bertahap. Pustaka intinya difokuskan pada layer tampilan saja, dan
            sangat mudah untuk diintegrasikan dengan pustaka yang lain atau dengan proyek
            yang sudah ada. Di sisi lain, Vue sangat mampu memberikan dan mendukung Single
            Page Application yang canggih ketika dikombinasikan dengan perkakas modern dan
            dukungan pustaka.
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

// ini konsepnya belum jelas, alur kodingannya masih bingung
import { useHoverStore } from "@/store/event/idSectionStore";
import { useCopyStore } from "@/store/event/sectionNavStore";

const hoverStore = useHoverStore();
const copyStore = useCopyStore();

const hashtagClasses = hoverStore.getHashtagClasses("introduction");
const contentShiftClass = hoverStore.getContentShiftClass("introduction");
</script>

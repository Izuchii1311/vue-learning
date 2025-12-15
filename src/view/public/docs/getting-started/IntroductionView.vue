<template>
  <div>
    <BreadcrumbsComponent />

    <!-- Main Card -->
    <div
      class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8"
    >
      <!-- Header -->
      <div
        class="bg-linear-to-r from-green-50 to-emerald-50 px-6 py-8 border-b border-gray-200 relative group"
        @mouseenter="hoverStore.handleMouseEnter('vue-intro')"
        @mouseleave="hoverStore.handleMouseLeave('vue-intro')"
      >
        <!-- Floating Hashtag -->
        <button
          @click="copyStore.copySectionLink('vue-intro')"
          class="absolute left-5 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-pointer z-10"
          :class="hashtagClasses"
        >
          <IconComponent name="hashtag" />
        </button>

        <!-- Content dengan margin yang berubah -->
        <div
          class="flex items-center space-x-4 transition-all duration-300"
          :class="contentShiftClass"
        >
          <div>
            <h1 id="vue-intro" class="text-2xl font-bold text-gray-900 uppercase">
              Vue Introduction
            </h1>
            <p class="text-gray-600 mt-1">Apa itu Vue.js?</p>
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
      </div>
    </div>

    <!--  -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div
        class="bg-linear-to-r from-green-50 to-emerald-50 px-6 py-8 border-b border-gray-200 relative group"
        @mouseenter="hoverStore.handleMouseEnter('vue-intro')"
        @mouseleave="hoverStore.handleMouseLeave('vue-intro')"
      >
        <!-- Floating Hashtag -->
        <button
          @click="copyStore.copySectionLink('vue-intro')"
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
            <p class="text-gray-600 mt-1">Cara Memulai</p>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbsComponent from "@/components/common/docs/BreadcrumbsComponent.vue";
import IconComponent from "@/components/common/IconComponent.vue";

// ini konsepnya belum jelas, alur kodingannya masih bingung
import { useHoverStore } from "@/store/event/idSectionStore";
import { useCopyStore } from "@/store/event/sectionNavStore";

const hoverStore = useHoverStore();
const copyStore = useCopyStore();

const hashtagClasses = hoverStore.getHashtagClasses("vue-intro");
const contentShiftClass = hoverStore.getContentShiftClass("vue-intro");
</script>

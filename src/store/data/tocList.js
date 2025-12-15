// stores/data/tocList.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTocStore = defineStore('toc', () => {
  // State untuk menyimpan TOC aktif
  const currentToc = ref([]);

  const tocData = {
    // Sesuaikan dengan route name di router
    VueIntroduction: [
      { id: 'vue-intro', title: 'Pengenalan Vue', level: 2 },
      { id: 'vue-history', title: 'Sejarah Perkembangan Vue', level: 2 },
      { id: 'why-vue', title: 'Mengapa Memilih Vue?', level: 2 },
      { id: 'pros-cons', title: 'Kelebihan dan Kekurangan', level: 3 }
    ],
    VueInstallation: [
      { id: 'prerequisites', title: 'Prasyarat', level: 2 },
      { id: 'installation-methods', title: 'Metode Instalasi', level: 2 },
      { id: 'cdn-method', title: 'Via CDN', level: 3 },
      { id: 'npm-method', title: 'Via NPM', level: 3 },
      { id: 'cli-method', title: 'Via Vue CLI', level: 3 }
    ],
    VueSetup: [
      { id: 'first-app', title: 'Aplikasi Pertama', level: 2 },
      { id: 'basic-syntax', title: 'Syntax Dasar', level: 2 }
    ],
    VuePlugins: [
      { id: 'router-plugin', title: 'Vue Router', level: 2 },
      { id: 'pinia-plugin', title: 'Pinia State Management', level: 2 }
    ],
    // Halaman tanpa TOC (return empty array)
    DocsOverview: []
  };

  // Computed untuk backward compatibility
  const activeToc = computed(() => currentToc.value);
  const tocList = computed(() => currentToc.value); // Untuk DocsLayout

  // Cek apakah halaman perlu TOC
  const shouldShowToc = computed(() => {
    return currentToc.value.length > 0;
  });

  // Method untuk set TOC dari komponen
  const setTocFromRoute = (routeName) => {
    currentToc.value = tocData[routeName] || [];
  };

  // Method untuk update TOC manual (jika ada dynamic content)
  const updateToc = (items) => {
    currentToc.value = items;
  };

  // Method untuk clear TOC
  const clearToc = () => {
    currentToc.value = [];
  };

  return {
    // State
    currentToc,
    tocData,

    // Computed
    activeToc,
    tocList, // Untuk backward compatibility dengan DocsLayout
    shouldShowToc,

    // Actions
    setTocFromRoute,
    updateToc,
    clearToc
  };
});

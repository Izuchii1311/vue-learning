// ini masih urang pelajari


import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useHoverStore = defineStore('hover', () => {
  // State untuk menyimpan hover state per section
  const hoverStates = ref({})

  // Actions untuk manage hover state
  const setHoverState = (sectionId, isHovered) => {
    hoverStates.value[sectionId] = isHovered
  }

  const getHoverState = (sectionId) => {
    return hoverStates.value[sectionId] || false
  }

  // Computed classes untuk hashtag
  const getHashtagClasses = (sectionId) => {
    return computed(() => ({
      'opacity-0 scale-75': !getHoverState(sectionId),
      'opacity-100 scale-100 text-green-600 hover:text-green-700': getHoverState(sectionId),
    }))
  }

  // Computed classes untuk content shift
  const getContentShiftClass = (sectionId) => {
    return computed(() =>
      getHoverState(sectionId) ? 'ml-10' : 'ml-0'
    )
  }

  // Mouse event handlers
  const handleMouseEnter = (sectionId) => {
    setHoverState(sectionId, true)
  }

  const handleMouseLeave = (sectionId) => {
    setHoverState(sectionId, false)
  }

  return {
    hoverStates,
    setHoverState,
    getHoverState,
    getHashtagClasses,
    getContentShiftClass,
    handleMouseEnter,
    handleMouseLeave
  }
})

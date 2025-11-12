// ini masih urang pelajari

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCopyStore = defineStore('copy', () => {
  const copiedStates = ref({})

  const copySectionLink = async (sectionId) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`

    try {
      await navigator.clipboard.writeText(url)
      setCopiedState(sectionId, true)

      setTimeout(() => {
        setCopiedState(sectionId, false)
      }, 2000)

      return true
    } catch {
      return copySectionLinkFallback(sectionId)
    }
  }

  const copySectionLinkFallback = (sectionId) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`
    const textArea = document.createElement('textarea')
    textArea.value = url
    document.body.appendChild(textArea)
    textArea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textArea)

    if (success) {
      setCopiedState(sectionId, true)
      setTimeout(() => {
        setCopiedState(sectionId, false)
      }, 2000)
    }

    return success
  }

  const setCopiedState = (sectionId, state) => {
    copiedStates.value[sectionId] = state
  }

  const isCopied = (sectionId) => {
    return copiedStates.value[sectionId] || false
  }

  return {
    copiedStates,
    copySectionLink,
    isCopied
  }
})

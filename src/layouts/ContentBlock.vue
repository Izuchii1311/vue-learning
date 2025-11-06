<template>
  <component
    :is="componentMap[block.type]"
    v-bind="block.props"
    :content="block.content"
  />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const componentMap = {
  heading: defineAsyncComponent(() => import("./blocks/HeadingBlock.vue")),
  paragraph: defineAsyncComponent(() => import("./blocks/ParagraphBlock.vue")),
  list: defineAsyncComponent(() => import("./blocks/ListBlock.vue")),
  codeBlock: defineAsyncComponent(() => import("./blocks/CodeBlock.vue")),
  alert: defineAsyncComponent(() => import("./blocks/AlertBlock.vue")),
  tabs: defineAsyncComponent(() => import("./blocks/TabsBlock.vue")),
  image: defineAsyncComponent(() => import("./blocks/ImageBlock.vue")),
  callout: defineAsyncComponent(() => import("./blocks/CalloutBlock.vue")),
};

defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>

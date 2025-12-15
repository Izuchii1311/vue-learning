<template>
  <span class="inline-block" :class="$attrs.class" v-html="icons[name]" />
</template>

<script>
import { icons } from "@/store/utils/icon";

export default {
  props: ["name"],
  setup() {
    return { icons };
  },
};
</script>

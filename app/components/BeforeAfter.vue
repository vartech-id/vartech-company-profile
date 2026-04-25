<script setup>
import { VueCompareImage } from 'vue3-compare-image'

const props = defineProps({
  beforeImage: {
    type: String,
    required: true,
  },
  afterImage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <VueCompareImage
    :left-image="beforeImage"
    :right-image="afterImage"
  />
</template>
<script setup>
import { VueCompareImage } from 'vue3-compare-image'

import afterImage from '/services/regist-example.jpg'
import beforeImage from '/services/varbel-regist.webp'
</script>

<template>
  <VueCompareImage
    :left-image="beforeImage"
    :right-image="afterImage"
  />
</template>
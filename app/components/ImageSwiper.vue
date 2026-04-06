<script setup>
import { ref } from "vue";

const props = defineProps({
  images:{
    type: Array,
    required:true
  }
})

console.log(props.images)

const open = ref(false);
const selectedImage = ref(null);

const openPreview = (item) => {
  selectedImage.value = item;
  open.value = true;
};

const closePreview = () => {
  open.value = false;
};
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    arrows
    :items="images"
    :prev="{
      color: 'neutral',
      variant: 'solid',
      size: 'xl',
      class: 'rounded-full shadow-md',
    }"
    :next="{
      color: 'neutral',
      variant: 'solid',
      size: 'xl',
      class: 'rounded-full shadow-md',
    }"
    :ui="{
      prev: '-left-10 top-1/2 -translate-y-1/2 md:-left-12 lg:-left-16',
      next: '-right-10 top-1/2 -translate-y-1/2 md:-right-12 lg:-right-16',
    }"
    prev-icon="i-lucide-chevron-left"
    next-icon="i-lucide-chevron-right"
    class="mx-auto w-60"
  >
    <NuxtImg
      :src="item.src"
      :alt="item.alt"
      width="300"
      height="500"
      class="mx-auto cursor-zoom-in"
      loading="lazy"
      @click="openPreview(item)"
    />
  </UCarousel>

  <UModal v-model:open="open">
    <template #content>
      <div class="p-4" @click="closePreview">
        <NuxtImg
          v-if="selectedImage"
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="w-full h-auto rounded-lg"
        />
      </div>
    </template>
  </UModal>
</template>

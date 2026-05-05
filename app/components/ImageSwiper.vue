<script setup>
import { computed, nextTick, ref } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const trackRef = ref(null);
const activeIndex = ref(0);
const open = ref(false);
const selectedImage = ref(null);

const imageItems = computed(() => props.images || []);
const canGoPrev = computed(() => activeIndex.value > 0);
const canGoNext = computed(() => activeIndex.value < imageItems.value.length - 1);

const scrollToIndex = async (index) => {
  const nextIndex = Math.min(Math.max(index, 0), imageItems.value.length - 1);
  activeIndex.value = nextIndex;

  await nextTick();

  const track = trackRef.value;
  const slide = track?.children?.[nextIndex];

  if (!track || !slide) {
    return;
  }

  track.scrollTo({
    left: slide.offsetLeft - track.offsetLeft,
    behavior: "smooth",
  });
};

const goPrev = () => scrollToIndex(activeIndex.value - 1);
const goNext = () => scrollToIndex(activeIndex.value + 1);

const updateActiveSlide = () => {
  const track = trackRef.value;

  if (!track) {
    return;
  }

  const slideWidth = track.firstElementChild?.clientWidth || track.clientWidth;
  activeIndex.value = Math.round(track.scrollLeft / slideWidth);
};

const openPreview = (item) => {
  selectedImage.value = item;
  open.value = true;
};

const closePreview = () => {
  open.value = false;
};
</script>

<template>
  <div class="relative mx-auto w-60">
    <button
      type="button"
      class="absolute -left-10 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-white shadow-md transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 md:-left-12"
      aria-label="Previous image"
      :disabled="!canGoPrev"
      @click="goPrev"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="m15 18-6-6 6-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div
      ref="trackRef"
      class="image-swiper-track flex w-60 snap-x snap-mandatory overflow-x-auto scroll-smooth"
      @scroll.passive="updateActiveSlide"
    >
      <button
        v-for="item in imageItems"
        :key="item.src"
        type="button"
        class="w-60 shrink-0 snap-center"
        @click="openPreview(item)"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          class="mx-auto h-auto w-full cursor-zoom-in"
          width="320"
          height="426"
          sizes="240px"
          densities="1"
          loading="lazy"
          decoding="async"
        />
      </button>
    </div>

    <button
      type="button"
      class="absolute -right-10 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-white shadow-md transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 md:-right-12"
      aria-label="Next image"
      :disabled="!canGoNext"
      @click="goNext"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="m9 18 6-6-6-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>

  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-70 flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      @click.self="closePreview"
    >
      <button
        type="button"
        class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-black text-white"
        aria-label="Close preview"
        @click="closePreview"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 6 6 18M6 6l12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <NuxtImg
        v-if="selectedImage"
        :src="selectedImage.src"
        :alt="selectedImage.alt"
        class="max-h-[90vh] w-full max-w-4xl object-contain"
        sizes="100vw md:900px"
        densities="1"
      />
    </div>
  </Teleport>
</template>

<style scoped>
.image-swiper-track {
  scrollbar-width: none;
}

.image-swiper-track::-webkit-scrollbar {
  display: none;
}
</style>

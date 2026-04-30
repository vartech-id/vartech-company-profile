<script setup>
import { onUnmounted, ref, watch } from "vue";
import useEmblaCarousel from "embla-carousel-vue";

const props = defineProps({
  items: { type: Array, required: true },
  ariaLabel: { type: String, default: "Featured work carousel" },
});

const [emblaRef, emblaApi] = useEmblaCarousel({
  align: "start",
  containScroll: "trimSnaps",
  loop: false,
});

const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const updateControls = (api = emblaApi.value) => {
  if (!api) return;

  canScrollPrev.value = api.canScrollPrev();
  canScrollNext.value = api.canScrollNext();
};

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();

watch(
  emblaApi,
  (api, previousApi) => {
    if (previousApi) {
      previousApi.off("select", updateControls);
      previousApi.off("reInit", updateControls);
    }

    if (!api) return;

    updateControls(api);
    api.on("select", updateControls);
    api.on("reInit", updateControls);
  },
  { immediate: true },
);

onUnmounted(() => {
  const api = emblaApi.value;

  if (!api) return;

  api.off("select", updateControls);
  api.off("reInit", updateControls);
});
</script>

<template>
  <div
    class="w-full"
    :aria-label="props.ariaLabel"
    aria-roledescription="carousel"
  >
    <div
      class="grid w-full grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] justify-center items-center gap-2 sm:grid-cols-[3rem_minmax(0,1fr)_3rem] sm:gap-4"
    >
      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-12"
        :disabled="!canScrollPrev"
        aria-label="Previous work"
        @click="scrollPrev"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div class="min-w-0 overflow-hidden" ref="emblaRef">
        <div class="embla__container">
          <div
            v-for="(work, index) in props.items"
            :key="`${work.href}-${index}`"
            class="embla__slide"
          >
            <CardItem
              :title="work.title"
              :subtitle="work.company"
              :image="work.image"
              :image-alt="work.imageAlt"
              :href="work.href"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-12"
        :disabled="!canScrollNext"
        aria-label="Next work"
        @click="scrollNext"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>
<style scoped>
.embla__container {
  display: flex;
  gap: 1rem;
  touch-action: pan-y pinch-zoom;
}

.embla__slide {
  display: flex;
  flex: 0 0 100%;
  min-width: 0;
}

@media (min-width: 640px) {
  .embla__slide {
    flex-basis: calc((100% - 1rem) / 2);
  }
}

@media (min-width: 1024px) {
  .embla__slide {
    flex-basis: calc((100% - 2rem) / 3);
  }
}
</style>

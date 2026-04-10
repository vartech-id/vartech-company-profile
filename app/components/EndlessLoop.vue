<script setup>
import { watch } from "vue";
import useEmblaCarousel from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
  AutoScroll({ speed: 1, stopOnInteraction: false }),
]);

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();

watch(
  emblaApi,
  (api) => {
    if (!api) return;
    api.plugins().autoplay?.play();
  },
  { immediate: true },
);
</script>

<template>
  <div class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <div
          class="embla__slide"
          v-for="(slide, index) in props.slides"
          :key="index"
        >
          <img
            class="object-cover w-full h-full"
            :src="slide.image"
            :alt="slide.alt"
          />
          <p v-if="slide.caption">{{ slide.caption }}</p>
        </div>
      </div>
    </div>

    <!-- <button class="embla__prev" @click="scrollPrev">‹ Prev</button>
    <button class="embla__next" @click="scrollNext">Next ›</button> -->
  </div>
</template>

<style scoped>
.embla__viewport {
  overflow: hidden;
  width: 100vw;
}

.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  /* height: 400px; */
  /* border: 2px solid pink; */
}

.embla__slide {
  flex: 0 0 100%;
  max-height: 300px;
  max-width: 300px;
  min-width: 0;
  border: 2px solid orange;
  margin: 1rem;
  border-radius: 10px;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .embla__slide {
    max-height: 400px;
    max-width: 400px;
  }
}
</style>

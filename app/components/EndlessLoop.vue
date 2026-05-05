<script setup>
import { watch, computed } from "vue";
import useEmblaCarousel from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";

const props = defineProps({
  slides: { type: Array, required: true },
  threshold: { type: Number, default: 6 },
});

const isLoop = computed(() => props.slides.length >= props.threshold);

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
  AutoScroll({ speed: 1, stopOnInteraction: false }),
]);

watch(
  emblaApi,
  (api) => {
    if (!api || !isLoop.value) return;
    api.plugins().autoplay?.play();
  },
  { immediate: true },
);
</script>

<template>
  <!-- Endless loop carousel -->
  <div v-if="isLoop" class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <div
          class="embla__slide"
          v-for="(slide, index) in props.slides"
          :key="index"
        >
          <NuxtImg
            class="object-cover w-full h-full"
            :src="slide.image"
            :alt="slide.alt"
            width="400"
            height="400"
            sizes="300px md:400px"
            densities="1"
            quality="30"
            format="webp"
            loading="lazy"
            decoding="async"
          />
          <p v-if="slide.caption">{{ slide.caption }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Static centered grid for fewer than threshold slides -->
  <div v-else class="flex flex-wrap justify-center gap-4 px-4">
    <div
      v-for="(slide, index) in props.slides"
      :key="index"
      class="static-slide"
    >
      <NuxtImg
        class="object-cover w-full h-full"
        :src="slide.image"
        :alt="slide.alt"
        width="400"
        height="400"
        sizes="300px md:400px"
        densities="1"
        quality="74"
        format="webp"
        loading="lazy"
        decoding="async"
      />
      <p v-if="slide.caption">{{ slide.caption }}</p>
    </div>
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
}

.embla__slide {
  flex: 0 0 100%;
  max-height: 300px;
  max-width: 300px;
  min-width: 0;
  margin: 1rem;
  border-radius: 10px;
  overflow: hidden;
}

.static-slide {
  max-height: 300px;
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .embla__slide,
  .static-slide {
    max-height: 400px;
    max-width: 400px;
  }
}
</style>

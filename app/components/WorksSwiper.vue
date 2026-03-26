<script setup>
import useEmblaCarousel from "embla-carousel-vue";

const works = [
  {
    name: "Journey NHPV",
    src: "/works/journey-nhpv.png",
    alt: "Journey NHPV preview",
  },
  {
    name: "Quiz NHPV",
    src: "/works/quiz-nhpv.png",
    alt: "Quiz NHPV preview",
  },
  {
    name: "Realtime Photobooth",
    src: "/works/realtime-photobooth.png",
    alt: "Realtime Photobooth preview",
  },
  {
    name: "Realtime Photobooth",
    src: "/works/realtime-photobooth.png",
    alt: "Realtime Photobooth preview",
  },
  {
    name: "Realtime Photobooth",
    src: "/works/realtime-photobooth.png",
    alt: "Realtime Photobooth preview",
  },
];

const startIndex = Math.floor((works.length - 1) / 2);
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: false,
  startIndex,
});

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();

</script>

<template>
  <div class="embla flex w-full flex-col gap-5 max-w-70 lg:max-w-80">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container gap-2 ">
        <div
          v-for="(work, index) in works"
          :key="`${work.src}-${index}`"
          class="embla__slide"
        >
          <img class="block w-full" :src="work.src" :alt="work.alt" />
        </div>
      </div>
    </div>
    <div class="flex gap-5 justify-center">
      <button class="embla__prev" @click="scrollPrev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="w-10 border-2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button class="embla__next" @click="scrollNext">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="w-10 border-2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>
<style scoped>
.embla {
  --slide-size: 100%;
}

.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
}

.embla__viewport {
  overflow: visible;
}

.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
}
</style>

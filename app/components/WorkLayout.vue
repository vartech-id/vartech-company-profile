<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  headingId: {
    type: String,
    default: "project-title",
  },
  showcaseTitle: {
    type: String,
    default: "Project Showcase",
  },
  showcaseImages: {
    type: Array,
    default: () => [],
  },
  aboutTitle: {
    type: String,
    default: "About",
  },
  about: {
    type: String,
    default: "",
  },
  summaryTitle: {
    type: String,
    default: "Project Summary",
  },
  summaryItems: {
    type: Array,
    default: () => [],
  },
  galleryTitle: {
    type: String,
    default: "Project Gallery",
  },
  gallerySlides: {
    type: Array,
    default: () => [],
  },
  relatedTitle: {
    type: String,
    default: "Related Projects",
  },
  relatedProjects: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <article
    :aria-labelledby="headingId"
    class="mx-auto mt-10 flex w-11/12 max-w-[100rem] flex-col gap-10 items-center"
  >
    <header>
      <h1
        :id="headingId"
        class="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
      >
        {{ title }}
      </h1>
    </header>

    <section
      v-if="$slots.showcase || showcaseImages.length"
      :aria-labelledby="`${headingId}-showcase-title`"
      class="mx-auto flex w-full max-w-7xl flex-col gap-4"
    >
      <h2 :id="`${headingId}-showcase-title`" class="sr-only">
        {{ showcaseTitle }}
      </h2>

      <slot name="showcase">
        <figure
          v-for="(image, index) in showcaseImages"
          :key="`${image.src}-${index}`"
          class="overflow-hidden rounded-lg"
        >
          <NuxtImg
            class="w-full aspect-[3/2] object-cover"
            :src="image.src"
            :alt="image.alt"
            width="1200"
            height="800"
            format="webp"
          />
        </figure>
      </slot>
    </section>

    <div
      v-if="
        $slots.default ||
        $slots.about ||
        $slots.summary ||
        $slots.gallery ||
        about ||
        summaryItems.length ||
        gallerySlides.length
      "
      class="flex max-w-5xl flex-col gap-10 w-11/12"
    >
      <slot>
        <section
          v-if="$slots.about || about"
          :aria-labelledby="`${headingId}-about-title`"
          class="flex flex-col gap-3 "
        >
          <div class="flex items-center gap-3">
            <h2
              :id="`${headingId}-about-title`"
              class="relative -top-px text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              {{ aboutTitle }}
            </h2>
            <span class="h-px flex-1 bg-zinc-700"></span>
          </div>

          <slot name="about">
            <p class="text-sm leading-7 text-zinc-300 md:text-base">
              {{ about }}
            </p>
          </slot>
        </section>

        <section
          v-if="$slots.summary || summaryItems.length"
          :aria-labelledby="`${headingId}-summary-title`"
          class="flex flex-col gap-3"
        >
          <div class="flex items-center gap-3">
            <h2
              :id="`${headingId}-summary-title`"
              class="relative -top-px text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              {{ summaryTitle }}
            </h2>
            <span class="h-px flex-1 bg-zinc-700"></span>
          </div>

          <slot name="summary">
            <ol class="grid gap-3 md:grid-cols-2">
              <li
                v-for="(item, index) in summaryItems"
                :key="`${item.title}-${index}`"
                class="border border-zinc-800 bg-zinc-950 p-4 shadow-sm"
              >
                <h3
                  class="text-base font-semibold tracking-tight text-white md:text-lg"
                >
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-sm leading-6 text-zinc-300 md:text-base">
                  {{ item.description }}
                </p>
              </li>
            </ol>
          </slot>
        </section>

        <section
          v-if="$slots.gallery || gallerySlides.length"
          :aria-labelledby="`${headingId}-gallery-title`"
          class="flex flex-col gap-3"
        >
          <div class="flex items-center gap-3">
            <h2
              :id="`${headingId}-gallery-title`"
              class="relative -top-px text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              {{ galleryTitle }}
            </h2>
            <span class="h-px flex-1 bg-zinc-700"></span>
          </div>

          <slot name="gallery">
            <div class="relative left-1/2 w-screen -translate-x-1/2">
              <EndlessLoop :slides="gallerySlides" />
            </div>
          </slot>
        </section>
      </slot>
    </div>

    <Cta />

    <RelatedProjects
      v-if="$slots.related"
      :title="relatedTitle"
      :title-id="`${headingId}-related-projects-title`"
      title-class="text-2xl font-bold tracking-tight text-white md:text-3xl"
    >
      <slot name="related" />
    </RelatedProjects>

    <RelatedProjects
      v-else-if="relatedProjects.length"
      :title="relatedTitle"
      :title-id="`${headingId}-related-projects-title`"
      title-class="text-2xl font-bold tracking-tight text-white md:text-3xl"
      :projects="relatedProjects"
    />
  </article>
</template>

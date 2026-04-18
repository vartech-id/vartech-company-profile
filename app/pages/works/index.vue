<script setup>
const works = [
  {
    title: "Nhpv Interactive Journey",
    company: "Ngobrolinhpv.com",
    image: "/works/journey-nhpv.png",
    href: "/works/nhpv-journey",
  },
  {
    title: "Nhpv Quiz",
    company: "Ngobrolinhpv.com",
    image: "/works/quiz-nhpv.png",
    href: "/works/quiz-nhpv",
  },
  {
    title: "Realtime Photobooth",
    company: "Allianz",
    image: "/works/realtime-photobooth.png",
    href: "/works/realtime-photobooth-allianz",
  },
  {
    title: "Scream Game",
    company: "Indomaret",
    image: "/works/realtime-photobooth.png",
    href: "/works/indomaret-Scream",
  },
  {
    title: "Beauty Photobooth (Before After)",
    company: "Blackmores",
    image: "/works/realtime-photobooth.png",
    href: "/works/beforeafter-blackmores",
  },
  {
    title: "Scrabble Game",
    company: "FIF",
    image: "/works/realtime-photobooth.png",
    href: "/works/scrabble-game-fif",
  },
  {
    title: "Photobooth Vaccine Label",
    company: "Qdenga",
    image: "/works/realtime-photobooth.png",
    href: "/works/vaccine-photobooth-qdenga",
  },
  {
    title: "Presentation App",
    company: "Qdenga",
    image: "/works/realtime-photobooth.png",
    href: "/works/presentation-qdenga",
  },
  {
    title: "Digital Information",
    company: "Ngobrolinhpv.com",
    image: "/works/realtime-photobooth.png",
    href: "/works/digital-information-nhpv",
  },
];
</script>

<template>
  <main class="bg-black px-4 py-8 text-zinc-100">
    <section aria-labelledby="works-title" class="mx-auto w-full max-w-[90rem]">
      <h1
        id="works-title"
        class="mb-8 text-center text-3xl font-bold text-white md:text-4xl"
      >
        Works
      </h1>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(work, index) in works"
          :key="`${work.href}-${index}`"
          :to="work.href"
          :aria-label="`View project ${work.title} by ${work.company}`"
          class="group block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <article
            class="flex h-full flex-col overflow-hidden border border-zinc-800 bg-zinc-900/70 shadow-sm transition duration-150 ease-in-out group-hover:border-zinc-600 group-hover:bg-zinc-900 group-hover:shadow-lg group-hover:shadow-black/20 group-focus-visible:border-zinc-500 group-focus-visible:bg-zinc-900 group-focus-visible:shadow-lg group-focus-visible:shadow-black/20 motion-reduce:transition-none"
          >
            <div
              class="aspect-16/10 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950"
            >
              <NuxtImg
                :src="work.image"
                :alt="`Preview image for ${work.title} by ${work.company}`"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="flex flex-1 flex-col p-4">
              <h2 class="text-lg font-bold leading-snug text-white">
                {{ work.title }}
              </h2>
              <p class="mt-1 text-sm leading-6 text-zinc-300">
                {{ work.company }}
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

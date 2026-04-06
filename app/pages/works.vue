<script setup>
const works = [
  {
    title: "NHPV Interactive Journey",
    company: "Ngobrolinhpv.com",
    image: "/works/journey-nhpv.png",
    href: "/work-pages/nhpv-journey-quiz",
  },
  {
    title: "Quiz NHPV",
    company: "Ngobrolinhpv.com",
    image: "/works/quiz-nhpv.png",
    href: "/work-pages/quiz-nhpv",
  },
  {
    title: "Realtime Photobooth",
    company: "Vartech",
    image: "/works/realtime-photobooth.png",
    href: "/work-pages/realtime-photobooth",
  },

  {
    title: "NHPV Interactive Journey",
    company: "Ngobrolinhpv.com",
    image: "/works/journey-nhpv.png",
    href: "/work-pages/nhpv-journey-quiz",
  },
  {
    title: "Quiz NHPV",
    company: "Ngobrolinhpv.com",
    image: "/works/quiz-nhpv.png",
    href: "/work-pages/quiz-nhpv",
  },
  {
    title: "Realtime Photobooth",
    company: "Vartech",
    image: "/works/realtime-photobooth.png",
    href: "/work-pages/realtime-photobooth",
  },

    {
    title: "NHPV Interactive Journey",
    company: "Ngobrolinhpv.com",
    image: "/works/journey-nhpv.png",
    href: "/work-pages/nhpv-journey-quiz",
  },
  {
    title: "Quiz NHPV",
    company: "Ngobrolinhpv.com",
    image: "/works/quiz-nhpv.png",
    href: "/work-pages/quiz-nhpv",
  },
  {
    title: "Realtime Photobooth",
    company: "Vartech",
    image: "/works/realtime-photobooth.png",
    href: "/work-pages/realtime-photobooth",
  },
];
</script>

<template>
  <main class="px-4 py-8">
    <section class="mx-auto w-full max-w-7xl">
      <h1 class="mb-6 text-3xl font-bold md:text-4xl text-center">Works</h1>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="work in works"
          :key="work.href"
          :to="work.href"
          class="block h-full"
        >
          <article
            class="flex h-full flex-col overflow-hidden rounded-lg  border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div class="aspect-16/10 w-full overflow-hidden">
              <NuxtImg
                :src="work.image"
                :alt="work.title"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="flex flex-1 flex-col p-4">
              <h2 class="text-lg font-bold text-slate-900">
                {{ work.title }}
              </h2>
              <p class="mt-1 text-sm text-slate-600">
                {{ work.company }}
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

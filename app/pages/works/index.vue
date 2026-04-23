<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle = "Works | Vartech.id - Event Technology Case Studies";
const seoDescription =
  "See Vartech.id work across event registration systems, AI photobooths, interactive games, digital signage, and brand activation technology.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/works",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-works",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Works", path: "/works" },
      ]),
    ),
  ],
});

const works = [
  {
    title: "Interactive Journey",
    company: "Ngobrolinhpv.com",
    image: "/works/journey-nhpv.png",
    href: "/works/nhpv-journey",
  },
  {
    title: "Educational Quiz",
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
  <section aria-labelledby="works-title" class="bg-black px-4 py-8 text-zinc-100 mx-auto w-full max-w-[90rem]">
      <h1
        id="works-title"
        class="mb-8 text-center text-3xl font-bold text-white md:text-4xl"
      >
        Works
      </h1>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardItem
          v-for="(work, index) in works"
          :key="`${work.href}-${index}`"
          :title="work.title"
          :subtitle="work.company"
          :image="work.image"
          :href="work.href"
        />
      </div>
  </section>
</template>

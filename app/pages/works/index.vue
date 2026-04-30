<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";
import { works } from "~/data/works";

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

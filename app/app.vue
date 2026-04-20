<script setup>
import { withSiteUrl } from "~/composables/useSiteSeo";

const route = useRoute();

useHead(() => ({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      key: "canonical",
      rel: "canonical",
      href: withSiteUrl(route.path),
    },
  ],
}));
</script>

<template>
  <div class="min-h-svh bg-black  text-white overflow-x-hidden flex flex-col ">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <AppHeader />
    <main
      id="main-content"
      tabindex="-1"
      class="flex-1 pt-20 md:flex md:justify-center mb-10"
    >
      <NuxtPage />
    </main>
    <AppFooter />
    <FloatingWhatAppButton />
  </div>
</template>

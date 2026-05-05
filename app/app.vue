<script setup>
import { getFullUrl, SITE_LOGO } from "~/composables/useSiteSeo";

const route = useRoute();
const homepageUrl = getFullUrl("/");

useHead(() => ({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      key: "canonical",
      rel: "canonical",
      href: getFullUrl(route.path),
    },
  ],
  script: [
    {
      key: "schema-organization",
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Vartech.id",
        url: homepageUrl,
        logo: SITE_LOGO,
        description:
          "Vartech.id builds custom event technology, AI photobooths, registration systems, interactive games, and live brand activation experiences.",
        telephone: "+6285792190233",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Kepa Duri Mas, Duri Kepa",
          addressLocality: "Kec. Kb. Jeruk, Kota Jakarta Barat",
          addressRegion: "Daerah Khusus Ibukota Jakarta",
          postalCode: "11510",
          addressCountry: "ID",
        },
        sameAs: ["https://www.instagram.com/vartech_idn"],
      }),
    },
    {
      key: "schema-website",
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Vartech.id",
        url: homepageUrl,
      }),
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
    <LazyFloatingWhatAppButton />
  </div>
</template>

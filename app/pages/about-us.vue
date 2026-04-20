<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle = "About Vartech.id | Custom Event Technology Team";
const seoDescription =
  "Learn about Vartech.id, a custom event technology team building registration systems, photobooth software, interactive experiences, and digital solutions.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/about-us",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-about",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
      ]),
    ),
  ],
});
</script>
<template>
    <h1>about us</h1>
</template>

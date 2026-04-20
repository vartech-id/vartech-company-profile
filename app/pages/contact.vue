<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle = "Contact Vartech.id | Discuss Custom Event Technology";
const seoDescription =
  "Contact Vartech.id to discuss custom event registration systems, AI photobooths, interactive games, and digital brand activation projects.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/contact",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-contact",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ),
  ],
});
</script>

<template>
    <h1>Contact</h1>
</template>

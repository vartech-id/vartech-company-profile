<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";
import { companyData } from "~/data/company";

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
  <article class="flex items-center justify-center w-11/12 xl:max-w-350 mx-auto">
    <Form
      :heading="['Share your ideas', 'Let\'s make them real !']" 
      :address="companyData.address"
      :emails="companyData.emails"
      :phones="companyData.phones"
      :socials="companyData.socials"
    />
  </article>
</template>

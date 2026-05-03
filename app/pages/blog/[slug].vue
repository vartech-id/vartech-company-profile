<script setup>
import {
  SITE_LOGO,
  SITE_NAME,
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
  getFullUrl,
} from "~/composables/useSiteSeo";

const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection("blog").path(`/blog/${slug}`).first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

const postPath = post.value.path || `/blog/${slug}`;
const postUrl = getFullUrl(postPath);
const postImage = getFullUrl(post.value.image);
const postTitle = `${post.value.title} | ${SITE_NAME}`;
const datePublished = post.value.date;
const dateModified = post.value.updated || post.value.date;

const structuredDataScripts = [
  jsonLdScript(
    "schema-breadcrumb-blog-post",
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.value.title, path: postPath },
    ]),
  ),
  jsonLdScript("schema-blog-post", {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.value.title,
    description: post.value.excerpt,
    image: [postImage],
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getFullUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
  }),
];

if (post.value.faqs?.length) {
  structuredDataScripts.push(
    jsonLdScript("schema-blog-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.value.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }),
  );
}

usePageSeo({
  title: postTitle,
  description: post.value.excerpt,
  path: postPath,
  image: post.value.image,
  type: "article",
  scripts: structuredDataScripts,
});
</script>

<template>
  <BlogPostLayout :post="post" />
</template>

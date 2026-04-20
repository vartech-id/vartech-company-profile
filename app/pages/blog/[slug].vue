<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(slug, () =>
  queryCollection("blog").path(`/blog/${slug}`).first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

useSeoMeta({
  title: `${post.value.title} | Vartech.id`,
  description: post.value.excerpt,
  ogTitle: `${post.value.title} | Vartech.id`,
  ogDescription: post.value.excerpt,
  ogImage: post.value.image,
  ogType: "article",
  ogUrl: `https://vartech.id/blog/${slug}`,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://vartech.id/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://vartech.id/blog" },
          { "@type": "ListItem", position: 3, name: post.value.title, item: `https://vartech.id/blog/${slug}` },
        ],
      }),
    },
  ],
});
</script>

<template>
  <BlogPostLayout :post="post" />
</template>

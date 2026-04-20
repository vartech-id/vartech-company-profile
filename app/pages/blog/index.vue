<script setup>
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
        ],
      }),
    },
  ],
});

useSeoMeta({
  title: "Blog | Vartech.id — Event Tech Insights & Case Studies",
  description: "Explore articles, case studies, and insights on custom event technology, AI photobooths, registration systems, and interactive experiences by Vartech.id.",
  robots: "index,follow",
  ogTitle: "Blog | Vartech.id — Event Tech Insights & Case Studies",
  ogDescription: "Explore articles, case studies, and insights on custom event technology, AI photobooths, registration systems, and interactive experiences by Vartech.id.",
  ogType: "website",
  ogUrl: "https://vartech.id/blog",
});

const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog").order("date", "DESC").all()
);
</script>

<template>
  <section aria-labelledby="blog-title" class="mx-auto w-11/12 max-w-[90rem] py-10">
    <h1 id="blog-title" class="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
      Blog
    </h1>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CardItem
        v-for="(post, index) in posts"
        :key="`${post.path}-${index}`"
        :title="post.title"
        :subtitle="post.subtitle"
        :image="post.image"
        :href="post.path"
        :date="post.date"
        :excerpt="post.excerpt"
        :tags="post.tags"
      />
    </div>
  </section>
</template>

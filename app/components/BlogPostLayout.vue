<script setup>
defineProps({
  post: { type: Object, required: true },
});
</script>

<template>
  <article
    aria-labelledby="blog-post-title"
    class="mx-auto flex w-11/12 max-w-5xl flex-col gap-8 py-10"
  >
    <NuxtLink class="hover:underline" to="/blog">← All posts</NuxtLink>

    <header class="flex flex-col gap-4">
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-400"
        >
          {{ tag }}
        </span>
      </div>

      <h1
        id="blog-post-title"
        class="text-3xl font-bold text-white md:text-4xl"
      >
        {{ post.title }}
      </h1>

      <p class="text-sm text-zinc-500">{{ formatPostDate(post.date) }}</p>

      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="aspect-16/9 w-full object-cover"
      />
    </header>

    <div class="blog-content">
      <ContentRenderer :value="post" />
    </div>

    <FaqSection
      v-if="post.faqs?.length"
      id="blog-faqs"
      title="Frequently Asked Questions"
      title-class="text-left text-2xl font-bold text-white md:text-3xl"
      :items="post.faqs"
    />
  </article>
</template>

<style scoped>
.blog-content {
  max-width: none;
  color: rgb(212 212 216);
  font-size: 1rem;
  line-height: 1.75;
}

.blog-content :deep(*) {
  overflow-wrap: break-word;
}

.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4) {
  color: white;
  font-weight: 700;
  line-height: 1.25;
}

.blog-content :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.6rem;
}

.blog-content :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.blog-content :deep(p),
.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  padding-left: 1.5rem;
}

.blog-content :deep(ul) {
  list-style-type: disc;
}

.blog-content :deep(ol) {
  list-style-type: decimal;
}

.blog-content :deep(li) {
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}

.blog-content :deep(a) {
  color: white;
  text-decoration: underline;
  text-decoration-color: rgb(161 161 170);
  text-underline-offset: 4px;
}

.blog-content :deep(strong) {
  color: white;
}
</style>

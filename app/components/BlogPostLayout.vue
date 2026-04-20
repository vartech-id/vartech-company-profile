<script setup>
defineProps({
  post: { type: Object, required: true },
});
</script>

<template>
  <article
    aria-labelledby="blog-post-title"
    class="mx-auto flex w-11/12 max-w-3xl flex-col gap-8 py-10"
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

      <p class="text-sm text-zinc-500">{{ post.date }}</p>

      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="aspect-16/9 w-full object-cover"
      />
    </header>

    <div class="prose prose-invert prose-zinc max-w-none">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
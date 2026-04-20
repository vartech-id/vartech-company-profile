<script setup>
defineProps({
  title: String,
  author: String,
  publishAt: String,
  excerpt: String,
  tags: Array,
  imgPath: String,
  content: String,
});
</script>
<template>
  <article class="max-w-6xl flex flex-col gap-2">
    <NuxtLink class="hover:underline" to="/blog">← All posts</NuxtLink>
    <h1 class="text-xl lg:text-4xl font-bold">{{ title }}</h1>
    <p>{{ excerpt }}</p>
    <div class="flex gap-4 text-sm text-zinc-400">
      <p>{{ publishAt }}</p>
      <div class="w-10 h-px bg-zinc-400 self-center"></div>
      <p>4 mins read</p>
    </div>
    <div class="overflow-hidden rounded-lg">
      <NuxtImg :src="imgPath" />
    </div>
    <div v-html="content" />
    <slot> </slot>
  </article>
</template>

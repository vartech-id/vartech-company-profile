<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  image: { type: String, required: true },
  imageAlt: { type: String, default: "" },
  href: { type: String, required: true },
  date: { type: String, default: "" },
  excerpt: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
});
</script>

<template>
  <NuxtLink
    :to="href"
    :aria-label="`View ${title}${subtitle ? ' by ' + subtitle : ''}`"
    class="group block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    <article
      class="flex h-full flex-col overflow-hidden border border-zinc-800 bg-zinc-900/70 shadow-sm transition duration-150 ease-in-out group-hover:border-zinc-600 group-hover:bg-zinc-900 group-hover:shadow-lg group-hover:shadow-black/20 group-focus-visible:border-zinc-500 group-focus-visible:bg-zinc-900 group-focus-visible:shadow-lg group-focus-visible:shadow-black/20 motion-reduce:transition-none"
    >
      <div class="aspect-16/10 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
        <NuxtImg
          :src="image"
          :alt="imageAlt || `Preview image for ${title}`"
          class="h-full w-full object-cover"
          width="800"
          height="500"
          format="webp"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>

      <div class="flex flex-1 flex-col gap-1 p-4">
        <div v-if="tags.length" class="flex flex-wrap gap-2 mb-1">
          <span
            v-for="tag in tags"
            :key="tag"
            class="text-xs border border-zinc-700 px-2 py-0.5 text-zinc-400"
          >{{ tag }}</span>
        </div>
        <h2 class="text-lg font-bold leading-snug text-white">{{ title }}</h2>
        <p v-if="subtitle" class="text-sm leading-6 text-zinc-300">{{ subtitle }}</p>
        <p v-if="excerpt" class="mt-1 text-sm leading-6 text-zinc-400 line-clamp-2">{{ excerpt }}</p>
        <p v-if="date" class="mt-auto pt-2 text-xs text-zinc-500">{{ formatPostDate(date) }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

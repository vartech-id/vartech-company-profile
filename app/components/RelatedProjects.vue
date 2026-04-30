<script setup>
defineProps({
  title: {
    type: String,
    default: "Related Projects",
  },
  titleId: {
    type: String,
    default: "related-projects-title",
  },
  projects: {
    type: Array,
    default: () => [],
  },
  sectionClass: {
    type: String,
    default:
      "mx-auto flex max-w-[100rem] flex-col items-center justify-center gap-6 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8 xl:w-full",
  },
  titleClass: {
    type: String,
    default:
      "text-2xl font-bold uppercase tracking-wide text-white md:text-3xl",
  },
  listClass: {
    type: String,
    default: "grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3",
  },
});
</script>

<template>
  <section
    v-if="$slots.default || projects.length"
    :aria-labelledby="titleId"
    :class="sectionClass"
  >
    <h2
      :id="titleId"
      :class="titleClass"
    >
      {{ title }}
    </h2>

    <slot>
      <ul :class="listClass">
        <li
          v-for="(project, index) in projects"
          :key="`${project.href || project.to}-${index}`"
          :class="project.listClass || project.class"
        >
          <NuxtLink
            :to="project.href || project.to"
            class="block h-full border border-zinc-800 bg-zinc-900/70 p-3 transition duration-150 ease-in-out hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <article class="flex h-full flex-col">
              <figure class="aspect-16/10 overflow-hidden bg-zinc-950">
                <NuxtImg
                  :src="project.image || project.src"
                  :alt="project.alt || `Preview image for ${project.title}`"
                  class="h-full w-full object-cover"
                />
              </figure>
              <h3
                class="mt-3 text-lg font-semibold tracking-tight text-white md:text-xl"
              >
                {{ project.title }}
              </h3>
              <p
                v-if="project.category || project.company"
                class="mt-1 text-sm leading-6 text-zinc-400"
              >
                {{ project.category || project.company }}
              </p>
            </article>
          </NuxtLink>
        </li>
      </ul>
    </slot>
  </section>
</template>

<script setup>
const props = defineProps({
  id: { type: String, default: "faqs" },
  title: { type: String, default: "FAQs" },
  titleClass: {
    type: String,
    default: "text-center text-3xl font-bold sm:text-4xl lg:text-5xl",
  },
  description: { type: String, default: "" },
  items: { type: Array, default: () => [] },
});

const activeFaqs = ref([]);

const sectionTitleId = computed(() => `${props.id}-title`);

const getItemKey = (item, index) => item.id ?? index + 1;

const getIdSegment = (item, index) => {
  const rawSegment = String(getItemKey(item, index));
  const safeSegment = rawSegment
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return safeSegment || `item-${index + 1}`;
};

const getTriggerId = (item, index) =>
  `${props.id}-trigger-${getIdSegment(item, index)}`;

const getPanelId = (item, index) =>
  `${props.id}-panel-${getIdSegment(item, index)}`;

const toggleSection = (id) => {
  if (activeFaqs.value.includes(id)) {
    activeFaqs.value = activeFaqs.value.filter((faqId) => faqId !== id);
    return;
  }

  activeFaqs.value = [...activeFaqs.value, id];
};

const isFaqOpen = (id) => activeFaqs.value.includes(id);

const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
  el.style.overflow = "hidden";
};

const enter = (el) => {
  requestAnimationFrame(() => {
    el.style.transition = "height 400ms ease, opacity 400ms ease";
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = "1";
  });
};

const afterEnter = (el) => {
  el.style.height = "auto";
  el.style.overflow = "visible";
};

const beforeLeave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = "1";
  el.style.overflow = "hidden";
};

const leave = (el) => {
  void el.offsetHeight;

  requestAnimationFrame(() => {
    el.style.transition = "height 400ms ease, opacity 400ms ease";
    el.style.height = "0";
    el.style.opacity = "0";
  });
};

const afterLeave = (el) => {
  el.style.height = "";
  el.style.opacity = "";
  el.style.transition = "";
  el.style.overflow = "";
};
</script>

<template>
  <section
    :id="id"
    :aria-labelledby="sectionTitleId"
    class="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 sm:w-5/6 md:max-w-2xl lg:max-w-3xl"
  >
    <h2 :id="sectionTitleId" :class="titleClass">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="w-5/6 text-center text-sm md:text-base lg:text-lg"
    >
      {{ description }}
    </p>

    <ul v-if="items.length" class="flex w-full flex-col lg:max-w-6xl">
      <li
        v-for="(item, index) in items"
        :key="getItemKey(item, index)"
        class="flex flex-col border border-gray-700 p-4 md:p-6"
      >
        <h3>
          <button
            :id="getTriggerId(item, index)"
            type="button"
            class="flex w-full cursor-pointer items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-lg font-bold text-current md:text-xl"
            :aria-expanded="isFaqOpen(getItemKey(item, index))"
            :aria-controls="getPanelId(item, index)"
            @click="toggleSection(getItemKey(item, index))"
          >
            <span>{{ item.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(getItemKey(item, index)) },
              ]"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </h3>

        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div
            v-if="isFaqOpen(getItemKey(item, index))"
            :id="getPanelId(item, index)"
            class="overflow-hidden"
            role="region"
            :aria-labelledby="getTriggerId(item, index)"
          >
            <p
              class="py-4 text-sm font-semibold text-gray-400 sm:text-base md:text-lg"
            >
              {{ item.answer }}
            </p>
          </div>
        </Transition>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.faq-toggle {
  cursor: pointer;
  transform: rotate(0deg);
  transform-origin: center;
  transition: transform 240ms ease;
}

.faq-toggle-open {
  transform: rotate(90deg);
}
</style>

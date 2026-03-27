<script setup>
const activeFaqs = ref([]);

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
    id="faqs"
    class="flex sm:w-5/6 md:max-w-2xl flex-col items-center gap-10 border-2 border-emerald-400 max-w-3xl"
  >
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold border-2 text-center">
      FAQs
    </h2>
    <p class="text-center w-5/6 border-2">Answers to common questions about custom event tech, AI photobooths, and brand activation experiences.</p>
    <ul class="flex w-full flex-col lg:max-w-5xl">
      <li class="flex flex-col border border-gray-700 p-4 md:p-6" @click="toggleSection(1)">
        <div class="flex items-start justify-between">
          <h3 class="text-lg font-bold md:text-xl" >
            Do you build custom software and web apps for events in Jakarta and
            beyond?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="['faq-toggle w-10 shrink-0', { 'faq-toggle-open': isFaqOpen(1) }]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-if="isFaqOpen(1)" class="overflow-hidden">
            <p class="py-4 text-sm sm:text-base md:text-l">
              Yes. We build custom software and web apps for events, brand
              activations, and interactive experiences in Jakarta, across
              Indonesia, and for international projects. Our solutions can
              include event registration systems, interactive microsites, event
              dashboards, guest engagement tools, real-time display systems,
              and other custom workflows tailored to each project.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6" @click="toggleSection(2)">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-bold md:text-xl">
            Can you build a custom event registration system with QR code
            check-in?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="['faq-toggle w-10 shrink-0', { 'faq-toggle-open': isFaqOpen(2) }]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-if="isFaqOpen(2)" class="overflow-hidden">
            <p class="py-4 text-sm sm:text-base md:text-l">
              Yes. We develop custom event registration systems with online
              sign-up forms, QR code generation, on-site scanning, attendance
              tracking, admin controls, and reporting dashboards to help event
              operations run smoothly.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6" @click="toggleSection(3)">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-bold md:text-xl">
            Do you develop custom photobooth software for events and brand
            activations?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="['faq-toggle w-10 shrink-0', { 'faq-toggle-open': isFaqOpen(3) }]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-if="isFaqOpen(3)" class="overflow-hidden">
            <p class="py-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Yes. We build custom photobooth software for events and brand
              activations, including camera capture workflows, branded overlays,
              instant sharing, printing, and other interactive features designed
              for a seamless on-site experience.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6" @click="toggleSection(4)">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-bold md:text-xl">
            Can you create AI-powered event experiences such as face swap and
            automated image processing?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="['faq-toggle w-10 shrink-0', { 'faq-toggle-open': isFaqOpen(4) }]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-if="isFaqOpen(4)" class="overflow-hidden">
            <p class="py-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Yes. We can integrate AI-powered features such as face swap, image
              enhancement, and automated image processing to create engaging
              visual experiences for events, campaigns, and branded activations.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6" @click="toggleSection(5)">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-bold md:text-xl">
            Do you build interactive apps and games for audience engagement at
            events?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="['faq-toggle w-10 shrink-0', { 'faq-toggle-open': isFaqOpen(5) }]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-if="isFaqOpen(5)" class="overflow-hidden">
            <p class="py-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Yes. We create interactive apps, mini-games, and gamification
              systems that help brands increase participation, engagement, and
              excitement during events, exhibitions, and promotional campaigns.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6" @click="toggleSection(6)">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-bold md:text-xl">
            Can Vartech handle tight event deadlines for custom app
            development?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            :class="['faq-toggle w-10 shrink-0', { 'faq-toggle-open': isFaqOpen(6) }]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-if="isFaqOpen(6)" class="overflow-hidden">
            <p class="py-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Yes. Even if your deadline is tight, you can still consult with
              us. We will assess the scope, timeline, and technical
              requirements, then recommend the most realistic and effective
              solution for your event or activation.
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

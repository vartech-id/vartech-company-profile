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
    class="flex sm:w-5/6 md:max-w-2xl lg:max-w-3xl flex-col items-center gap-10 max-w-3xl"
  >
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
      FAQs
    </h2>
      <p class="text-sm md:text-base lg:text-lg text-center w-5/6">
      Answers to common questions about custom event tech, AI photobooths, and
      brand activation experiences.
    </p>
    <ul class="flex w-full flex-col lg:max-w-6xl">
      <li class="flex flex-col border border-gray-700 p-4 md:p-6">
        <h3>
          <button
            id="faq-trigger-1"
            type="button"
            class="flex w-full items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-current text-lg font-bold cursor-pointer md:text-xl"
            :aria-expanded="isFaqOpen(1)"
            aria-controls="faq-panel-1"
            @click="toggleSection(1)"
          >
            <span>
              Do you build custom event software, web apps, and digital
              solutions for events, brand activations, and businesses in Jakarta
              and beyond?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(1) },
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
            v-if="isFaqOpen(1)"
            id="faq-panel-1"
            class="overflow-hidden"
            role="region"
            aria-labelledby="faq-trigger-1"
          >
            <p
              class="text-gray-400 font-semibold py-4 text-sm sm:text-base md:text-lg"
            >
              Yes. Vartech builds custom event software, web apps, and digital
              solutions for events, brand activations, and businesses in
              Jakarta, across Indonesia, and for international projects. Our
              services can include custom microsites, admin dashboards, guest
              engagement systems, real-time display integrations, and tailored
              digital workflows designed around the needs of each event or
              campaign.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6">
        <h3>
          <button
            id="faq-trigger-2"
            type="button"
            class="flex w-full items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-current text-lg font-bold cursor-pointer md:text-xl"
            :aria-expanded="isFaqOpen(2)"
            aria-controls="faq-panel-2"
            @click="toggleSection(2)"
          >
            <span>
              Can you create a custom event registration system with online
              registration, QR code check-in, attendance tracking, and reporting
              dashboards?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(2) },
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
            v-if="isFaqOpen(2)"
            id="faq-panel-2"
            class="overflow-hidden"
            role="region"
            aria-labelledby="faq-trigger-2"
          >
            <p
              class="text-gray-400 font-semibold py-4 text-sm sm:text-base md:text-lg"
            >
              Yes. We develop custom event registration systems with online
              sign-up forms, QR code generation, on-site check-in, attendance
              tracking, admin management, and reporting dashboards. These
              systems are designed to help brands, agencies, and event
              organizers manage registration flows more efficiently and create a
              smoother guest experience from pre-event to on-site operations
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6">
        <h3>
          <button
            id="faq-trigger-3"
            type="button"
            class="flex w-full items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-current text-lg font-bold cursor-pointer md:text-xl"
            :aria-expanded="isFaqOpen(3)"
            aria-controls="faq-panel-3"
            @click="toggleSection(3)"
          >
            <span>
              Do you develop custom photobooth software for events, exhibitions,
              corporate activations, and branded customer experiences?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(3) },
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
            v-if="isFaqOpen(3)"
            id="faq-panel-3"
            class="overflow-hidden"
            role="region"
            aria-labelledby="faq-trigger-3"
          >
            <p
              class="text-gray-400 font-semibold py-4 text-sm sm:text-base md:text-lg"
            >
              Yes. We build custom photobooth software for events, exhibitions,
              and brand activations, including camera capture workflows, branded
              overlays, instant sharing, QR-based delivery, printing systems,
              and interactive on-site features. Each photobooth experience can
              be tailored to match the campaign theme, technical setup, and
              customer journey required for the event
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6">
        <h3>
          <button
            id="faq-trigger-4"
            type="button"
            class="flex w-full items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-current text-lg font-bold cursor-pointer md:text-xl"
            :aria-expanded="isFaqOpen(4)"
            aria-controls="faq-panel-4"
            @click="toggleSection(4)"
          >
            <span>
              Can you build AI-powered event experiences such as AI photobooths,
              face swap, image enhancement, and automated photo processing?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(4) },
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
            v-if="isFaqOpen(4)"
            id="faq-panel-4"
            class="overflow-hidden"
            role="region"
            aria-labelledby="faq-trigger-4"
          >
            <p
              class="text-gray-400 font-semibold py-4 text-sm sm:text-base md:text-lg"
            >
              Yes. We can integrate AI-powered features such as AI photobooths,
              face swap, automated image enhancement, themed image generation,
              and custom photo processing workflows. These solutions are ideal
              for brands and event organizers who want more engaging visual
              experiences, higher shareability, and a more memorable digital
              activation for their audience.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6">
        <h3>
          <button
            id="faq-trigger-5"
            type="button"
            class="flex w-full items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-current text-lg font-bold cursor-pointer md:text-xl"
            :aria-expanded="isFaqOpen(5)"
            aria-controls="faq-panel-5"
            @click="toggleSection(5)"
          >
            <span>
              Do you create interactive games, custom event apps, and audience
              engagement tools for exhibitions, launches, and brand campaigns?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(5) },
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
            v-if="isFaqOpen(5)"
            id="faq-panel-5"
            class="overflow-hidden"
            role="region"
            aria-labelledby="faq-trigger-5"
          >
            <p
              class="text-gray-400 font-semibold py-4 text-sm sm:text-base md:text-lg"
            >
              Yes. We create interactive games, custom event apps, and audience
              engagement tools for exhibitions, product launches, roadshows, and
              brand campaigns. Our solutions can include quizzes, gamification
              systems, leaderboards, interactive touch experiences, and other
              participation-driven mechanics that help increase engagement,
              booth traffic, and memorable brand interaction during events.
            </p>
          </div>
        </Transition>
      </li>
      <li class="flex flex-col border border-gray-700 p-4 md:p-6">
        <h3>
          <button
            id="faq-trigger-6"
            type="button"
            class="flex w-full items-start justify-between gap-4 border-0 bg-transparent p-0 text-left text-current text-lg font-bold cursor-pointer md:text-xl"
            :aria-expanded="isFaqOpen(6)"
            aria-controls="faq-panel-6"
            @click="toggleSection(6)"
          >
            <span>
              Can Vartech handle urgent timelines and fast-turnaround custom app
              development for events with tight technical and production
              deadlines?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="[
                'faq-toggle w-10 shrink-0',
                { 'faq-toggle-open': isFaqOpen(6) },
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
            v-if="isFaqOpen(6)"
            id="faq-panel-6"
            class="overflow-hidden"
            role="region"
            aria-labelledby="faq-trigger-6"
          >
            <p
              class="text-gray-400 font-semibold py-4 text-sm sm:text-base md:text-lg"
            >
              Yes. We understand that event production often moves fast. If your
              project has a tight deadline, we can review the scope, timeline,
              technical requirements, and on-site needs, then recommend the most
              realistic solution to deliver within the available time. The goal
              is to help you launch a stable and effective custom event system
              without overcomplicating the production process.
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

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";
import { getRelatedProjects } from "~/data/related-projects";

const seoTitle =
  "AI Photobooth | Vartech.id - Face Swap, AI Photo Generation & Event Image Automation";
const seoDescription =
  "Create interactive AI photobooth experiences for events with face swap, AI image generation, themed photo transformation, branded overlays, QR download, email delivery, and print-ready output.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/services/ai-photobooth",
  image: "/services/ai-photobooth/card-cover.webp",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-ai-photobooth",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        {
          name: "AI Photobooth & Image Automation",
          path: "/services/ai-photobooth",
        },
      ]),
    ),
  ],
});

const beforeAfterImages = [
  {
    name: "original",
    src: "/services/ai-photobooth/before-ai.webp",
    alt: "Original guest photo before AI photobooth transformation",
  },
  {
    name: "ai",
    src: "/services/ai-photobooth/after-ai.webp",
    alt: "AI photobooth result after face swap and themed image generation",
  },
];

const carouselAssets = [
  {
    image: "/services/ai-photobooth/carousel-assets/journey-1.webp",
    alt: "AI photobooth result with futuristic theme, face transformation, and branded event visual output",
    caption: "Futuristic AI Photo Transformation",
  },
  {
    image: "/services/ai-photobooth/carousel-assets/journey-2.webp",
    alt: "Guest holding a printed AI photobooth result with custom event branding and campaign design",
    caption: "Branded AI Photobooth Print",
  },
  {
    image: "/services/ai-photobooth/carousel-assets/journey-3.webp",
    alt: "AI-generated portrait result created from guest photo using themed image automation for events",
    caption: "Personalized AI Portrait Generation",
  },
  {
    image: "/services/ai-photobooth/carousel-assets/journey-4.webp",
    alt: "Corporate event AI photobooth output with custom campaign frame and branded photo design",
    caption: "Corporate Event Photo Activation",
  },
  {
    image: "/services/ai-photobooth/carousel-assets/journey-5.webp",
    alt: "Original guest capture used as the source image for AI photobooth face swap and transformation",
    caption: "Original Guest Capture",
  },
  {
    image: "/services/ai-photobooth/carousel-assets/journey-6.webp",
    alt: "Themed AI photobooth photo card with event branding, decorative background, and shareable visual output",
    caption: "Themed Shareable Photo Result",
  },
];

const relatedProjects = getRelatedProjects("/services/ai-photobooth");

const compareSectionRef = ref(null);
const carouselSectionRef = ref(null);
const shouldLoadCompare = ref(false);
const shouldLoadCarousel = ref(false);
const deferredObservers = [];

const observeDeferredSection = (sectionRef, loadState) => {
  onMounted(() => {
    const section = sectionRef.value;

    if (!section || !("IntersectionObserver" in window)) {
      loadState.value = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        loadState.value = true;
        observer.disconnect();
      },
      {
        rootMargin: "360px 0px",
      },
    );

    observer.observe(section);
    deferredObservers.push(observer);
  });
};

observeDeferredSection(compareSectionRef, shouldLoadCompare);
observeDeferredSection(carouselSectionRef, shouldLoadCarousel);

onBeforeUnmount(() => {
  deferredObservers.forEach((observer) => observer.disconnect());
});
</script>

<template>
  <article
    aria-labelledby="registration-system-title"
    class="bg-black pt-10 text-zinc-100 mx-auto flex w-11/12 flex-col items-center gap-20"
  >
    <header>
      <h1
        id="registration-system-title"
        class="text-center text-4xl font-bold uppercase tracking-wide text-white md:text-5xl"
      >
        AI PHOTOBOOTH
      </h1>
    </header>

    <!-- HERO -->
    <section
      aria-labelledby="overview-title"
      class="mx-auto grid max-w-[90rem] gap-8 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8 lg:grid-cols-2"
    >
      <div
        class="flex h-full w-full flex-1 overflow-hidden border border-zinc-800 bg-zinc-900"
      >
        <NuxtImg
          src="/services/ai-photobooth/card-cover.webp"
          alt="AI photobooth experience for events with face swap, themed image generation, QR download, and branded photo output"
          class="h-full w-full object-cover"
          width="1800"
          height="1200"
          sizes="90vw lg:640px"
          densities="1"
          quality="72"
          format="webp"
          decoding="async"
          fetchpriority="high"
          preload
        />
      </div>

      <div class="flex flex-col gap-5">
        <h2
          id="overview-title"
          class="max-w-xs text-2xl font-semibold leading-tight text-white md:max-w-md md:text-3xl"
        >
          Interactive AI Photobooth for Branded Event Experiences
        </h2>

        <p class="text-sm leading-7 text-zinc-300 md:text-base">
          Vartech.id builds custom AI photobooth experiences for corporate
          events, brand activations, exhibitions, weddings, and private events.
          From guest photo capture, face swap, AI image generation, themed photo
          transformation, branded overlays, QR download, email delivery, and
          print-ready output, every workflow is designed to create a memorable
          and shareable event experience.
        </p>

        <ul
          aria-label="Registration system highlights"
          class="flex w-5/6 flex-col gap-4 sm:w-full lg:max-w-xs"
        >
          <li>
            <div class="flex items-start gap-3">
              <span
                aria-hidden="true"
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-white"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-4 w-4"
                >
                  <path
                    d="M5 12.5l4 4L19 7"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p class="text-sm leading-6 text-zinc-200 md:text-base">
                AI face swap and themed photo generation for personalized event
                content
              </p>
            </div>
          </li>

          <li>
            <div class="flex items-start gap-3">
              <span
                aria-hidden="true"
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-white"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-4 w-4"
                >
                  <path
                    d="M5 12.5l4 4L19 7"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p class="text-sm leading-6 text-zinc-200 md:text-base">
                Custom themes, templates, and branded overlays aligned with your
                campaign
              </p>
            </div>
          </li>

          <li>
            <div class="flex items-start gap-3">
              <span
                aria-hidden="true"
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-white"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-4 w-4"
                >
                  <path
                    d="M5 12.5l4 4L19 7"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p class="text-sm leading-6 text-zinc-200 md:text-base">
                Instant QR download, email delivery, and digital sharing flow
                for guests
              </p>
            </div>
          </li>

          <li>
            <div class="flex items-start gap-3">
              <span
                aria-hidden="true"
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-white"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-4 w-4"
                >
                  <path
                    d="M5 12.5l4 4L19 7"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p class="text-sm leading-6 text-zinc-200 md:text-base">
                Print-ready AI photo output optimized for fast on-site event
                production
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- KEY FEATURES -->
    <section
      aria-labelledby="key-features-title"
      class="flex w-full flex-col items-center justify-center gap-8 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8 xl:flex-row"
    >
      <div class="flex flex-col items-center gap-8">
        <h2
          id="key-features-title"
          class="text-2xl font-bold uppercase tracking-wide text-white md:text-3xl"
        >
          Key Features
        </h2>

        <ul class="grid gap-5 md:grid-cols-2">
          <li>
            <article
              class="flex h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div class="flex min-w-20 items-center text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-100"
                  aria-hidden="true"
                >
                  <rect x="4" y="3" width="16" height="18" rx="3" />
                  <rect x="7" y="6" width="10" height="7" rx="1.5" />
                  <circle cx="12" cy="16.5" r="1.2" />
                  <path d="M9 9h6" />
                  <path d="M10 11.2h4" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug text-white md:text-xl"
                >
                  Smart Guest Capture Flow
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Create a guided photo session with live preview, countdown,
                  retake option, and touch-friendly interaction so guests can
                  capture the best source photo before AI processing begins.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article
              class="flex h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div class="flex min-w-20 items-center text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect
                    x="10"
                    y="12"
                    width="44"
                    height="30"
                    rx="6"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                  <path
                    d="M20 48h24"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M32 42v6"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18 34l8-8 6 5 12-12"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="18" cy="34" r="2" fill="currentColor" />
                  <circle cx="26" cy="26" r="2" fill="currentColor" />
                  <circle cx="32" cy="31" r="2" fill="currentColor" />
                  <circle cx="44" cy="19" r="2" fill="currentColor" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug text-white md:text-xl"
                >
                  AI Face Swap & Image Generation
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Transform guest photos into custom AI portraits, campaign
                  characters, cinematic themes, fantasy visuals, or branded
                  story-based images while keeping the result personal and
                  event-ready.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article
              class="flex h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div class="flex min-w-20 items-center text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M10 30 52 12 40 52 30 36 10 30Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M52 12 30 36"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M24 42l6-6"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug text-white md:text-xl"
                >
                  Branded Theme & Overlay System
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Apply custom campaign visuals, event frames, product branding,
                  sponsor logos, themed backgrounds, and final layouts
                  automatically to every AI photobooth result.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article
              class="flex h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div class="flex min-w-20 items-center text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-100"
                  aria-hidden="true"
                >
                  <path d="M12 3v11" />
                  <path d="M8 10l4 4 4-4" />
                  <rect x="4" y="17" width="16" height="3" rx="1.5" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug text-white md:text-xl"
                >
                  QR Download & Email Delivery
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Let guests access their AI photo instantly through a QR code,
                  email link, or digital download page, making the result easy
                  to save, share, and post on social media.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article
              class="flex h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div class="flex min-w-20 items-center text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M12 34a20 20 0 0 1 40 0"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <rect
                    x="10"
                    y="32"
                    width="10"
                    height="16"
                    rx="4"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                  <rect
                    x="44"
                    y="32"
                    width="10"
                    height="16"
                    rx="4"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                  <path
                    d="M44 48c0 4-3 6-7 6h-3"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <circle cx="30" cy="54" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug text-white md:text-xl"
                >
                  On-site AI Event Operation
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Support live event execution with booth setup, camera flow,
                  AI processing monitoring, guest assistance, troubleshooting,
                  and operational control during the event.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article
              class="flex h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div class="flex min-w-20 items-center text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M20 10h18l10 10v30a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38 10v10h10"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 30h16"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M24 38h16"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M24 46h10"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-lg font-semibold leading-snug text-white md:text-xl"
                >
                  Print-ready Branded Output
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Generate high-quality AI photo results with layouts prepared
                  for instant printing, event souvenirs, brand activations,
                  product campaigns, and premium guest takeaways.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <div
        ref="compareSectionRef"
        class="w-full max-w-2xl overflow-hidden border border-zinc-800 bg-zinc-900/70 p-2"
      >
        <ClientOnly>
          <LazyBeforeAfter
            v-if="shouldLoadCompare"
            hydrate-on-visible
            :before-image="beforeAfterImages[0].src"
            :after-image="beforeAfterImages[1].src"
          />
          <div
            v-else
            class="aspect-[4/3] w-full bg-zinc-950"
            aria-hidden="true"
          ></div>
          <template #fallback>
            <div
              class="aspect-[4/3] w-full bg-zinc-950"
              aria-hidden="true"
            ></div>
          </template>
        </ClientOnly>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section
      id="how-it-works"
      class="flex w-full flex-col items-center gap-8 border border-zinc-800 bg-zinc-950/80 p-6 md:p-8"
    >
      <h2
        class="text-2xl font-bold uppercase tracking-wide text-white md:text-3xl"
      >
        How AI Photobooth Works
      </h2>

      <div class="flex flex-col gap-6 md:flex-row">
        <div class="max-w-sm flex-1 border border-zinc-800 bg-zinc-900/70 p-4">
          <div class="overflow-hidden border border-zinc-800">
            <NuxtImg
              src="/services/ai-photobooth/how-it-works/step-1.webp"
              alt="Guest taking a source photo for AI photobooth face swap and image generation"
              class="w-full object-cover"
              width="900"
              height="600"
              sizes="90vw md:30vw lg:384px"
              densities="1"
              quality="74"
              format="webp"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="py-3 text-center text-2xl font-bold text-white">
            Capture the Guest Photo
          </h3>
          <p class="leading-7 text-zinc-300">
            Guests start by taking a clear source photo through the photobooth
            camera or assisted capture setup. This photo becomes the base for
            the AI transformation, face swap, themed portrait, or campaign-based
            visual output.
          </p>
        </div>

        <div class="max-w-sm flex-1 border border-zinc-800 bg-zinc-900/70 p-4">
          <div class="overflow-hidden border border-zinc-800">
            <NuxtImg
              src="/services/ai-photobooth/how-it-works/step-2.webp"
              alt="AI photobooth processing guest photo into a themed branded image result"
              class="w-full object-cover"
              width="900"
              height="600"
              sizes="90vw md:30vw lg:384px"
              densities="1"
              quality="74"
              format="webp"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="py-3 text-center text-2xl font-bold text-white">
            Generate the AI Result
          </h3>
          <p class="leading-7 text-zinc-300">
            The system processes the guest photo using AI image automation based
            on the selected theme, character, product concept, or brand
            campaign. The final result can include face swap, background
            transformation, cinematic styling, and branded overlay design.
          </p>
        </div>

        <div class="max-w-sm flex-1 border border-zinc-800 bg-zinc-900/70 p-4">
          <div class="overflow-hidden border border-zinc-800">
            <NuxtImg
              src="/services/ai-photobooth/how-it-works/step-3.webp"
              alt="Guest downloading and sharing an AI photobooth result through QR code and email delivery"
              class="w-full object-cover"
              width="900"
              height="600"
              sizes="90vw md:30vw lg:384px"
              densities="1"
              quality="74"
              format="webp"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="py-3 text-center text-2xl font-bold text-white">
            Download, Share, or Print
          </h3>
          <p class="leading-7 text-zinc-300">
            Once the AI photo is ready, guests can download it through QR code,
            receive it by email, share it digitally, or print it on-site as a
            branded souvenir. This makes the AI photobooth experience fast,
            interactive, and memorable.
          </p>
        </div>
      </div>
    </section>

    <!-- ENDLESS LOOP -->
    <section
      ref="carouselSectionRef"
      class="flex min-h-[20rem] w-full flex-col items-center p-4"
    >
      <LazyEndlessLoop
        v-if="shouldLoadCarousel"
        hydrate-on-visible
        :slides="carouselAssets"
      />
      <div
        v-else
        class="h-72 w-full max-w-sm border border-zinc-800 bg-zinc-950"
        aria-hidden="true"
      ></div>
    </section>

    <Cta />
    <RelatedProjects
      :projects="relatedProjects"
      section-class="mx-auto flex max-w-[100rem] flex-col items-center justify-center gap-6 border border-zinc-800 bg-zinc-950/80 p-6 md:p-8"
    />
  </article>
</template>

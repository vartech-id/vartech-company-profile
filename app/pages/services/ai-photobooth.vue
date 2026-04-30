<script setup>
import ImageSwiper from "~/components/ImageSwiper.vue";
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle = "AI Photobooth | Vartech.id - AI Image Automation for Events";
const seoDescription =
  "Build AI photobooth experiences with face swap, themed image generation, automated photo processing, QR delivery, and branded event output.";

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
    alt: "before ai photo",
  },
  {
    name: "ai",
    src: "/services/ai-photobooth/after-ai.webp",
    alt: "after ai photo",
  },
];

const imagesAsset = [
  {
    name: "Blackmores",
    src: "/photobooth-ui/blackmores-1.webp",
    alt: "Journey NHPV preview",
  },
  {
    name: "Journey NHPV",
    src: "/photobooth-ui/blackmores-2.webp",
    alt: "Journey NHPV preview",
  },
];

const carouselAssets = [
  {
    image: "/services/ai-photobooth/card-cover.webp",
    alt: "AI Photobooth Event",
    caption: "AI Photobooth Event",
  },
  {
    image: "/services/ai-photobooth/after-ai.webp",
    alt: "AI Generation Result",
    caption: "AI Generation Result",
  },
  {
    image: "/services/ai-photobooth/before-ai.webp",
    alt: "Original Capture",
    caption: "Original Capture",
  },
];
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
          alt="Guests using a QR-based registration system during an event check-in"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-5">
        <h2
          id="overview-title"
          class="max-w-xs text-2xl font-semibold leading-tight text-white md:max-w-md md:text-3xl"
        >
          Premium Photobooth Experience
        </h2>

        <p class="text-sm leading-7 text-zinc-300 md:text-base">
          From camera capture and branded overlays to instant delivery and
          on-site printing, we develop custom photobooth workflows designed for
          events, brand activations, and a smooth guest experience.
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
                DSLR or webcam capture workflow tailored for your event
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
                Branded overlays and templates aligned with campaign visuals
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
                Instant photo delivery via QR, email, or sharing station
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
                On-site printing designed for fast and reliable guest output
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
                  Camera Capture Workflow
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Build a custom capture flow with countdown, live preview,
                  retake options, and smooth guest interaction from start to
                  finish.
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
                  Branded Overlay System
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Apply custom frames, campaign graphics, and branded layouts
                  automatically to every photo output.
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
                  Instant Photo Delivery
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Deliver final photos instantly through QR code, email, or
                  digital sharing flow for a faster guest experience.
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
                  Sharing and Download Flow
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Create a seamless post-capture flow for downloading, sharing,
                  and accessing branded photo results.
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
                  On-site Technical Support
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Support live event operations with on-site setup,
                  troubleshooting, and workflow monitoring when needed.
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
                  Print-ready Output
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Prepare final photo outputs for instant printing with layouts
                  optimized for quality, speed, and reliable event production.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <div
        class="w-full max-w-2xl overflow-hidden border border-zinc-800 bg-zinc-900/70 p-2"
      >
        <ClientOnly>
          <BeforeAfter
            :before-image="beforeAfterImages[0].src"
            :after-image="beforeAfterImages[1].src"
          />
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
        How It Works
      </h2>

      <div class="flex flex-col gap-6 md:flex-row">
        <div class="max-w-sm flex-1 border border-zinc-800 bg-zinc-900/70 p-4">
          <div class="overflow-hidden border border-zinc-800">
            <NuxtImg
              src="/services/ai-photobooth/how-it-works/step-1.webp"
              alt="Guests using a QR-based registration system during an event check-in"
              class="w-full object-cover"
            />
          </div>
          <h3 class="py-3 text-center text-2xl font-bold text-white">
            Take a photo
          </h3>
          <p class="leading-7 text-zinc-300">
            Step into the photobooth or be photographed by a professional.
            Capture your moments in high quality, whether you're at a wedding,
            corporate event, or any special gathering.
          </p>
        </div>

        <div class="max-w-sm flex-1 border border-zinc-800 bg-zinc-900/70 p-4">
          <div class="overflow-hidden border border-zinc-800">
            <NuxtImg
              src="/services/ai-photobooth/how-it-works/step-2.webp"
              alt="AI Enhanced Result"
              class="w-full object-cover"
            />
          </div>
          <h3 class="py-3 text-center text-2xl font-bold text-white">
            A.I Magic
          </h3>
          <p class="leading-7 text-zinc-300">
            Watch as our AI technology enhances your photo. Based on your chosen
            theme or design prompt, the AI applies custom overlays, background
            effects, and styling, transforming your image into something
            extraordinary.
          </p>
        </div>

        <div class="max-w-sm flex-1 border border-zinc-800 bg-zinc-900/70 p-4">
          <div class="overflow-hidden border border-zinc-800">
            <NuxtImg
              src="/services/ai-photobooth/how-it-works/step-3.webp"
              alt="Guests using a QR-based registration system during an event check-in"
              class="w-full object-cover"
            />
          </div>
          <h3 class="py-3 text-center text-2xl font-bold text-white">Share</h3>
          <p class="leading-7 text-zinc-300">
            Instantly share your enhanced photo with friends and family. Whether
            via QR code, social media, or email, your personalized photo is
            ready to go, ensuring everyone can enjoy the fun instantly.
          </p>
        </div>
      </div>
    </section>

    <!-- ENDLESS LOOP -->
    <section class="flex w-full flex-col items-center p-4">
      <EndlessLoop :slides="carouselAssets" />
    </section>

    <RelatedProjects
      section-class="mx-auto flex max-w-[100rem] flex-col items-center justify-center gap-6 border border-zinc-800 bg-zinc-950/80 p-6 md:p-8"
    />
  </article>
</template>

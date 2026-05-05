<script setup>
import ImageSwiper from "~/components/ImageSwiper.vue";
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";
import { getRelatedProjects } from "~/data/related-projects";

const seoTitle =
  "Custom Photobooth Development | Vartech.id - Branded Event Photobooth Software";
const seoDescription =
  "Build custom photobooth software for corporate events, brand activations, weddings, and exhibitions with camera capture, branded overlays, QR sharing, instant download, and print-ready workflows.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/services/custom-photobooth",
  image: "/services/custom-photobooth-development/card-cover.webp",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-custom-photobooth",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        {
          name: "Custom Photobooth Development",
          path: "/services/custom-photobooth",
        },
      ]),
    ),
  ],
});

const imagesAsset = [
  {
    name: "Branded Registration UI",
    src: "/services/custom-photobooth-development/key-features/branded-registration-ui.webp",
    alt: "Custom photobooth branded registration interface for event participant data collection",
  },
  {
    name: "Product Selection Screen",
    src: "/services/custom-photobooth-development/key-features/product-selection-screen.webp",
    alt: "Custom photobooth product selection screen for branded event photo experience",
  },
  {
    name: "Interactive Photo Start Modal",
    src: "/services/custom-photobooth-development/key-features/interactive-photo-start-modal.webp",
    alt: "Custom photobooth interactive photo start confirmation modal for gamified event experience",
  },
];

const carouselAssets = [
  {
    image: "/services/custom-photobooth-development/card-cover.webp",
    alt: "Custom photobooth setup for branded event photo activation with camera capture and guest interaction",
    caption: "Custom Event Photobooth System",
  },
  {
    image: "/services/custom-photobooth-development/carousel-assets/label-photobooth.webp",
    alt: "Branded photobooth label and interface design for custom event photo workflow",
    caption: "Branded Photobooth Interface",
  },
  {
    image: "/services/custom-photobooth-development/carousel-assets/result-pb.webp",
    alt: "Final photobooth result with custom event overlay, branded frame, and print-ready output",
    caption: "Print-ready Photobooth Result",
  },
];

const relatedProjects = getRelatedProjects("/services/custom-photobooth");
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
          Custom Photobooth Development
        </h1>
      </header>
      <!-- HERO -->
      <section
        aria-labelledby="overview-title"
        class="mx-auto grid max-w-[90rem] gap-8 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8 lg:grid-cols-2"
      >
        <div class="flex h-full w-full flex-1 overflow-hidden border border-zinc-800 bg-zinc-900">
          <NuxtImg
            src="/services/custom-photobooth-development/card-cover.webp"
            alt="Custom photobooth software for branded events with camera capture, overlay design, QR download, and instant printing"
            class="w-full object-cover"
            fetchpriority="high"
            preload
          />
        </div>

        <div class="flex flex-col gap-5">
          <h2
            id="overview-title"
            class="max-w-xs text-2xl font-semibold leading-tight text-white md:max-w-md md:text-3xl"
          >
            Custom Photobooth Software for Branded Event Experiences
          </h2>

          <p class="text-sm leading-7 text-zinc-300 md:text-base">
            Vartech.id develops custom photobooth systems for corporate events,
            brand activations, exhibitions, weddings, and private events. From
            DSLR or webcam capture, branded photo overlays, custom user
            interfaces, QR download, email delivery, and instant printing, every
            photobooth workflow is built to match your event concept and create
            a smooth guest experience.
          </p>

          <ul
            aria-label="Custom photobooth system highlights"
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
                  Custom DSLR or webcam capture flow tailored to your event
                  setup
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
                  Branded overlays, campaign frames, and custom photo templates
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
                  Instant guest access through QR code, email, or download page
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
                  Print-ready photo output for fast and reliable on-site
                  production
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="key-features-title"
        class="flex w-full flex-col items-center gap-8 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8"
      >
        <h2
          id="key-features-title"
          class="text-2xl font-bold uppercase tracking-wide text-white md:text-3xl"
        >
          Key Features
        </h2>

        <section
          aria-labelledby="digital-invitation-title"
          class="flex flex-col items-center gap-4"
        >
          <h3
            id="digital-invitation-title"
            class="text-xl font-semibold text-white md:text-2xl"
          >
            Custom Photobooth Interface
          </h3>

          <p
            class="max-w-2xl text-center text-sm leading-7 text-zinc-300 md:text-base"
          >
            A custom photobooth interface designed to match your event branding,
            guide guests through each step, and make the photo-taking experience
            feel premium, intuitive, and campaign-ready.
          </p>
          <div class="my-4 w-full border border-zinc-800 bg-zinc-900/70 p-2">
            <ClientOnly>
              <ImageSwiper :images="imagesAsset" />
            </ClientOnly>
          </div>
        </section>

        <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <article class="flex h-full max-w-md border border-zinc-800 bg-zinc-900/70 p-4 rounded-2xl">
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
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  Camera Capture Workflow
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Build a smooth capture flow with live preview, countdown,
                  retake option, camera trigger, and guided guest interaction
                  for DSLR, webcam, or event camera setups.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article class="flex h-full max-w-md border border-zinc-800 bg-zinc-900/70 p-4 rounded-2xl">
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
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  Branded Overlay System
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Apply branded frames, sponsor logos, campaign visuals, event
                  themes, and custom photo layouts automatically to every final
                  photobooth result.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article class="flex h-full max-w-md border border-zinc-800 bg-zinc-900/70 p-4 rounded-2xl">
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
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  Instant Photo Delivery
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Deliver final photos instantly through QR code, email link, or
                  a custom download page so guests can save and share their
                  event photos without friction.
                </p>
              </div>
            </article>
          </li>
          <li>
            <article class="flex h-full max-w-md border border-zinc-800 bg-zinc-900/70 p-4 rounded-2xl">
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
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  QR Sharing and Download Flow
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Create a seamless post-capture journey with QR scan, download
                  access, sharing station, email delivery, and branded gallery
                  options for event guests.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article class="flex h-full max-w-md border border-zinc-800 bg-zinc-900/70 p-4 rounded-2xl">
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
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  On-site Technical Support
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Support live event operations with booth setup, camera
                  configuration, workflow monitoring, guest assistance,
                  troubleshooting, and reliable on-site execution.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article class="flex h-full max-w-md border border-zinc-800 bg-zinc-900/70 p-4 rounded-2xl">
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
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  Print-ready Output
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Prepare final photo outputs for instant printing with
                  high-resolution layouts, correct print sizing, branded
                  composition, and production-ready event souvenirs.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <section class="mx-auto flex w-full flex-col items-center p-4">
        <EndlessLoop :slides="carouselAssets" />
      </section>

      <Cta />
      <RelatedProjects :projects="relatedProjects" />
  </article>
</template>
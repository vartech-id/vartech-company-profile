<script setup>
import ImageSwiper from "~/components/ImageSwiper.vue";

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
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
];
</script>

<template>
  <main class="pt-10">
    <article
      aria-labelledby="registration-system-title"
      class="mx-auto flex w-5/6 flex-col gap-20"
    >
      <header>
        <h1
          id="registration-system-title"
          class="text-center text-4xl font-bold uppercase tracking-wide md:text-5xl"
        >
          GAMIFICATION & INTERACTIVE GAMES
        </h1>
      </header>
      <!-- HERO -->
      <section
        aria-labelledby="overview-title"
        class="grid gap-6 lg:grid-cols-2 sm:bg-pink-800 md:bg-red-700 lg:bg-green-800 max-w-[90rem] mx-auto"
      >
        <div class="border-2 w-full h-full flex-1">
          <NuxtImg
            src="/services/regist-example.jpg"
            alt="Guests using a QR-based registration system during an event check-in"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-5">
          <h2
            id="overview-title"
            class="max-w-xs text-2xl font-semibold leading-tight md:max-w-md md:text-3xl"
          >
            Premium Photobooth Experience
          </h2>

          <p class="text-sm leading-7 text-gray-400 md:text-base">
            From camera capture and branded overlays to instant delivery and
            on-site printing, we develop custom photobooth workflows designed
            for events, brand activations, and a smooth guest experience.
          </p>

          <ul
            aria-label="Registration system highlights"
            class="flex w-5/6 flex-col gap-4 sm:w-full lg:max-w-xs"
          >
            <li>
              <div class="flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 shrink-0 rounded-full items-center justify-center bg-gray-400/60 shadow-lg backdrop-blur-md"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
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
                <p class="text-sm leading-6 md:text-base">
                  DSLR or webcam capture workflow tailored for your event
                </p>
              </div>
            </li>

            <li>
              <div class="flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 shrink-0 rounded-full items-center justify-center bg-gray-400/60 shadow-lg backdrop-blur-md"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
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
                <p class="text-sm leading-6 md:text-base">
                  Branded overlays and templates aligned with campaign visuals
                </p>
              </div>
            </li>

            <li>
              <div class="flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 shrink-0 rounded-full items-center justify-center bg-gray-400/60 shadow-lg backdrop-blur-md"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
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
                <p class="text-sm leading-6 md:text-base">
                  Instant photo delivery via QR, email, or sharing station
                </p>
              </div>
            </li>

            <li>
              <div class="flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 shrink-0 rounded-full items-center justify-center bg-gray-400/60 shadow-lg backdrop-blur-md"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
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
                <p class="text-sm leading-6 md:text-base">
                  On-site printing designed for fast and reliable guest output
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- KEY FEATURES -->
      <section aria-labelledby="products" class="">
        <h2 class="text-3xl font-bold text-left">Scrabble Words</h2>
        <div class="flex flex-col border-2 lg:flex-row">
          <div class="flex flex-col items-center gap-8 order-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, numquam? Excepturi eveniet perferendis reiciendis ad
              sapiente. Enim obcaecati natus voluptatum quidem reiciendis porro
              dolorum modi, asperiores, nulla suscipit non temporibus. lore
            </p>
            <ul class="grid gap-5 md:grid-cols-2">
              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-white"
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
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Camera Capture Workflow
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Build a custom capture flow with countdown, live preview,
                      retake options, and smooth guest interaction from start to
                      finish.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
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
                        stroke="white"
                        stroke-width="3"
                      />
                      <path
                        d="M20 48h24"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M32 42v6"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M18 34l8-8 6 5 12-12"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle cx="18" cy="34" r="2" fill="white" />
                      <circle cx="26" cy="26" r="2" fill="white" />
                      <circle cx="32" cy="31" r="2" fill="white" />
                      <circle cx="44" cy="19" r="2" fill="white" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Branded Overlay System
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Apply custom frames, campaign graphics, and branded
                      layouts automatically to every photo output.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M10 30 52 12 40 52 30 36 10 30Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M52 12 30 36"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24 42l6-6"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Instant Photo Delivery
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Deliver final photos instantly through QR code, email, or
                      digital sharing flow for a faster guest experience.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-white"
                      aria-hidden="true"
                    >
                      <path d="M12 3v11" />
                      <path d="M8 10l4 4 4-4" />
                      <rect x="4" y="17" width="16" height="3" rx="1.5" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Sharing and Download Flow
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Create a seamless post-capture flow for downloading,
                      sharing, and accessing branded photo results.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M12 34a20 20 0 0 1 40 0"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <rect
                        x="10"
                        y="32"
                        width="10"
                        height="16"
                        rx="4"
                        stroke="white"
                        stroke-width="3"
                      />
                      <rect
                        x="44"
                        y="32"
                        width="10"
                        height="16"
                        rx="4"
                        stroke="white"
                        stroke-width="3"
                      />
                      <path
                        d="M44 48c0 4-3 6-7 6h-3"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <circle cx="30" cy="54" r="2.5" fill="white" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      On-site Technical Support
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Support live event operations with on-site setup,
                      troubleshooting, and workflow monitoring when needed.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M20 10h18l10 10v30a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38 10v10h10"
                        stroke="white"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 30h16"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24 38h16"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24 46h10"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Print-ready Output
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Prepare final photo outputs for instant printing with
                      layouts optimized for quality, speed, and reliable event
                      production.
                    </p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
          <div class="w-full max-w-2xl">
            <NuxtImg
              src="/services/regist-example.jpg"
              alt="Guests using a QR-based registration system during an event check-in"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 class="text-3xl font-bold text-right">Scream Game</h2>
        <div class="flex flex-col border-2 lg:flex-row">
          <div class="flex flex-col items-center gap-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, numquam? Excepturi eveniet perferendis reiciendis ad
              sapiente. Enim obcaecati natus voluptatum quidem reiciendis porro
              dolorum modi, asperiores, nulla suscipit non temporibus. lore
            </p>
            <ul class="grid gap-5 md:grid-cols-2">
              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-white"
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
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Camera Capture Workflow
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Build a custom capture flow with countdown, live preview,
                      retake options, and smooth guest interaction from start to
                      finish.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
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
                        stroke="white"
                        stroke-width="3"
                      />
                      <path
                        d="M20 48h24"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M32 42v6"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M18 34l8-8 6 5 12-12"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle cx="18" cy="34" r="2" fill="white" />
                      <circle cx="26" cy="26" r="2" fill="white" />
                      <circle cx="32" cy="31" r="2" fill="white" />
                      <circle cx="44" cy="19" r="2" fill="white" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Branded Overlay System
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Apply custom frames, campaign graphics, and branded
                      layouts automatically to every photo output.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M10 30 52 12 40 52 30 36 10 30Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M52 12 30 36"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24 42l6-6"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Instant Photo Delivery
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Deliver final photos instantly through QR code, email, or
                      digital sharing flow for a faster guest experience.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-white"
                      aria-hidden="true"
                    >
                      <path d="M12 3v11" />
                      <path d="M8 10l4 4 4-4" />
                      <rect x="4" y="17" width="16" height="3" rx="1.5" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Sharing and Download Flow
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Create a seamless post-capture flow for downloading,
                      sharing, and accessing branded photo results.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M12 34a20 20 0 0 1 40 0"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <rect
                        x="10"
                        y="32"
                        width="10"
                        height="16"
                        rx="4"
                        stroke="white"
                        stroke-width="3"
                      />
                      <rect
                        x="44"
                        y="32"
                        width="10"
                        height="16"
                        rx="4"
                        stroke="white"
                        stroke-width="3"
                      />
                      <path
                        d="M44 48c0 4-3 6-7 6h-3"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <circle cx="30" cy="54" r="2.5" fill="white" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      On-site Technical Support
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Support live event operations with on-site setup,
                      troubleshooting, and workflow monitoring when needed.
                    </p>
                  </div>
                </article>
              </li>

              <li>
                <article class="flex h-full max-w-md">
                  <div class="flex min-w-20 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M20 10h18l10 10v30a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38 10v10h10"
                        stroke="white"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 30h16"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24 38h16"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24 46h10"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold leading-snug md:text-xl">
                      Print-ready Output
                    </h3>
                    <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                      Prepare final photo outputs for instant printing with
                      layouts optimized for quality, speed, and reliable event
                      production.
                    </p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
          <div class="w-full max-w-2xl">
            <NuxtImg
              src="/services/regist-example.jpg"
              alt="Guests using a QR-based registration system during an event check-in"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- ENDLESS LOOP -->
      <section class="mx-auto w-full flex flex-col items-center">
        <h2 class="text-2xl font-bold uppercase tracking-wide md:text-3xl">
          Our Gallery
        </h2>
        <EndlessLoop :slides="carouselAssets" />
      </section>

      <section
        aria-labelledby="related-projects-title"
        class="flex flex-col items-center justify-center gap-4 max-w-[100rem] mx-auto"
      >
        <h2
          id="related-projects-title"
          class="flex flex-col items-center text-2xl font-bold uppercase tracking-wide md:text-3xl"
        >
          Related Projects
        </h2>

        <ul class="grid gap-4 md:grid-cols-4 lg:flex">
          <li class="md:col-start-1 md:col-end-3">
            <NuxtLink
              to="/about"
              class="block min-w-70 rounded-lg hover:underline hover:shadow-xs hover:shadow-white hover:transition hover:duration-150 hover:ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <article>
                <figure>
                  <NuxtImg
                    src="/services/varbel-regist.webp"
                    alt="QR registration system used in a corporate event"
                  />
                </figure>
                <h3 class="mt-3 text-lg font-semibold md:text-xl">
                  AI Face Swap Photobooth
                </h3>
                <p class="text-sm text-gray-400">Custom Photobooth</p>
              </article>
            </NuxtLink>
          </li>

          <li class="md:col-start-3 md:col-end-5">
            <NuxtLink
              to="/about"
              class="block min-w-70 rounded-lg hover:underline hover:shadow-xs hover:shadow-white hover:transition hover:duration-150 hover:ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <article>
                <figure>
                  <NuxtImg
                    src="/services/varbel-regist.webp"
                    alt="On-site guest registration system at an exhibition"
                  />
                </figure>
                <h3 class="mt-3 text-lg font-semibold md:text-xl">
                  Branded Event Photobooth
                </h3>
                <p class="text-sm text-gray-400">Custom Photobooth</p>
              </article>
            </NuxtLink>
          </li>

          <li class="md:col-start-2 md:col-end-4">
            <NuxtLink
              to="/about"
              class="block min-w-70 rounded-lg hover:underline hover:shadow-xs hover:shadow-white hover:transition hover:duration-150 hover:ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <article>
                <figure>
                  <NuxtImg
                    src="/services/varbel-regist.webp"
                    alt="On-site guest registration system at an exhibition"
                  />
                </figure>
                <h3 class="mt-3 text-lg font-semibold md:text-xl">
                  Instant Print Booth System
                </h3>
                <p class="text-sm text-gray-400">Custom Photobooth</p>
              </article>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>

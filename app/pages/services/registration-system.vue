<script setup>
import ImageSwiper from "~/components/ImageSwiper.vue";
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle =
  "Registration System | Vartech.id - QR Check-in and Event Attendance";
const seoDescription =
  "Build custom event registration systems with online sign-up, QR code check-in, attendance tracking, admin controls, and reporting dashboards.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/services/registration-system",
  image: "/services/registration-system/card-cover.webp",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-registration-system",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Registration System", path: "/services/registration-system" },
      ]),
    ),
  ],
});

const uiExampleAssets = [
  {
    src: "/services/registration-system/ui-example/ui-1.webp",
    alt: "Registration system UI example 1",
  },
  {
    src: "/services/registration-system/ui-example/ui-2.webp",
    alt: "Registration system UI example 2",
  },
];

const carouselAssets = [
  {
    image: "/services/registration-system/carousel-assets/registration-moment-1.webp",
    alt: "Registration moment 1",
  },
  {
    image: "/services/registration-system/carousel-assets/registration-moment-2.webp",
    alt: "Registration moment 2",
  },
  {
    image: "/services/registration-system/carousel-assets/registration-moment-3.webp",
    alt: "Registration moment 3",
  },
  {
    image: "/services/registration-system/carousel-assets/registration-moment-4.webp",
    alt: "Registration moment 4",
  },
  {
    image: "/services/registration-system/carousel-assets/registration-moment-5.webp",
    alt: "Registration moment 5",
  },
  {
    image: "/services/registration-system/carousel-assets/registration-moment-6.webp",
    alt: "Registration moment 6",
  },
  {
    image: "/services/registration-system/carousel-assets/registration-moment-7.webp",
    alt: "Registration moment 7",
  },
];


const relatedProjects = [
  {
    title: "BNI Banking Journey",
    category: "Registration System",
    image: "/services/varbel-regist.webp",
    alt: "QR registration system used in a corporate event",
    href: "/about",
    listClass: "md:col-start-1 md:col-end-3",
  },
  {
    title: "SRI Summit Indonesia 2025",
    category: "Registration System",
    image: "/services/varbel-regist.webp",
    alt: "On-site guest registration system at an exhibition",
    href: "/about",
    listClass: "md:col-start-3 md:col-end-5",
  },
  {
    title: "SRI Summit Indonesia 2025",
    category: "Registration System",
    image: "/services/varbel-regist.webp",
    alt: "On-site guest registration system at an exhibition",
    href: "/about",
    listClass: "md:col-start-2 md:col-end-4",
  },
];
</script>

<template>
  <article
      aria-labelledby="registration-system-title"
      class="bg-black pt-10 text-zinc-100 mx-auto flex w-11/12 flex-col gap-20"
    >
      <header>
        <h1
          id="registration-system-title"
          class="text-center text-4xl font-bold uppercase tracking-wide text-white md:text-5xl"
        >
          Registration System
        </h1>
      </header>

      <section
        aria-labelledby="overview-title"
        class="mx-auto grid max-w-[90rem] gap-8 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8 lg:grid-cols-2"
      >
        <div class="flex h-full w-full flex-1 overflow-hidden border border-zinc-800 bg-zinc-900">
          <NuxtImg
            src="/services/registration-system/card-cover.webp"
            alt="Guests using a QR-based registration system during an event check-in"
            class="w-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-5">
          <h2
            id="overview-title"
            class="max-w-xs text-2xl font-semibold leading-tight text-white md:max-w-md md:text-3xl"
          >
            Seamless Event Check-in Experience
          </h2>

          <p class="text-sm leading-7 text-zinc-300 md:text-base">
            We design and build custom event registration systems that eliminate
            long queues and streamline guest check-in from pre-event
            registration to on-site execution, ensuring a smooth and
            professional experience for both organizers and attendees.
          </p>

          <ul
            aria-label="Registration system highlights"
            class="flex w-5/6 flex-col gap-4 sm:w-1/2 md:w-full md:max-w-sm"
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
                  Guests register through a fully branded digital invitation
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
                  Each attendee receives a unique QR code for fast verification
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
                  Instant check-in with high-speed and accurate scanning
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
                  Real-time attendance tracking for organizers
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
          class="flex flex-col items-center gap-5"
        >
          <h3
            id="digital-invitation-title"
            class="text-xl font-semibold text-white md:text-2xl"
          >
            Custom Digital Invitation
          </h3>

          <p
            class="max-w-2xl text-center text-sm leading-7 text-zinc-300 md:text-base"
          >
            A fully customized digital invitation tailored to your event’s
            branding, allowing guests to register seamlessly through a
            mobile-friendly experience with a clean and intuitive interface.
          </p>
          <div class="my-4 w-full border border-zinc-800 bg-zinc-900/70 p-2">
            <ClientOnly>
              <ImageSwiper :images="uiExampleAssets" />
            </ClientOnly>
          </div>
        </section>

        <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                    x="16"
                    y="10"
                    width="32"
                    height="40"
                    rx="12"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                  <path
                    d="M22 20h20"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <rect
                    x="22"
                    y="24"
                    width="20"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                  <path d="M26 28h4v4h-4z" fill="currentColor" />
                  <path
                    d="M34 28h4"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M34 32h2"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M24 46h16"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M20 54h24"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  Instant QR Code Verification
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Verify guest entries instantly with a responsive QR scanning
                  system designed for fast, reliable, and low-error event
                  check-in operations.
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
                  Real-time Tracking Dashboard
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Monitor guest attendance in real time through a clear and
                  responsive dashboard, giving organizers instant visibility and
                  full control during the event.
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
                  WhatsApp / Email Blast
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Distribute invitations, confirmations, and event updates
                  efficiently via WhatsApp or email with a streamlined
                  communication flow.
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
                  <circle
                    cx="32"
                    cy="32"
                    r="20"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                  <path
                    d="M12 32h40"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M32 12c6 6 9 13 9 20s-3 14-9 20c-6-6-9-13-9-20s3-14 9-20Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 22c4 2 9 3 14 3s10-1 14-3"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18 42c4-2 9-3 14-3s10 1 14 3"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-lg font-semibold leading-snug text-white md:text-xl">
                  Custom Domain for Each Event
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Use a dedicated custom domain for each event to deliver a more
                  professional, branded, and seamless experience for your
                  guests.
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
                  On-site Support Team
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Ensure smooth event operations with on-site technical support,
                  handling everything from check-in systems to troubleshooting
                  during live execution.
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
                  Exportable Reports
                </h3>
                <p class="mt-2 break-words text-sm leading-6 text-zinc-300">
                  Easily generate and export structured attendance data for
                  post-event analysis, reporting, and future event planning.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <section class="mx-auto flex w-full flex-col items-center p-4">
        <EndlessLoop :slides="carouselAssets" />
      </section>

      <RelatedProjects :projects="relatedProjects" />
  </article>
</template>

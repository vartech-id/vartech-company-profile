<script setup>
import ImageSwiper from "~/components/ImageSwiper.vue";

const invitationsAsset = [
  {
    name: "Journey NHPV",
    src: "/invitations/invitation-1.png",
    alt: "Journey NHPV preview",
  },
  {
    name: "Journey NHPV",
    src: "/invitations/invitation-2.png",
    alt: "Journey NHPV preview",
  },
  {
    name: "Journey NHPV",
    src: "/invitations/invitation-3.png",
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
          Registration System
        </h1>
      </header>

      <section
        aria-labelledby="overview-title"
        class="grid gap-6 lg:grid-cols-2 sm:bg-pink-800 md:bg-red-700 lg:bg-green-800 max-w-[90rem] mx-auto"
      >
        <div class="border-2 w-full h-full flex-1">
          <NuxtImg
            src="/services/regist-example.jpg"
            alt="Guests using a QR-based registration system during an event check-in"
            class="w-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-5">
          <h2
            id="overview-title"
            class="max-w-xs text-2xl font-semibold leading-tight md:max-w-md md:text-3xl"
          >
            Seamless Event Check-in Experience
          </h2>

          <p class="text-sm leading-7 text-gray-400 md:text-base">
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
                  Guests register through a fully branded digital invitation
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
                  Each attendee receives a unique QR code for fast verification
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
                  Instant check-in with high-speed and accurate scanning
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
                  Real-time attendance tracking for organizers
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="key-features-title"
        class="flex flex-col items-center gap-8"
      >
        <h2
          id="key-features-title"
          class="text-2xl font-bold uppercase tracking-wide md:text-3xl"
        >
          Key Features
        </h2>

        <section
          aria-labelledby="digital-invitation-title"
          class="flex flex-col items-center gap-5"
        >
          <h3
            id="digital-invitation-title"
            class="text-xl font-semibold md:text-2xl"
          >
            Custom Digital Invitation
          </h3>

          <p
            class="max-w-2xl text-center text-sm leading-7 text-gray-400 md:text-base"
          >
            A fully customized digital invitation tailored to your event’s
            branding, allowing guests to register seamlessly through a
            mobile-friendly experience with a clean and intuitive interface.
          </p>
          <div class="w-full border-2 my-4">
          <ClientOnly>
            <ImageSwiper :images="invitationsAsset" />
          </ClientOnly>
          </div>
        </section>

        <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                    x="16"
                    y="10"
                    width="32"
                    height="40"
                    rx="12"
                    stroke="white"
                    stroke-width="3"
                  />
                  <path
                    d="M22 20h20"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <rect
                    x="22"
                    y="24"
                    width="20"
                    height="14"
                    rx="3"
                    stroke="white"
                    stroke-width="3"
                  />
                  <path d="M26 28h4v4h-4z" fill="white" />
                  <path
                    d="M34 28h4"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M34 32h2"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M24 46h16"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M20 54h24"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-lg font-semibold leading-snug md:text-xl">
                  Instant QR Code Verification
                </h3>
                <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                  Verify guest entries instantly with a responsive QR scanning
                  system designed for fast, reliable, and low-error event
                  check-in operations.
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
                  Real-time Tracking Dashboard
                </h3>
                <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                  Monitor guest attendance in real time through a clear and
                  responsive dashboard, giving organizers instant visibility and
                  full control during the event.
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
                  WhatsApp / Email Blast
                </h3>
                <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                  Distribute invitations, confirmations, and event updates
                  efficiently via WhatsApp or email with a streamlined
                  communication flow.
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
                  <circle
                    cx="32"
                    cy="32"
                    r="20"
                    stroke="white"
                    stroke-width="3"
                  />
                  <path
                    d="M12 32h40"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M32 12c6 6 9 13 9 20s-3 14-9 20c-6-6-9-13-9-20s3-14 9-20Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 22c4 2 9 3 14 3s10-1 14-3"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18 42c4-2 9-3 14-3s10 1 14 3"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-lg font-semibold leading-snug md:text-xl">
                  Custom Domain for Each Event
                </h3>
                <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                  Use a dedicated custom domain for each event to deliver a more
                  professional, branded, and seamless experience for your
                  guests.
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
                  On-site Support Team
                </h3>
                <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                  Ensure smooth event operations with on-site technical support,
                  handling everything from check-in systems to troubleshooting
                  during live execution.
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
                  Exportable Reports
                </h3>
                <p class="mt-1 break-words text-sm leading-6 text-gray-400">
                  Easily generate and export structured attendance data for
                  post-event analysis, reporting, and future event planning.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <section class="mx-auto w-full flex flex-col items-center">
        <h2 class="text-2xl font-bold uppercase tracking-wide md:text-3xl">
          Our Gallery
        </h2>
        <EndlessLoop :slides="carouselAssets" />
      </section>

      <section
        aria-labelledby="related-projects-title"
        class="flex flex-col items-center justify-center gap-4 xl:w-full max-w-[100rem]"
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
                  BNI Banking Journey
                </h3>
                <p class="text-sm text-gray-400">Registration System</p>
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
                  SRI Summit Indonesia 2025
                </h3>
                <p class="text-sm text-gray-400">Registration System</p>
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
                  SRI Summit Indonesia 2025
                </h3>
                <p class="text-sm text-gray-400">Registration System</p>
              </article>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>

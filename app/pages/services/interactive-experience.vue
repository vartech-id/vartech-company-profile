<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle =
  "Interactive Live Experiences | Vartech.id - Event Display and Audience Tech";
const seoDescription =
  "Build interactive live experiences for events, including message walls, digital journeys, real-time displays, audience participation, and screen integrations.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/services/interactive-experience",
  image: "/services/regist-example.jpg",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-interactive-experience",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        {
          name: "Interactive Live Experiences",
          path: "/services/interactive-experience",
        },
      ]),
    ),
  ],
});

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
  <article
      aria-labelledby="registration-system-title"
      class="pt-10 mx-auto flex flex-col gap-20 w-11/12 max-w-[100rem]"
    >
      <header>
        <h1
          id="registration-system-title"
          class="text-center text-4xl font-bold uppercase tracking-wide md:text-5xl"
        >
          Interactive Live Experience
        </h1>
      </header>
      <!-- Scream Game -->
      <section class="border border-zinc-700 bg-zinc-950 p-3 shadow-sm">
        <div class="flex flex-col gap-3 md:flex-row md:gap-5">
          <div
            class="flex h-70 w-full overflow-hidden border border-zinc-800 bg-zinc-900 md:w-90 lg:h-100 lg:w-110 xl:h-120 xl:w-140"
          >
            <NuxtImg
              class="h-full w-full object-cover"
              src="/services/regist-example.jpg"
              alt="People playing scream game at an event booth"
            />
          </div>

          <div class="flex flex-1 flex-col gap-3 text-zinc-100">
            <div class="border-b border-zinc-800 pb-4">
              <h2
                class="text-2xl font-bold tracking-tight text-white xl:text-3xl"
              >
                Interactive Journey
              </h2>

              <p
                class="py-3 leading-relaxed text-zinc-200 sm:text-sm md:text-base xl:text-lg"
              >
                We create custom interactive systems that combine web-based
                experiences with real-world triggers for events, activations,
                and immersive installations. Whether it is guiding visitors
                through a journey, controlling lighting effects, or
                synchronizing physical interactions with digital experiences,
                each solution is tailored to match your event goals.
              </p>

              <div class="flex flex-wrap gap-2">
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Immersive Experience
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Interactive Technology
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Customizable
                </p>
              </div>
            </div>

            <div class="pt-2">
              <h3 class="text-xl font-semibold text-white xl:text-2xl">
                How it works
              </h3>
              <ol
                class="list-decimal list-inside space-y-1 pt-3 leading-relaxed text-zinc-200 xl:text-lg"
              >
                <li>
                  Visitors begin the experience from a custom web app or
                  interactive screen.
                </li>
                <li>
                  Each step in the journey can trigger specific actions within
                  the environment.
                </li>
                <li>
                  Physical elements respond in sync with the digital flow to
                  create a seamless experience.
                </li>
                <li>
                  The system can be adapted to many event concepts, from
                  education to entertainment.
                </li>
                <li>
                  Once complete, the experience resets and is ready for the next
                  visitor.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <!-- Wishing Wall -->
      <section class="border border-zinc-700 bg-zinc-950 p-3 shadow-sm">
        <div class="flex flex-col gap-3 md:flex-row md:gap-5">
          <div
            class="flex h-70 w-full overflow-hidden border border-zinc-800 bg-zinc-900 md:w-90 lg:h-100 lg:w-110 xl:h-120 xl:w-140 md:order-1"
          >
            <NuxtImg
              class="h-full w-full object-cover"
              src="/services/regist-example.jpg"
              alt="People playing scream game at an event booth"
            />
          </div>

          <div class="flex flex-1 flex-col gap-3 text-zinc-100">
            <div class="border-b border-zinc-800 pb-4">
              <h2
                class="text-2xl font-bold tracking-tight text-white xl:text-3xl"
              >
                Wishing Wall
              </h2>

              <p
                class="py-3 leading-relaxed text-zinc-200 sm:text-sm md:text-base xl:text-lg"
              >
                An interactive wishing wall experience where guests can send
                messages, wishes, or greetings through a simple digital form,
                and see them displayed live on LED screens or TVs. Perfect for
                events that want to create a more personal, engaging, and
                memorable interaction for every guest.
              </p>

              <div class="flex flex-wrap gap-2">
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Audience Engagement
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Live Message Wall
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Interactive Display
                </p>
              </div>
            </div>

            <div class="pt-2">
              <h3 class="text-xl font-semibold text-white xl:text-2xl">
                How it works
              </h3>
              <ol
 class="list-decimal list-outside pl-4 space-y-1 pt-3 leading-relaxed text-zinc-200 xl:text-lg"
              >
                <li>Guests access the wishing wall by our provided device or by scanning a QR code.</li>
                <li>They fill in their name and message through a simple form.</li>
                <li>The submitted message is processed by the system.</li>
                <li>Messages can appear live on LED screens or TVs as part of the event experience.</li>
                <li>The setup can be adjusted based on event needs, with mobile-based access or device-assisted interaction.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- ENDLESS LOOP -->
      <section class="w-full flex flex-col items-center">
        <EndlessLoop :slides="carouselAssets" />
      </section>

      <RelatedProjects />
  </article>
</template>

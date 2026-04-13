<script setup>
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
      class="mx-auto flex flex-col gap-20 w-11/12 max-w-[100rem]"
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

      <section
        aria-labelledby="related-projects-title"
        class="mx-auto flex max-w-[100rem] flex-col items-center justify-center gap-6 border border-zinc-800 bg-zinc-950/80 p-4 md:p-8 xl:w-full"
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
              class="block min-w-70  border border-zinc-800 bg-zinc-900/70 p-3 transition duration-150 ease-in-out hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
              class="block min-w-70  border border-zinc-800 bg-zinc-900/70 p-3 transition duration-150 ease-in-out hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
              class="block min-w-70  border border-zinc-800 bg-zinc-900/70 p-3 transition duration-150 ease-in-out hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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

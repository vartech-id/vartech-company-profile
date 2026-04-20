<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle =
  "Gamification and Interactive Games | Vartech.id - Event Engagement Systems";
const seoDescription =
  "Create custom event games, quizzes, leaderboards, scoring flows, and gamified booth experiences for brand activations and exhibitions.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/services/gamification",
  image: "/services/regist-example.jpg",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-gamification",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        {
          name: "Gamification & Interactive Games",
          path: "/services/gamification",
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
          GAMIFICATION & INTERACTIVE GAMES
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
                Scream Game
              </h2>

              <p
                class="py-3 leading-relaxed text-zinc-200 sm:text-sm md:text-base xl:text-lg"
              >
                Scream as loud as you can, beat the system, and aim for the
                highest score to win exciting prizes. A perfect crowd magnet for
                booths that want to feel lively, fun, and full of interaction.
              </p>

              <div class="flex flex-wrap gap-2">
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Crowd magnet
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Interactive game
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
 class="list-decimal list-outside pl-4 space-y-1 pt-3 leading-relaxed text-zinc-200 xl:text-lg"
              >
                <li>Tap Start to begin</li>
                <li>Wait for the countdown</li>
                <li>Scream as loud as you can to reveal the logo</li>
                <li>Fill the logo completely to reach a perfect score of 100
                </li>
                <li>Get your final score at the end</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <!-- Scrabble Words Game -->
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
                Scrabble Words
              </h2>

              <p
                class="py-3 leading-relaxed text-zinc-200 sm:text-sm md:text-base xl:text-lg"
              >
                A fun word puzzle game where guests arrange letters to form the
                correct words within a limited time. Perfect for booths that
                want an interactive activity that feels engaging, competitive,
                and enjoyable for all ages.
              </p>

              <div class="flex flex-wrap gap-2">
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Word challenge
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Brain game
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
 class="list-decimal list-outside pl-4 space-y-1 pt-3 leading-relaxed text-zinc-200 xl:text-lg"
              >
                <li>Tap Start to begin the game.</li>
                <li>Player arranges the given letters into the correct word.
                </li>
                <li>The player must answer within the time limit.</li>
                <li>Each correct answer adds to the total score.</li>
                <li>The final score appears at the end of the game.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <!-- QUIZ Game -->
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
                Quiz Game
              </h2>

              <p
                class="py-3 leading-relaxed text-zinc-200 sm:text-sm md:text-base xl:text-lg"
              >
                An interactive quiz game where guests answer questions to earn
                points and test their knowledge. Perfect for booths that want a
                fun, simple, and competitive activity that keeps participants
                engaged.
              </p>

              <div class="flex flex-wrap gap-2">
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Knowledge game
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Interactive quiz
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
 class="list-decimal list-outside pl-4 space-y-1 pt-3 leading-relaxed text-zinc-200 xl:text-lg"
              >
                <li>Tap Start to begin the game.</li>
                <li>Read each question carefully.</li>
                <li>Select the correct answer before moving to the next question.
                </li>
                <li>Each correct answer earns points.</li>
                <li>The final score appears at the end of the game.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
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
                Catch The Falling Item
              </h2>

              <p
                class="py-3 leading-relaxed text-zinc-200 sm:text-sm md:text-base xl:text-lg"
              >
                A fast-paced catching game where guests collect falling items to
                earn points while avoiding bombs and penalty items that can
                reduce their score. Perfect for booths that want a fun,
                energetic, and competitive activity that is easy for everyone to
                enjoy.
              </p>

              <div class="flex flex-wrap gap-2">
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Reflex game
                </p>
                <p
                  class="border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100 xl:text-sm"
                >
                  Point-based
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
 class="list-decimal list-outside pl-4 space-y-1 pt-3 leading-relaxed text-zinc-200 xl:text-lg"
              >
                <li>Tap Start to begin.</li>
                <li>Move the catcher to collect the falling items.</li>
                <li>Different items give different point values.</li>
                <li>Avoid bombs and penalty items, as they will reduce your score.
                </li>
                <li>The final score appears at the end of the game.</li>
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

<script setup>
import {
  breadcrumbSchema,
  jsonLdScript,
  usePageSeo,
} from "~/composables/useSiteSeo";

const seoTitle = "About Vartech.id | Custom Event Technology Team";
const seoDescription =
  "Learn about Vartech.id, a custom event technology team building registration systems, photobooth software, interactive experiences, and digital solutions.";

usePageSeo({
  title: seoTitle,
  description: seoDescription,
  path: "/about-us",
  scripts: [
    jsonLdScript(
      "schema-breadcrumb-about",
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
      ]),
    ),
  ],
});

const team = [
  {
    name: "Rudy T.",
    role: "Founder & CEO",
    photo: "/services/regist-example.jpg",
  },
  {
    name: "Ilham D.",
    role: "Co-Founder & Developer",
    photo: "/services/regist-example.jpg",
  },
  {
    name: "Jonathan T.",
    role: "Head of Operation",
    photo: "/services/regist-example.jpg",
  },
  {
    name: "Hafiz B.",
    role: "Warehouse Manager",
    photo: "/services/regist-example.jpg",
  },
];
</script>

<template>
  <article
    aria-labelledby="about-title"
    class="flex flex-col w-11/12 mx-auto max-w-[70rem] gap-15 pt-10 text-white"
  >
    <section class="flex flex-col gap-6">
      <h1 class="text-4xl md:text-center" id="about-title">About Us</h1>
      <p class="md:text-center lg:w-5/6 mx-auto text-zinc-300">
        Vartech.id is a custom event technology team focused on building digital
        experiences that solve real problems in live events and brand
        activations. We combine software, interactive systems, and automation to
        create seamless and engaging experiences for audiences.
      </p>

      <div class="my-2 rounded-2xl overflow-hidden border border-zinc-800/80">
        <NuxtImg
          class="object-cover w-full max-h-120 aspect-video"
          src="/services/regist-example.jpg"
        />
      </div>

      <p class="md:text-center text-zinc-300">
        We started Vartech because we saw how many creative ideas in the event
        industry were limited by generic tools and rigid systems. Instead of
        forcing ideas to fit existing platforms, we build technology that adapts
        to each concept — enabling more flexible, immersive, and impactful event
        experiences.
      </p>

      <NuxtLink
        class="my-6 flex mx-auto h-12 w-fit items-center justify-center border border-zinc-700 bg-white px-4 font-semibold text-black transition-colors duration-300 hover:bg-zinc-200"
        to="/contact"
      >
        Get In Touch
      </NuxtLink>
    </section>

    <section
      class="border border-zinc-800/80 bg-zinc-950/70 shadow-sm rounded-xl overflow-hidden flex flex-col md:flex-row"
    >
      <div class="flex-1">
        <NuxtImg
          class="object-cover h-full w-full"
          src="/services/regist-example.jpg"
        />
      </div>

      <div class="p-6 flex-1 md:place-content-center">
        <h2 class="text-2xl font-bold pb-2 text-white">
          Our Vision - Message From Founder
        </h2>
        <p class="text-zinc-300">
          At Vartech, our vision is to bridge the gap between creative ideas and
          technical execution in the event industry. We believe that technology
          should enhance the experience, not limit it. We focus on building
          systems that feel simple on the surface but are powerful behind the
          scenes — from AI-powered photobooths and event registration platforms
          to real-time interactive displays and gamified experiences. Our goal
          is to transform complex technical concepts into seamless experiences
          that audiences can instantly understand and enjoy.
        </p>
      </div>
    </section>

    <section class="flex flex-col gap-6">
      <h2 class="text-3xl lg:text-center text-white">Our Team</h2>
      <ul class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <li v-for="member in team" :key="member.name">
          <article
            class="border border-zinc-800 bg-[#101012] shadow-sm p-4 rounded-xl overflow-hidden transition-colors duration-300 hover:border-zinc-700"
          >
            <div
              class="w-3/4 aspect-square rounded-full overflow-hidden mx-auto mb-6 ring-1 ring-zinc-800 bg-zinc-900"
            >
              <NuxtImg
                class="w-full h-full object-cover"
                :src="member.photo"
                :alt="member.name"
              />
            </div>

            <h3 class="text-white">{{ member.name }}</h3>
            <p class="text-xs text-zinc-400">{{ member.role }}</p>
          </article>
        </li>
      </ul>
    </section>

    <section
      class="border border-zinc-800/80 bg-zinc-950/70 shadow-sm rounded-xl flex flex-col items-center justify-center p-6"
    >
      <div class="max-w-xl flex flex-col gap-6">
        <h2 class="text-center text-3xl text-white">
          Curious how our services
          <span class="sm:block">can elevate your business?</span>
        </h2>

        <p class="text-center text-zinc-300">
          Whether you're planning a brand activation, exhibition, or interactive
          event, Vartech helps turn your ideas into fully integrated digital
          experiences that are engaging, scalable, and memorable.
        </p>

        <NuxtLink
          class="flex mx-auto h-12 w-fit items-center justify-center border border-zinc-700 bg-white px-4 font-semibold text-black transition-colors duration-300 hover:bg-zinc-200"
          to="/contact"
        >
          Book a Call
        </NuxtLink>
      </div>
    </section>
  </article>
</template>
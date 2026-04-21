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
    name: "Rudy Alexsander T.",
    role: "Founder",
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
    role: "Co-Founder & Developer",
    photo: "/services/regist-example.jpg",
  },
];
</script>
<template>
  <article
    aria-labelledby="about-title"
    class="flex flex-col w-11/12 mx-auto max-w-[70rem] gap-10 pt-10"
  >
    <section class="border-2 flex flex-col gap-4">
      <h1 class="text-4xl md:text-center" id="about-title">About Us</h1>
      <p class="md:text-center lg:w-5/6 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
        distinctio ullam ipsam quod quaerat. Hic non modi neque nostrum tempora
        sint odio dignissimos voluptatum dolores. Nesciunt doloremque quasi quae
        sunt.
      </p>
      <div class="border rounded-xl overflow-hidden">
        <NuxtImg
          class="object-cover w-full max-h-120 aspect-video"
          src="/services/regist-example.jpg"
        />
      </div>
      <p class="md:text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        voluptates ab iste consequatur quo harum, voluptatum, minus
        exercitationem repellendus quasi sapiente magnam dolores veritatis fugit
        nemo, incidunt inventore similique porro!
      </p>
      <NuxtLink
        class="flex mx-auto h-12 w-fit items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        to="/contact"
        >Get In Touch</NuxtLink
      >
    </section>

    <section
      class="border-2 rounded-xl overflow-hidden flex flex-col md:flex-row"
    >
      <div class="flex-1">
        <NuxtImg
          class="object-cover h-full w-full"
          src="/services/regist-example.jpg"
        />
      </div>
      <div class="p-6 flex-1 md:place-content-center">
        <h2 class="text-2xl font-bold pb-2">
          Our Vision - Message From Founder
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellat facilis, consequuntur tempora ullam assumenda consequatur
          natus eveniet obcaecati voluptatem ab saepe maxime eligendi mollitia
          pariatur? Inventore quis temporibus vitae.
        </p>
      </div>
    </section>
    <section>
      <h2 class="text-3xl font-bold lg:text-center">Our Team</h2>
      <ul class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <li v-for="member in team" :key="member.name">
          <article class="border p-4 rounded-xl overflow-hidden">
            <div
              class="border rounded-full overflow-hidden size-35 mx-auto mb-6"
            >
              <NuxtImg
                class="w-full h-full object-cover"
                :src="member.photo"
                :alt="member.name"
              />
            </div>

            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </article>
        </li>
      </ul>
    </section>
    <section class="border rounded-xl flex flex-col items-center justify-center">
      <div class="border-4 max-w-xl">
        <h2 class="text-center font-bold text-2xl">
          Curious how our services can elevate your business?
        </h2>
        <p class="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste optio
          sint omnis, quo laboriosam officia fugit cum consequuntur dolor
          corporis! Repellat ea placeat, temporibus vero fugiat illum at ab
          dolorem.
        </p>

        <NuxtLink
          class="flex mx-auto h-12 w-fit items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          to="/contact"
          >Book a Call</NuxtLink
        >
      </div>
    </section>
  </article>
</template>

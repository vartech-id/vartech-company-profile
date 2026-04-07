<script setup>
import BeforeAfter from "~/components/BeforeAfter.vue";
import PhotoboothSetup from "/services/varbel-regist.webp";
import EndlessLoop from "~/components/EndlessLoop.vue";

const carouselAssets = [
  {
    image: "/photobooth-ui/blackmores-1.webp",
    alt: "example-a",
    caption: "Blackmores Event Booth",
  },
  {
    image: "/photobooth-ui/blackmores-2.webp",
    alt: "example-b",
    caption: "Blackmores Interactive Display",
  },
  {
    image: "/services/varbel-regist.webp",
    alt: "example-c",
    caption: "Custom Photobooth UI",
  },
  {
    image: "/services/regist-example.jpg",
    alt: "example-d",
    caption: "Event Registration Booth",
  },

    {
    image: "/services/regist-example.jpg",
    alt: "example-d",
    caption: "Event Registration Booth",
  },
    {
    image: "/services/regist-example.jpg",
    alt: "example-d",
    caption: "Event Registration Booth",
  },
    {
    image: "/services/regist-example.jpg",
    alt: "example-d",
    caption: "Event Registration Booth",
  },
];
</script>

<template>
  <main class="pt-10">
    <h1
      class="text-center text-4xl font-bold uppercase tracking-wide md:text-5xl"
    >
      AI PHOTOBOOTH
    </h1>
    <section class="flex flex-col ">
      <!-- IMAGE CONTAINER -->
      <div class="border-2">
        <ClientOnly>
          <BeforeAfter />
        </ClientOnly>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        exercitationem nesciunt quam odit omnis fuga nostrum ab itaque, ea harum
        provident, nisi, quasi facere vero impedit quibusdam sint. Magnam, sunt.
      </p>
    </section>
    <section id="features" class="flex flex-col">
      <div>
        <h3>Custom Ui/UX</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aut, sequi odit quod vero voluptates delectus illum explicabo nostrum
          hic est natus doloribus ducimus ad modi eligendi sed nisi accusantium!
        </p>
      </div>
      <div>
        <h3>Custom Ui/UX</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aut, sequi odit quod vero voluptates delectus illum explicabo nostrum
          hic est natus doloribus ducimus ad modi eligendi sed nisi accusantium!
        </p>
      </div>
      <div>
        <h3>Custom Ui/UX</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aut, sequi odit quod vero voluptates delectus illum explicabo nostrum
          hic est natus doloribus ducimus ad modi eligendi sed nisi accusantium!
        </p>
      </div>
      <div>
        <h3>Custom Ui/UX</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aut, sequi odit quod vero voluptates delectus illum explicabo nostrum
          hic est natus doloribus ducimus ad modi eligendi sed nisi accusantium!
        </p>
      </div>
      <!-- IMAGE CONTAINER -->
      <div>
        <NuxtImg :src="PhotoboothSetup" />
      </div>
    </section>
    <section id="how-it-works" class="flex flex-col">
      <div>
        <div>
          <NuxtImg />
        </div>
        <h3>Take a photo</h3>
        <p>Use a photobooth or photographer</p>
      </div>
      <div>
        <div>
          <NuxtImg />
        </div>
        <h3>A.I Magic</h3>
        <p>Use a photobooth or photographer</p>
      </div>
      <div>
        <div>
          <NuxtImg />
        </div>
        <h3>Share</h3>
        <p>Instantly share your photo</p>
      </div>
    </section>
    <!-- ENDLESS LOOP -->
    <section class="mx-auto w-full ">
      <EndlessLoop :slides="carouselAssets" />
    </section>

    <!-- RELATED PROJECTS -->
    <section
      aria-labelledby="related-projects-title"
      class="flex flex-col items-center justify-center gap-4"
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
  </main>
</template>

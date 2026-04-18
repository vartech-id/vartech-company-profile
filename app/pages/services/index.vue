<script setup>
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
  <section class="max-w-[90rem] w-11/12 mx-auto flex flex-col gap-10">
    <h1
      class="text-center text-4xl font-bold uppercase tracking-wide md:text-5xl"
    >
      Our Services
    </h1>
    <article
      class="border-2 flex flex-col md:flex-row gap-6 p-4 border-gray-700"
    >
      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-2xl font-bold">Registration System</h2>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From online registration to on-site QR scanning, we create seamless
          check-in systems with real-time attendance tracking, admin controls,
          and reporting so your crowd flow stays organized and effortless.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/registration-system"
          >Learn more →</NuxtLink
        >
      </div>
      <div class="flex-1 md:max-w-xl">
        <NuxtImg
          class="object-cover aspect-3/2 w-full h-full"
          src="/services/regist-example.jpg"
        />
      </div>
    </article>
    <article
      class="border-2 flex flex-col md:flex-row gap-6 p-4 border-gray-700"
    >
      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-2xl font-bold">Custom Photobooth Development</h2>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From camera capture to branded overlays, delivery, and printing, we
          develop photobooth workflows that feel premium and intuitive designed
          for speed on-site and a smooth guest experience.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/registration-system"
          >Learn more →</NuxtLink
        >
      </div>
      <div class="flex-1 md:max-w-xl">
        <NuxtImg
          class="object-cover aspect-3/2 w-full h-full"
          src="/services/regist-example.jpg"
        />
      </div>
    </article>
    <article
      class="border-2 flex flex-col md:flex-row gap-6 p-4 border-gray-700"
    >
      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-2xl font-bold">Registration System</h2>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From online registration to on-site QR scanning, we create seamless
          check-in systems with real-time attendance tracking, admin controls,
          and reporting so your crowd flow stays organized and effortless.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/registration-system"
          >Learn more →</NuxtLink
        >
      </div>
      <div class="flex-1 md:max-w-xl">
        <NuxtImg
          class="object-cover aspect-3/2 w-full h-full"
          src="/services/regist-example.jpg"
        />
      </div>
    </article>
    <article
      class="border-2 flex flex-col md:flex-row gap-6 p-4 border-gray-700"
    >
      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-2xl font-bold">Registration System</h2>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From online registration to on-site QR scanning, we create seamless
          check-in systems with real-time attendance tracking, admin controls,
          and reporting so your crowd flow stays organized and effortless.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/registration-system"
          >Learn more →</NuxtLink
        >
      </div>
      <div class="flex-1 md:max-w-xl">
        <NuxtImg
          class="object-cover aspect-3/2 w-full h-full"
          src="/services/regist-example.jpg"
        />
      </div>
    </article>
    <div id="CTA" class="flex flex-col items-center gap-4">
      <h3 class="font-bold text-xl sm:text-2xl md:text-3xl">Need a More Custom Solutions?</h3>
      <p>
        We help brands, agencies, and event organizers build tailored digital
        solutions based on their goals, workflow, and audience experience.
      </p>
      <NuxtLink class="inline-flex h-12 items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black" to="contact" >Talk to Us</NuxtLink>
    </div>
    <RelatedProjects :projects="relatedProjects" />
  </section>
</template>

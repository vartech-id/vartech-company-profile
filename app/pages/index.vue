<script setup>
const logoOnlySrc = "/images/vartech-logo-only.png";
</script>
<template>
  <div
    class="mx-auto flex flex-col w-11/12 gap-40 items-center justify-center xl:max-w-7xl sm:bg-blue-500 md:bg-amber-700 lg:bg-green-950 xl:bg-red-950 border-red-600 border-2 pt-10 lg:pt-0"
  >
    <section
      aria-labelledby="hero-title"
      class="border-2 border-blue-600 flex w-full flex-col gap-12 pt-20 lg:min-h-[calc(100svh-5rem)] xl:w-full"
    >
      <div
        class="flex flex-col items-center gap-12 text-center lg:flex-1 lg:justify-center"
      >
        <h1
          id="hero-title"
          class="w-full flex flex-col gap-4 font-roboto text-[2.7rem]/12 font-black uppercase sm:flex-row sm:flex-wrap sm:justify-center sm:text-5xl md:text-6xl lg:text-7xl border-2"
        >
          <span>Turn Your</span>
          <span>Idea Into</span>
          <span>Digital Reality</span>
        </h1>

        <p
          class="mx-auto max-w-4xl text-sm uppercase md:text-base lg:text-lg border-2 w-full sm:w-5/6"
        >
          We build end-to-end tech solutions from ui/ux to development,
          integration, and deployment tailored for brands, events, products, and
          personal projects delivered with clean execution and real impact.
        </p>
      </div>

      <section
        aria-labelledby="clients-title"
        class="relative left-1/2 w-screen -translate-x-1/2 flex flex-col gap-4"
      >
        <h2
          id="clients-title"
          class="text-center font-roboto text-xs font-light"
        >
          Our Clients:
        </h2>
        <ClientsMarque />
      </section>
    </section>

    <section
      aria-labelledby="about"
      class="border-2 flex flex-col gap-10 lg:gap-14 items-center sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
    >
      <h2 id="about" class="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase border-2">About Us</h2>
      <div class="flex flex-col border-2 items-center gap-10 lg:flex-row lg:gap-12 ">
        <img
          class="border-2 h-24 sm:h-30 md:h-38 lg:h-74 xl:h-80"
          :src="logoOnlySrc"
          alt="vartech logo only"
        />
        <div
          class="text-sm sm:text-base flex flex-col gap-4 sm:text-center lg:text-left border-2 border-blue-600  md:text-lg xl:text-xl"
        >
          <p>
            Vartech.id was founded with a passion for building technology that
            solves real problems in live events and brand activations.
          </p>
          <p>
            We saw how many creative ideas in the event industry were limited by
            generic tools and rigid systems. From that gap, Vartech was created
            to design tailored digital experiences that combine
            software,interactive systems, and automation.
          </p>
          <p>
            We develop custom solutions such as AI photobooths, event
            registration platforms, interactive displays, and gamified
            experiences for brands, agencies, and event organizers.
          </p>
          <p>
            Our mission is simple: transform complex technical ideas into
            seamless experiences that audiences can instantly enjoy.
          </p>
        </div>
      </div>
    </section>
    <section
      aria-labelledby="services"
      class="border-2 border-amber-200 grid gap-10 justify-center "
    >
      <h2 id="services" class="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase border-2 text-center pb-5">Our Services</h2>
      <article class="border-y border-gray-700 flex flex-col gap-4 md:gap-6 py-4">
        <h3 class="text-3xl font-bold">Registration System</h3>
        <p class="text-sm sm:text-base md:text-lg  lg:text-xl">
          From online registration to on-site QR scanning, we create seamless
          check-in systems with real-time attendance tracking, admin controls,
          and reporting so your crowd flow stays organized and effortless.
        </p>
        <NuxtLink class="sm:text-base md:text-lg lg:text-xl underline decoration-dotted" to="/registration-system">Learn more →</NuxtLink>
      </article>
      <article class="border-y border-gray-700 flex flex-col gap-4 md:gap-6 py-4">
        <h3 class="text-3xl font-bold">Custom Photobooth Development</h3>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">
          From camera capture to branded overlays, delivery, and printing, we
          develop photobooth workflows that feel premium and intuitive—designed
          for speed on-site and a smooth guest experience.
        </p>
        <NuxtLink class="sm:text-base md:text-lg lg:text-xl underline decoration-dotted" to="/custom-photobooth">Learn more →</NuxtLink>
      </article>
      <article class="border-y border-gray-700 flex flex-col gap-4 md:gap-6 py-4">
        <h3 class="text-3xl font-bold">Ai Photobooth & Image Automation</h3>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">
          From face swap to enhancement and automated processing, we turn AI
          into practical event-ready features—optimized for consistent results,
          fast turnaround, and scalable output.
        </p>
        <NuxtLink class="sm:text-base md:text-lg lg:text-xl underline decoration-dotted" to="/ai-photobooth">Learn more →</NuxtLink>
      </article>
      <article class="border-y border-gray-700 flex flex-col gap-4 md:gap-6 py-4">
        <h3 class="text-3xl font-bold">Gamification & Interactive Games</h3>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">
          From quick mini-games to full gamification systems, we build
          interactive experiences that drive engagement boosting participation,
          retention, and campaign excitement through clear mechanics and
          rewards.
        </p>
        <NuxtLink class="sm:text-base md:text-lg lg:text-xl underline decoration-dotted" to="/gamification">Learn more →</NuxtLink>
      </article>
      <article class="border-y border-gray-700 flex flex-col gap-4 md:gap-6 py-4">
        <h3 class="text-3xl font-bold">Interactive Live Experiences</h3>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">
          From live message walls to real-time screen outputs, we power
          interactive moments that appear instantly on displays turning audience
          participation into a shared experience with moderation and control.
        </p>
        <NuxtLink class="sm:text-base md:text-lg lg:text-xl underline decoration-dotted" to="interactive-experience">Learn more →</NuxtLink>
      </article>
      <NuxtLink to="/services" class="border-2 p-2 px-4 w-24 mx-auto">View All</NuxtLink>
    </section>
    <section id="works">Works</section>
    <section id="contact">Contact</section>
  </div>
</template>
<style scoped>
@media (max-width: 387px) {
  #hero-title {
    font-size: 2.5rem;
  }
}
</style>

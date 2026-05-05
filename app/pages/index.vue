<script setup>
import { works } from "~/data/works";
import { companyData } from "~/data/company";

const logoOnlySrc = "/images/vartech-logo.svg";
const siteUrl = "https://vartech.id";
const homepageUrl = `${siteUrl}/`;
const ogImageUrl = `${siteUrl}/images/logo.png`;

const faqItems = [
  {
    question: "What does Vartech do?",
    answer:
      "Vartech builds custom digital solutions for events, brand activations, corporate campaigns, exhibitions, and business needs. We help brands, agencies, and event organizers turn ideas into practical digital experiences through web applications, event technology, interactive systems, AI-powered experiences, and custom digital workflows.",
  },
  {
    question: "What kind of services does Vartech support?",
    answer:
      "Vartech supports custom event software, web application development, digital registration systems, interactive audience experiences, AI-powered activations, real-time display integrations, and other tailored digital solutions. If your project requires a custom technical approach, we can help explore the most practical solution based on your event goal, audience journey, and production setup.",
  },
  {
    question: "How much does it cost to hire Vartech?",
    answer:
      "The cost to hire Vartech depends on the project scope, required features, timeline, technical complexity, hardware needs, and on-site requirements. A simple digital system will have a different budget from a fully custom interactive experience or AI-powered activation. You can discuss your requirements with us first so we can recommend the most suitable solution and estimate.",
  },
  {
    question: "Can Vartech help if my idea is not listed as a service?",
    answer:
      "Yes. Even if your idea or technical requirement is not listed as one of our main services, Vartech is happy to help understand your needs, explore possible solutions, and recommend a practical digital approach. We focus on helping you find the right solution, not only offering fixed service packages.",
  },
  {
    question:
      "Can I consult with Vartech before choosing the right digital solution?",
    answer:
      "Yes. You can discuss your event idea, campaign goal, booth flow, technical setup, and expected audience experience with Vartech before deciding the right solution. We can help translate your idea into a practical digital experience that fits your objective, timeline, budget, and production needs.",
  },
  {
    question: "Does Vartech only work on events?",
    answer:
      "No. While Vartech often works on events, brand activations, exhibitions, and corporate campaigns, we can also support business needs that require custom web applications, digital workflows, dashboards, automation, or interactive digital tools. The solution can be adjusted based on the problem you want to solve.",
  },
  {
    question: "Can Vartech support projects in Jakarta and across Indonesia?",
    answer:
      "Yes. Vartech can support projects in Jakarta, across Indonesia, and selected international projects depending on the scope and technical requirements. Some solutions can be prepared remotely, while event-based systems may include on-site setup, testing, and technical support when needed.",
  },
];

useSeoMeta({
  title: "Vartech.id | Custom Event Tech and Interactive Experiences",
  description:
    "Vartech.id builds custom event technology, AI photobooths, registration systems, interactive games, and live brand activation experiences.",
  robots: "index,follow",
  ogTitle: "Vartech.id | Custom Event Tech and Interactive Experiences",
  ogDescription:
    "Custom event technology, AI photobooths, registration systems, interactive games, and live brand activation experiences built for brands and events.",
  ogType: "website",
  ogUrl: homepageUrl,
  ogImage: ogImageUrl,
  ogImageAlt: "Vartech.id logo",
  ogSiteName: "Vartech.id",
  twitterTitle: "Vartech.id | Custom Event Tech and Interactive Experiences",
  twitterDescription:
    "Custom event technology, AI photobooths, registration systems, interactive games, and live brand activation experiences built for brands and events.",
  twitterCard: "summary_large_image",
  twitterImage: ogImageUrl,
});

useHead({
  link: [
    {
      key: "canonical",
      rel: "canonical",
      href: homepageUrl,
    },
    {
      rel: "preload",
      href: "/fonts/roboto-latin-400-normal.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/roboto-latin-900-normal.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
});
</script>
<template>
  <div
    class="mx-auto flex flex-col w-11/12 gap-40 items-center justify-center xl:max-w-350 pt-10 lg:pt-0"
  >
    <section
      aria-labelledby="hero-title"
      class="border-blue-600 flex w-full flex-col gap-12 pt-20 lg:min-h-[calc(100svh-5rem)] xl:w-full"
    >
      <div
        class="flex flex-col items-center gap-12 text-center lg:flex-1 lg:justify-center"
      >
        <h1
          id="hero-title"
          class="w-full flex flex-col gap-4 font-roboto text-[2.7rem]/12 font-black uppercase sm:flex-row sm:flex-wrap sm:justify-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span>Turn Your</span>
          <span>Idea Into</span>
          <span>Digital Reality</span>
        </h1>

        <p
          class="mx-auto text-xs uppercase md:text-sm md:max-w-2xl xl:max-w-4xl lg:max-w-4xl lg:text-lg xl:text-xl w-5/6"
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
          class="text-center font-roboto text-xs"
        >
          Our Clients:
        </h2>
        <LazyClientsMarque hydrate-never />
      </section>
    </section>

    <section
      aria-labelledby="about"
      class="flex flex-col gap-10 items-center sm:max-w-prose md:max-w-2xl lg:max-w-5xl xl:max-w-7xl"
    >
      <h2
        id="about"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase"
      >
        About Us
      </h2>
      <div
        class="lg:w-full flex flex-col items-center gap-10 xl:gap-20 lg:flex-row"
      >
        <NuxtImg
          class="h-24 sm:h-30 md:h-38 lg:h-74 xl:h-90 w-auto"
          :src="logoOnlySrc"
          width="253"
          height="232"
          alt="Vartech logo only"
        />
        <div
          class="text-[0.9rem] sm:text-base flex flex-col gap-4 lg:gap-6 border-blue-600 md:text-lg xl:text-xl"
        >
          <p>
            Vartech.id is a digital event technology company that builds custom
            software, interactive systems, and automation for live events, brand
            activations, corporate campaigns, and business needs.
          </p>

          <p>
            We started Vartech after seeing how many creative event ideas were
            limited by generic tools, manual workflows, and rigid systems. Our
            goal is to help brands, agencies, and event organizers turn those
            ideas into practical digital experiences that are reliable,
            engaging, and easy to operate on-site.
          </p>

          <p>
            Instead of offering only fixed service packages, we focus on
            understanding the problem behind each project. From registration
            flows and audience interaction to AI-powered experiences and
            real-time displays, every solution is designed around the event
            goal, user journey, technical setup, and production needs.
          </p>

          <p>
            Our mission is simple: transform complex technical ideas into
            seamless digital experiences that audiences can instantly
            understand, enjoy, and remember.
          </p>
        </div>
      </div>
    </section>
    <section
      aria-labelledby="services"
      class="flex flex-col items-center gap-10 justify-center md:max-w-4xl lg:max-w-5xl"
    >
      <h2
        id="services"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-center"
      >
        Services
      </h2>
      <article
        class="border border-zinc-700 bg-zinc-950 shadow-sm flex flex-col gap-4 md:gap-6 p-4"
      >
        <h3 class="text-2xl font-bold">Registration System</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From online registration to on-site QR scanning, we create seamless
          check-in systems with real-time attendance tracking, admin controls,
          and reporting so your crowd flow stays organized and effortless.
        </p>
        <NuxtLink
          aria-label="Learn more about Registration System"
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/registration-system"
          >Explore Registration Systems →</NuxtLink
        >
      </article>
      <article
        class="border border-zinc-700 bg-zinc-950 shadow-sm flex flex-col gap-4 md:gap-6 p-4"
      >
        <h3 class="text-2xl font-bold">Gamification & Interactive Games</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From quick mini-games to full gamification systems, we build
          interactive experiences that drive engagement boosting participation,
          retention, and campaign excitement through clear mechanics and
          rewards.
        </p>
        <NuxtLink
          aria-label="Learn more about Gamification and Interactive Games"
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/gamification"
          >Explore Gamification & Games →</NuxtLink
        >
      </article>
      <article
        class="border border-zinc-700 bg-zinc-950 shadow-sm flex flex-col gap-4 md:gap-6 p-4"
      >
        <h3 class="text-2xl font-bold">Custom Photobooth Development</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From camera capture to branded overlays, delivery, and printing, we
          develop photobooth workflows that feel premium and intuitive designed
          for speed on-site and a smooth guest experience.
        </p>
        <NuxtLink
          aria-label="Learn more about Custom Photobooth Development"
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/custom-photobooth"
          >Explore Custom Photobooths →</NuxtLink
        >
      </article>
      <article
        class="border border-zinc-700 bg-zinc-950 shadow-sm flex flex-col gap-4 md:gap-6 p-4"
      >
        <h3 class="text-2xl font-bold">Interactive Live Experiences</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From live message walls to real-time screen outputs, we power
          interactive moments that appear instantly on displays turning audience
          participation into a shared experience with moderation and control.
        </p>
        <NuxtLink
          aria-label="Learn more about Interactive Live Experiences"
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/interactive-experience"
          >Explore Interactive Live Experiences →</NuxtLink
        >
      </article>
      <article
        class="border border-zinc-700 bg-zinc-950 shadow-sm flex flex-col gap-4 md:gap-6 p-4"
      >
        <h3 class="text-2xl font-bold">Ai Photobooth & Image Automation</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From face swap to enhancement and automated processing, we turn AI
          into practical event-ready features optimized for consistent results,
          fast turnaround, and scalable output.
        </p>
        <NuxtLink
          aria-label="Learn more about Ai Photobooth and Image Automation"
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/ai-photobooth"
          >Explore Ai Photobooths →</NuxtLink
        >
      </article>
      <NuxtLink
        aria-label="View all services"
        to="/services"
        class="inline-flex h-12 items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
      >
        View All
      </NuxtLink>
    </section>
    <section
      id="works"
      aria-labelledby="works-title"
      class="relative w-full flex flex-col gap-10 items-center"
    >
      <h2
        id="works-title"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase"
      >
        Works
      </h2>
      <div class="relative w-full flex flex-col gap-10 items-center py-8">
        <article
          class="flex flex-col gap-5 w-full items-center overflow-hidden"
        >
          <LazyWorksSwiper hydrate-on-visible :items="works" />
        </article>
        <NuxtLink
          aria-label="View all works"
          to="/works"
          class="inline-flex h-12 items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >View All</NuxtLink
        >
      </div>
    </section>
    <LazyFaqSection
      hydrate-on-visible
      description="Answers to common questions about custom event tech, AI photobooths, and brand activation experiences."
      :items="faqItems"
    />
    <section
      id="faq-cta"
      aria-labelledby="faq-cta-title"
      class="flex flex-col items-center gap-6 w-11/12"
    >
      <h2
        id="faq-cta-title"
        class="font-bold text-xl sm:text-2xl md:text-3xl text-center"
      >
        Need Something More Specific?
      </h2>
      <NuxtLink
        aria-label="Get in touch with us"
        to="#contact"
        class="inline-flex h-12 items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >Get In Touch</NuxtLink
      >
    </section>
    <LazyForm
      hydrate-on-visible
      :heading="['Share your ideas', 'Let\'s make them real !']"
      :address="companyData.address"
      :emails="companyData.emails"
      :phones="companyData.phones"
      :socials="companyData.socials"
    />
  </div>
</template>
<style scoped>
@media (max-width: 387px) {
  #hero-title {
    font-size: 2.5rem;
  }
}
</style>

<script setup>
const logoOnlySrc = "/images/vartech-logo-only.png";
const siteUrl = "https://vartech.id";
const homepageUrl = `${siteUrl}/`;
const ogImageUrl = `${siteUrl}/images/logo.png`;

const faqItems = [
  {
    question:
      "Do you build custom event software, web apps, and digital solutions for events, brand activations, and businesses in Jakarta and beyond?",
    answer:
      "Yes. Vartech builds custom event software, web apps, and digital solutions for events, brand activations, and businesses in Jakarta, across Indonesia, and for international projects. Our services can include custom microsites, admin dashboards, guest engagement systems, real-time display integrations, and tailored digital workflows designed around the needs of each event or campaign.",
  },
  {
    question:
      "Can you create a custom event registration system with online registration, QR code check-in, attendance tracking, and reporting dashboards?",
    answer:
      "Yes. We develop custom event registration systems with online sign-up forms, QR code generation, on-site check-in, attendance tracking, admin management, and reporting dashboards. These systems are designed to help brands, agencies, and event organizers manage registration flows more efficiently and create a smoother guest experience from pre-event to on-site operations",
  },
  {
    question:
      "Do you develop custom photobooth software for events, exhibitions, corporate activations, and branded customer experiences?",
    answer:
      "Yes. We build custom photobooth software for events, exhibitions, and brand activations, including camera capture workflows, branded overlays, instant sharing, QR-based delivery, printing systems, and interactive on-site features. Each photobooth experience can be tailored to match the campaign theme, technical setup, and customer journey required for the event",
  },
  {
    question:
      "Can you build AI-powered event experiences such as AI photobooths, face swap, image enhancement, and automated photo processing?",
    answer:
      "Yes. We can integrate AI-powered features such as AI photobooths, face swap, automated image enhancement, themed image generation, and custom photo processing workflows. These solutions are ideal for brands and event organizers who want more engaging visual experiences, higher shareability, and a more memorable digital activation for their audience.",
  },
  {
    question:
      "Do you create interactive games, custom event apps, and audience engagement tools for exhibitions, launches, and brand campaigns?",
    answer:
      "Yes. We create interactive games, custom event apps, and audience engagement tools for exhibitions, product launches, roadshows, and brand campaigns. Our solutions can include quizzes, gamification systems, leaderboards, interactive touch experiences, and other participation-driven mechanics that help increase engagement, booth traffic, and memorable brand interaction during events.",
  },
  {
    question:
      "Can Vartech handle urgent timelines and fast-turnaround custom app development for events with tight technical and production deadlines?",
    answer:
      "Yes. We understand that event production often moves fast. If your project has a tight deadline, we can review the scope, timeline, technical requirements, and on-site needs, then recommend the most realistic solution to deliver within the available time. The goal is to help you launch a stable and effective custom event system without overcomplicating the production process.",
  },
];

const contactForm = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactErrors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactFeedback = ref("");

const clearContactFeedback = () => {
  contactFeedback.value = "";
};

const validateContactField = (field) => {
  const value = contactForm[field].trim();

  if (!value) {
    contactErrors[field] = "This field is required.";
    return false;
  }

  if (field === "email") {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValidEmail) {
      contactErrors.email = "Enter a valid email address.";
      return false;
    }
  }

  contactErrors[field] = "";
  return true;
};

const validateContactForm = () => {
  return ["name", "email", "subject", "message"].every((field) =>
    validateContactField(field),
  );
};

const handleContactSubmit = () => {
  clearContactFeedback();

  if (validateContactForm()) {
    contactFeedback.value =
      "Form validation passed. Connect this form to your backend or email service to receive submissions.";
    return;
  }

  contactFeedback.value =
    "Please complete the required fields before submitting.";
};

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
      rel: "canonical",
      href: homepageUrl,
    },
  ],
  script: [
    {
      key: "schema-organization",
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vartech.id",
        url: homepageUrl,
        logo: ogImageUrl,
        description:
          "Vartech.id builds custom event technology, AI photobooths, registration systems, interactive games, and live brand activation experiences.",
        sameAs: ["https://www.instagram.com/vartech_idn"],
      }),
    },
    {
      key: "schema-website",
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Vartech.id",
        url: homepageUrl,
      }),
    },
    {
      key: "schema-faq",
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    },
  ],
});

const worksAsset = [
  {
    name: "Journey NHPV",
    src: "/works/journey-nhpv.png",
    alt: "Journey NHPV preview",
  },
  {
    name: "Quiz NHPV",
    src: "/works/quiz-nhpv.png",
    alt: "Quiz NHPV preview",
  },
  {
    name: "Realtime Photobooth",
    src: "/works/realtime-photobooth.png",
    alt: "Realtime Photobooth preview",
  },
  {
    name: "Realtime Photobooth",
    src: "/works/realtime-photobooth.png",
    alt: "Realtime Photobooth preview",
  },
  {
    name: "Realtime Photobooth",
    src: "/works/realtime-photobooth.png",
    alt: "Realtime Photobooth preview",
  },
];
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
          class="text-center font-roboto text-xs font-light"
        >
          Our Clients:
        </h2>
        <ClientsMarque />
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
        <img
          class="h-24 sm:h-30 md:h-38 lg:h-74 xl:h-90"
          :src="logoOnlySrc"
          alt="vartech logo only"
        />
        <div
          class="text-[0.9rem] sm:text-base flex flex-col gap-4 lg:gap-6 border-blue-600 md:text-lg xl:text-xl"
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
      class="flex flex-col items-center gap-10 justify-center md:max-w-4xl lg:max-w-5xl"
    >
      <h2
        id="services"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-center"
      >
        Services
      </h2>
      <article class="border border-gray-700 flex flex-col gap-4 md:gap-6 p-4">
        <h3 class="text-2xl font-bold">Registration System</h3>
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
      </article>
      <article class="border border-gray-700 flex flex-col gap-4 md:gap-6 p-4">
        <h3 class="text-2xl font-bold">Custom Photobooth Development</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From camera capture to branded overlays, delivery, and printing, we
          develop photobooth workflows that feel premium and intuitive designed
          for speed on-site and a smooth guest experience.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/custom-photobooth"
          >Learn more →</NuxtLink
        >
      </article>
      <article class="border border-gray-700 flex flex-col gap-4 md:gap-6 p-4">
        <h3 class="text-2xl font-bold">Ai Photobooth & Image Automation</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From face swap to enhancement and automated processing, we turn AI
          into practical event-ready features optimized for consistent results,
          fast turnaround, and scalable output.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/ai-photobooth"
          >Learn more →</NuxtLink
        >
      </article>
      <article class="border border-gray-700 flex flex-col gap-4 md:gap-6 p-4">
        <h3 class="text-2xl font-bold">Gamification & Interactive Games</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From quick mini-games to full gamification systems, we build
          interactive experiences that drive engagement boosting participation,
          retention, and campaign excitement through clear mechanics and
          rewards.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/gamification"
          >Learn more →</NuxtLink
        >
      </article>
      <article class="border border-gray-700 flex flex-col gap-4 md:gap-6 p-4">
        <h3 class="text-2xl font-bold">Interactive Live Experiences</h3>
        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-semibold">
          From live message walls to real-time screen outputs, we power
          interactive moments that appear instantly on displays turning audience
          participation into a shared experience with moderation and control.
        </p>
        <NuxtLink
          class="sm:text-base md:text-lg lg:text-xl text-white underline decoration-dotted decoration-gray-400 underline-offset-4"
          to="/services/interactive-experience"
          >Learn more →</NuxtLink
        >
      </article>
      <NuxtLink
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
      <div
        class="border relative w-full flex flex-col gap-10 items-center py-8"
      >
        <article
          class="flex flex-col gap-5 w-full items-center overflow-hidden"
        >
          <ClientOnly>
            <WorksSwiper />
          </ClientOnly>
        </article>
        <NuxtLink
          to="/works"
          class="inline-flex h-12 items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >View All</NuxtLink
        >
      </div>
    </section>
    <FaqSection />
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
        to="#contact"
        class="inline-flex h-12 items-center justify-center border-2 border-white px-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >Get In Touch</NuxtLink
      >
    </section>
    <section
      id="contact"
      aria-labelledby="contact-title"
      class="flex flex-col lg:flex-row gap-12 w-5/6 lg:w-full"
    >
      <div class="flex flex-col gap-6 text-center lg:text-left flex-1">
        <h2 id="contact-title" class="font-black md:text-4xl">
          <span class="block text-3xl lg:text-5xl">Share your ideas</span>
          <span class="block text-3xl lg:text-5xl">Let's make them real !</span>
        </h2>
        <div class="flex flex-col gap-6">
          <div>
            <h3 class="font-bold uppercase text-xl">Address</h3>
            <address class="not-italic font-normal text-sm">
              Jl. Kepa Duri Mas, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat,
              Daerah Khusus Ibukota Jakarta 11510
            </address>
          </div>
          <div>
            <h3 class="font-bold uppercase text-xl">Email</h3>
            <a
              class="block font-normal text-sm"
              href="mailto:example@vartech.com"
              >example@vartech.com</a
            >
            <a class="block font-normal text-sm" href="mailto:example@gmail.com"
              >example@gmail.com</a
            >
          </div>
          <div>
            <h3 class="font-bold uppercase text-xl">Phone</h3>
            <a class="block font-normal text-sm" href="tel:+62817711008"
              >(+62) 81-7711-008 (Heri)</a
            >
            <a class="block font-normal text-sm" href="tel:+62817711008"
              >(+62) 81-7711-008 (Heri)</a
            >
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-bold text-xl">SOCIAL MEDIA</h3>
            <div class="flex justify-center lg:justify-start gap-1">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-md shadow-lg"
              >
                <a
                  class="block w-8 h-8"
                  href="https://www.instagram.com/vartech_idn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  aria-label="Instagram"
                >
                  <svg
                    class="block h-full w-full"
                    fill="#ffffff"
                    viewBox="0 0 32 32"
                    id="Camada_1"
                    version="1.1"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"
                        ></path>
                        <path
                          d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"
                        ></path>
                        <path
                          d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        class="grid grid-cols-2 gap-4 font-normal flex-1"
        novalidate
        @submit.prevent="handleContactSubmit"
      >
        <div
          class="flex flex-col col-span-2 lg:col-start-1 lg:col-span-1 gap-2"
        >
          <label class="sr-only" for="contact-name">Name</label>
          <input
            id="contact-name"
            v-model="contactForm.name"
            name="name"
            autocomplete="name"
            placeholder="Name"
            class="text-xl p-4 border-2 h-12 lg:h-14"
            :aria-describedby="
              contactErrors.name ? 'contact-name-error' : undefined
            "
            :aria-invalid="contactErrors.name ? 'true' : 'false'"
            required
            type="text"
            @blur="validateContactField('name')"
            @input="
              validateContactField('name');
              clearContactFeedback();
            "
          />
          <p
            v-if="contactErrors.name"
            id="contact-name-error"
            class="text-sm text-red-300"
          >
            {{ contactErrors.name }}
          </p>
        </div>
        <div
          class="flex flex-col col-span-2 lg:col-span-1 lg:col-start-2 gap-2"
        >
          <label class="sr-only" for="contact-email">Your Email</label>
          <input
            id="contact-email"
            v-model="contactForm.email"
            name="email"
            autocomplete="email"
            placeholder="Your Email"
            class="text-xl p-4 border-2 h-12 lg:h-14"
            :aria-describedby="
              contactErrors.email ? 'contact-email-error' : undefined
            "
            :aria-invalid="contactErrors.email ? 'true' : 'false'"
            required
            type="email"
            @blur="validateContactField('email')"
            @input="
              validateContactField('email');
              clearContactFeedback();
            "
          />
          <p
            v-if="contactErrors.email"
            id="contact-email-error"
            class="text-sm text-red-300"
          >
            {{ contactErrors.email }}
          </p>
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label class="sr-only" for="contact-subject">Subject</label>
          <input
            id="contact-subject"
            v-model="contactForm.subject"
            name="subject"
            placeholder="Subject"
            class="text-xl p-4 border-2 col-span-2 h-12 lg:h-14"
            :aria-describedby="
              contactErrors.subject ? 'contact-subject-error' : undefined
            "
            :aria-invalid="contactErrors.subject ? 'true' : 'false'"
            required
            type="text"
            @blur="validateContactField('subject')"
            @input="
              validateContactField('subject');
              clearContactFeedback();
            "
          />
          <p
            v-if="contactErrors.subject"
            id="contact-subject-error"
            class="text-sm text-red-300"
          >
            {{ contactErrors.subject }}
          </p>
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label class="sr-only" for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model="contactForm.message"
            name="message"
            placeholder="Messages ..."
            class="text-xl p-4 border-2 col-span-2"
            :aria-describedby="
              contactErrors.message ? 'contact-message-error' : undefined
            "
            :aria-invalid="contactErrors.message ? 'true' : 'false'"
            required
            rows="10"
            @blur="validateContactField('message')"
            @input="
              validateContactField('message');
              clearContactFeedback();
            "
          ></textarea>
          <p
            v-if="contactErrors.message"
            id="contact-message-error"
            class="text-sm text-red-300"
          >
            {{ contactErrors.message }}
          </p>
        </div>
        <p v-if="contactFeedback" class="col-span-2 text-sm" aria-live="polite">
          {{ contactFeedback }}
        </p>
        <button
          type="submit"
          class="place-self-end w-30 col-start-2 inline-flex h-12 items-center justify-center border-2 border-white font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Reach Us
        </button>
      </form>
    </section>
  </div>
</template>
<style scoped>
@media (max-width: 387px) {
  #hero-title {
    font-size: 2.5rem;
  }
}
</style>

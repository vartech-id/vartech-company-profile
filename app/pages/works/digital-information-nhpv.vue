<script setup>
const pageTitle = "HPV Awareness Video Experience";
const seoTitle =
  "HPV Awareness Video Experience Project - Interactive Couple Education App for ngobrolinhpv.com";
const seoDescription =
  "HPV Awareness Video Experience is an interactive educational app developed for ngobrolinhpv.com, featuring a designed welcome page, tap-to-start flow, and shared headset video experience to help couples better understand HPV messages in a simple and engaging way.";

const seoImage = "/services/regist-example.jpg";

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: seoImage,
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterImage: seoImage,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: pageTitle,
        description: seoDescription,
        image: seoImage,
        genre: [
          "Interactive Event Experience",
          "Educational Web App",
          "Video-Based Awareness Activation",
        ],
        about: [
          "HPV Education",
          "Couple Awareness Experience",
          "Headset Video Interaction",
        ],
        creator: {
          "@type": "Organization",
          name: "Vartech",
        },
        publisher: {
          "@type": "Organization",
          name: "Vartech",
        },
      }),
    },
  ],
});

const showcaseImages = [
  {
    src: "/services/regist-example.jpg",
    alt: "HPV Awareness Video Experience welcome screen for couple education event activation",
  },
  {
    src: "/services/regist-example.jpg",
    alt: "Couples watching HPV awareness video with shared headset at ngobrolinhpv.com event",
  },
];

const summaryItems = [
  {
    title: "Designed Welcome Page",
    description:
      "The experience begins with a single welcome page that has already been visually designed to match the event concept. This screen acts as the entry point for participants before they begin the educational flow.",
  },
  {
    title: "Tap to Continue",
    description:
      "After reading the initial screen, participants tap the next button to move directly into the video experience. The interaction is intentionally simple so the activity feels easy to join in a busy event environment.",
  },
  {
    title: "Shared Video Playback",
    description:
      "Once the next button is pressed, the system plays an educational video that can be listened to together through a headset. This setup encourages both participants to focus on the same message at the same time.",
  },
  {
    title: "Couple-Based Awareness Interaction",
    description:
      "The app is designed for couples, making the educational moment feel more personal and shared rather than passive. By watching together, the audience is guided through the message in a more intimate and attentive format.",
  },
  {
    title: "Simple but Purposeful Activity",
    description:
      "Although the flow is minimal, the role of the app is important. It turns one designed screen and one guided video into a structured awareness activity that feels more intentional than simply showing content on a regular display.",
  },
  {
    title: "Improved Understanding and Message Recall",
    description:
      "The main outcome of the project is to help participants better understand and remember the HPV message delivered during the event. By combining focused video playback and a shared listening experience, the activity supports stronger awareness in a simple format.",
    featured: true,
  },
];

const aboutText = [
  "HPV Awareness Video Experience is an educational event app created for ngobrolinhpv.com as part of a couple-focused HPV awareness activation.",
  "The client needed a simple but purposeful digital experience where participants would begin from a designed welcome page and continue into a guided video session that could be listened to together through a headset.",
  "The final solution transformed a minimal flow into an intentional awareness touchpoint, helping couples engage more closely with the message and leave the activity with a better understanding of the educational content.",
].join(" ");

const carouselAssets = [
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "HPV awareness digital experience for couples at event activation",
    caption: "HPV Awareness Experience",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Designed welcome page for educational event app",
    caption: "Welcome Screen",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Tap to start flow inside educational awareness app",
    caption: "Tap to Continue",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Couples listening to an educational video using a shared headset",
    caption: "Shared Headset Video",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Interactive video-based HPV awareness activity for event visitors",
    caption: "Video Awareness Flow",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Simple educational web app designed to improve awareness and understanding",
    caption: "Awareness Outcome",
  },
];

const relatedProjects = [
  {
    title: "NHPV Journey",
    category: "Interactive Experience",
    image: "/services/varbel-regist.webp",
    alt: "Interactive HPV educational journey for couples",
    href: "/work-pages/nhpv-journey",
    listClass: "md:col-start-1 md:col-end-3",
  },
  {
    title: "NHPV Quiz",
    category: "Interactive Experience",
    image: "/services/varbel-regist.webp",
    alt: "Interactive couple quiz for partner awareness and event engagement",
    href: "/work-pages/nhpv-quiz",
    listClass: "md:col-start-3 md:col-end-5",
  },
  {
    title: "Interactive Presentation Hub",
    category: "Touchscreen Experience",
    image: "/services/varbel-regist.webp",
    alt: "Touchscreen presentation system for seamless event communication",
    href: "/work-pages/interactive-presentation-hub",
    listClass: "md:col-start-2 md:col-end-4",
  },
];
</script>

<template>
  <WorkLayout
    title="HPV Awareness Video Experience"
    heading-id="hpv-awareness-video-experience-title"
    showcase-title="HPV Awareness Video Experience Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="HPV Awareness Video Experience Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>
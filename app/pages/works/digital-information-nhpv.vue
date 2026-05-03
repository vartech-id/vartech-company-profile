<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "HPV Awareness Video Experience";
const seoTitle =
  "HPV Awareness Video Experience Project - Interactive Couple Education App for ngobrolinhpv.com";
const seoDescription =
  "HPV Awareness Video Experience is an interactive educational app developed for ngobrolinhpv.com, featuring a designed welcome page, tap-to-start flow, and shared headset video experience to help couples better understand HPV messages in a simple and engaging way.";

const seoImage = "/works/digital-information/carousel-assets/journey-1.webp";

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
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vartech.id/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Works",
            "item": "https://vartech.id/works"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "HPV Awareness Video Experience",
            "item": "https://vartech.id/works/digital-information-nhpv"
          }
        ]
      })
    },
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
    src: "/works/digital-information/display-mockup.webp",
    alt: "HPV Awareness Video Experience welcome screen for couple education event activation",
  },
  {
    src: "/works/digital-information/carousel-assets/journey-2.webp",
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
    image: "/works/digital-information/carousel-assets/journey-1.webp",
    alt: "HPV awareness video experience booth for ngobrolinhpv.com with visitors using a touchscreen display at an event activation",
    caption: "HPV Awareness Video Booth",
  },
  {
    image: "/works/digital-information/carousel-assets/journey-2.webp",
    alt: "Event visitor using a headset to watch the HPV awareness educational video experience on an interactive digital information display",
    caption: "Shared Headset Video Experience",
  },
];

const relatedProjects = getRelatedProjects("/works/digital-information-nhpv");
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

<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "Interactive Promo Awareness Photobooth Experience";
const seoTitle =
  "Interactive Promo Awareness Photobooth for Hayafest CIMB Niaga Syariah";
const seoDescription =
  "Interactive Promo Awareness Photobooth is a custom event activation project for Hayafest CIMB Niaga Syariah, combining digital signage promo awareness, swipeable campaign content, usher-led product explanation, touchscreen interaction, confirmation modal, and photobooth capture flow into one engaging visitor experience.";

const seoImage =
  "/works/promo-photobooth-cimb-niaga/carousel-assets/journey-1.webp";

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
        headline:
          "Interactive Promo Awareness and Photobooth Experience for Hayafest CIMB Niaga Syariah",
        description: seoDescription,
        image: seoImage,
        genre: [
          "Interactive Event Activation",
          "Promo Awareness",
          "Custom Photobooth",
          "Digital Signage",
          "Touchscreen Experience",
          "Brand Engagement",
        ],
        about: [
          "Interactive Photobooth",
          "Promo Awareness Activation",
          "Digital Signage Experience",
          "Swipeable Promo Content",
          "Touchscreen Photobooth Flow",
          "Usher-Led Product Explanation",
          "Event Technology for Brand Activation",
          "Customer Engagement Experience",
        ],
        keywords: [
          "interactive photobooth",
          "promo awareness photobooth",
          "digital signage photobooth",
          "touchscreen event activation",
          "brand activation photobooth",
          "custom photobooth system",
          "event technology Indonesia",
          "Hayafest CIMB Niaga Syariah",
          "CIMB Niaga Syariah event activation",
          "interactive promo display",
        ],
        creator: {
          "@type": "Organization",
          name: "Vartech",
        },
        publisher: {
          "@type": "Organization",
          name: "Vartech",
        },
        client: {
          "@type": "Organization",
          name: "CIMB Niaga Syariah",
        },
      }),
    },
  ],
});

const showcaseImages = [
  {
    src: "/works/promo-photobooth-cimb-niaga/display-mockup.webp",
    alt: "Interactive promo awareness photobooth experience for Hayafest CIMB Niaga Syariah with digital signage and touchscreen photo flow",
  },
  {
    src: "/works/promo-photobooth-cimb-niaga/carousel-assets/journey-3.webp",
    alt: "Swipeable digital signage promo content combined with photobooth activity for CIMB Niaga Syariah brand activation",
  },
];

const summaryItems = [
  {
    title: "Promo Awareness Meets Photobooth Experience",
    description:
      "For Hayafest, CIMB Niaga Syariah trusted us to create an interactive activity that combined promo awareness with a photobooth experience. The goal was not only to attract visitors through the photobooth, but also to help them understand the available promotions in a more engaging and memorable way.",
  },
  {
    title: "Swipeable Promo Content on Digital Signage",
    description:
      "Visitors could interact with the digital signage by swiping through several promo materials displayed on screen. This made the signage function not only as a photo station, but also as an interactive promotional media that encouraged visitors to explore the campaign content before taking a photo.",
  },
  {
    title: "Usher-Led Promo Explanation",
    description:
      "While visitors explored the promo content on the signage, the usher could explain each promotion directly. This helped create a more human and guided interaction, making the activation feel informative instead of just visual.",
  },
  {
    title: "Touchscreen Interaction to Start Photo Session",
    description:
      "After viewing the promo content, visitors could tap the screen to start the photobooth experience. This touchscreen-based flow made the interaction feel simple, modern, and easy to operate during the event.",
  },
  {
    title: "Confirmation Modal Before Taking Photo",
    description:
      "When the visitor tapped the photo button, a confirmation modal appeared to make sure they were ready to continue. Once they clicked yes, the system directed them into the photo session menu, creating a clear transition from promo awareness into the photobooth flow.",
  },
  {
    title: "Brand Engagement Through Interactive Event Technology",
    description:
      "The final experience turned a standard photobooth activity into a more strategic brand engagement tool. Visitors were attracted by the photo activity, introduced to the promotion through digital signage, guided by the usher, and then invited to continue into a fun and interactive photo session.",
    featured: true,
  },
];

const aboutText = [
  "Interactive Promo Awareness Photobooth Experience is a custom event activation project created for Hayafest CIMB Niaga Syariah. The activity was designed to combine promotional awareness and photobooth engagement into one interactive digital signage experience.",
  "For this project, CIMB Niaga Syariah trusted us to build an activity that could attract visitors through a photobooth while also introducing them to the available promotions. Instead of making the photobooth stand alone as entertainment, the experience was designed so visitors could first explore several promo materials directly from the signage.",
  "The flow allowed visitors to swipe through multiple promo contents on screen while the usher explained each promotion. When visitors were ready to take a photo, they could tap the screen, confirm through a modal, and continue into the photo session menu. This created a smooth journey from promo discovery to photo engagement, helping the brand communicate its campaign in a more interactive and memorable way.",
].join(" ");

const carouselAssets = [
  {
    image:
      "/works/promo-photobooth-cimb-niaga/carousel-assets/journey-1.webp",
    alt: "Visitors using an interactive CIMB Niaga Syariah digital signage photobooth at Hayafest, combining promo awareness content with an on-site photo experience",
    caption: "Interactive Digital Signage Photobooth Setup",
  },
  {
    image:
      "/works/promo-photobooth-cimb-niaga/carousel-assets/journey-2.webp",
    alt: "Participants posing in front of the Hayafest CIMB Niaga Syariah branded photobooth after exploring promo awareness content on the interactive display",
    caption: "Branded Participant Photo Experience",
  },
  {
    image:
      "/works/promo-photobooth-cimb-niaga/carousel-assets/journey-3.webp",
    alt: "CIMB Niaga Syariah interactive photobooth screen showing the captured photo result and QR code download flow for Hayafest visitors",
    caption: "Instant Photo Result and QR Download Flow",
  },
  {
    image:
      "/works/promo-photobooth-cimb-niaga/carousel-assets/journey-4.webp",
    alt: "Group of Hayafest visitors taking a branded photo with the CIMB Niaga Syariah interactive photobooth activation",
    caption: "Group Photo with Branded Event Activation",
  },
];

const relatedProjects = getRelatedProjects("/works/promo-photobooth-cimb-niaga");
</script>

<template>
  <WorkLayout
    title="Interactive Promo Awareness Photobooth Experience"
    heading-id="interactive-promo-awareness-photobooth-experience-title"
    showcase-title="Interactive Promo Awareness Photobooth Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Hayafest CIMB Niaga Syariah Interactive Photobooth Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

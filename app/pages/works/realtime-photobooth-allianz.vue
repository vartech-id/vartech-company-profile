<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "Real-Time LED Photobooth Experience";
const seoTitle =
  "Real-Time LED Photobooth Experience for Allianz ASN Kick Off Meeting 2026";
const seoDescription =
  "Real-Time LED Photobooth Experience is an interactive event project for Allianz ASN Kick Off Meeting 2026, combining digital signage photo capture, automatic background removal, football-themed visual compositing, and sequential real-time display across three large LED panels.";

const seoImage = "/works/realtime-photobooth/carousel-assets/journey-1.webp";

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
          "Custom Photobooth",
          "Real-Time LED Integration",
        ],
        about: [
          "Real-Time Photobooth",
          "Background Removal",
          "Football Theme Event Activation",
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
    src: "/works/realtime-photobooth/display-mockup.webp",
    alt: "Real-time LED photobooth experience for Allianz ASN Kick Off Meeting 2026",
  },
  {
    src: "/works/realtime-photobooth/carousel-assets/journey-3.webp",
    alt: "Football-themed photobooth with background removal and three-LED real-time display output",
  },
];

const summaryItems = [
  {
    title: "Digital Signage Photo Capture",
    description:
      "Guests begin the experience by coming to the digital signage photobooth area and taking their photo through the event system. The flow is designed to feel quick, simple, and highly visible within the venue.",
  },
  {
    title: "Automatic Background Removal",
    description:
      "After the photo is taken, the system automatically processes background removal so the original backdrop can be replaced with a football-themed visual that matches the Allianz event concept.",
  },
  {
    title: "Football Theme Visual Output",
    description:
      "The processed photo is composited into a custom football-themed background, turning a standard event photo into a more immersive branded visual experience that feels aligned with the creative direction of the event.",
  },
  {
    title: "Launch to LED Interaction",
    description:
      "Once the image is ready, guests can press a launch button to send their photo to the large LED display system. This adds an interactive moment and gives participants control over when their content appears on screen.",
  },
  {
    title: "Sequential Display Across 3 LED Panels",
    description:
      "The system distributes photos across three large LED panels in sequence. Each new photo appears on LED 1, then LED 2, then LED 3, before returning to LED 1 again to replace the oldest slot and continue the rotation.",
  },
  {
    title: "Real-Time Viewing and Photo Opportunity",
    description:
      "After launching their image, guests can immediately see their football-themed photo appear on the LED panels in real time. This creates a noticeable event moment and allows them to take additional photos beside the LED wall for extra engagement.",
    featured: true,
  },
];

const aboutText = [
  "Real-Time LED Photobooth Experience is an event activation project created for Allianz ASN Kick Off Meeting 2026, where the event focused on the beginning of the year and the team's momentum in facing 2026.",
  "For this project, we were trusted to develop a photobooth concept that would feel noticeable inside the venue, not only as a capture station but as a connected visual experience that could extend to the large LED setup on site.",
  "The final solution combined digital signage photo capture, automatic background removal, football-themed compositing, and real-time distribution to three large LED panels, creating an interactive photobooth flow that transformed guest photos into a live event attraction.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/realtime-photobooth/carousel-assets/journey-1.webp",
    alt: "Event guests interacting with the Allianz real-time LED photobooth digital signage at ASN Kick Off Meeting 2026",
    caption: "Digital Signage Photobooth Interaction",
  },
  {
    image: "/works/realtime-photobooth/carousel-assets/journey-2.webp",
    alt: "Three-panel real-time LED display showing football-themed photobooth results for Allianz ASN Kick Off Meeting 2026",
    caption: "Sequential Three-LED Photo Display",
  },
  {
    image: "/works/realtime-photobooth/carousel-assets/journey-3.webp",
    alt: "Participants viewing their Allianz football-themed photobooth result on the event LED display system",
    caption: "Live Guest Photo Preview",
  },
  {
    image: "/works/realtime-photobooth/carousel-assets/journey-4.webp",
    alt: "Wide event view of Allianz real-time LED photobooth installation with three large display panels and digital signage booth",
    caption: "Full Real-Time LED Photobooth Setup",
  },
];
const relatedProjects = getRelatedProjects("/works/realtime-photobooth-allianz");
</script>

<template>
  <WorkLayout
    title="Real-Time LED Photobooth Experience"
    heading-id="real-time-led-photobooth-experience-title"
    showcase-title="Real-Time LED Photobooth Experience Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Real-Time LED Photobooth Experience Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

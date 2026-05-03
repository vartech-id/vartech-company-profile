<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "Qdenga Vaccine Awareness Photobooth";
const seoTitle =
  "Qdenga Vaccine Awareness Photobooth Project - Interactive Campaign Activation for Takeda in Malang";
const seoDescription =
  "Qdenga Vaccine Awareness Photobooth is an interactive campaign activation developed for Takeda in Malang, combining registration flow, vaccination status selection, background removal, personalized vaccine awareness overlays, live TV carousel display, and data collection for post-event reporting.";

const seoImage =
  "/works/photobooth-vaccine-label/carousel-assets/journey-1.webp";

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
          "Campaign Photobooth",
          "Brand Awareness Activation",
        ],
        about: [
          "Qdenga Vaccine Awareness",
          "Takeda Campaign Activation",
          "Live Display Photobooth",
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
    src: "/works/photobooth-vaccine-label/display-mockup.webp",
    alt: "Qdenga Vaccine Awareness Photobooth activation for Takeda campaign event in Malang",
  },
  {
    src: "/works/photobooth-vaccine-label/carousel-assets/journey-1.webp",
    alt: "Personalized vaccine awareness photobooth Installations for Takeda campaign event in Malang with live TV carousel display",
  },
];

const summaryItems = [
  {
    title: "Participant Registration and Vaccine Status Input",
    description:
      "Guests begin by registering their name and email, then selecting whether they have already received the vaccine or not. This registration flow supports both participant engagement and brand awareness data collection during the campaign event in Malang.",
  },
  {
    title: "Photo Capture Experience",
    description:
      "After registration, participants take their photo through the photobooth system. The experience is designed to feel simple and fun while still supporting the campaign goal of spreading awareness about Qdenga vaccination.",
  },
  {
    title: "Background Removal and Clean White Output",
    description:
      "Once the photo is taken, the system automatically processes background removal and replaces the original background with a clean white background. This creates a clearer result and prepares the image for branded overlays and campaign messaging.",
  },
  {
    title: "Personalized Overlay Based on Vaccination Status",
    description:
      "The final image includes the participant's name and a campaign twibbon overlay. Two different overlay versions are used: one for participants who have already been vaccinated and one for participants who have not, making the output feel more personal and relevant to the awareness campaign.",
  },
  {
    title: "Live TV Carousel Display",
    description:
      "The experience does not stop at download. Each completed photo is also sent directly to a live TV display that presents participant images in a four-row carousel layout. Newly processed photos appear first in the center with an entrance animation before joining the moving carousel, allowing participants to instantly recognize their photo on screen.",
  },
  {
    title: "Campaign Reach and Data Delivery",
    description:
      "This activation supports both guest engagement and campaign tracking. Participants receive a shareable branded result, while the collected registration and vaccine status data can be delivered to the event committee after the program ends for reporting and follow-up purposes.",
    featured: true,
  },
];

const aboutText = [
  "Qdenga Vaccine Awareness Photobooth is an interactive campaign activation created for Takeda to support awareness about Qdenga vaccination during an event held in Malang.",
  "The goal of the project was not only to provide a fun photobooth activity, but also to create a branded experience that could help track awareness, capture participant vaccine status, and encourage more meaningful interaction with the campaign message.",
  "The final solution combined registration flow, vaccine status selection, automatic background removal, personalized twibbon overlays, live TV carousel display, and post-event data delivery, turning the photobooth into both an engagement tool and a brand awareness channel.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/photobooth-vaccine-label/carousel-assets/journey-1.webp",
    alt: "Qdenga Vaccine Awareness Photobooth booth setup for Takeda campaign activation in Malang",
    caption: "Takeda Qdenga Campaign Booth",
  },
  {
    image: "/works/photobooth-vaccine-label/carousel-assets/journey-2.webp",
    alt: "Interactive Qdenga photobooth installation with registration and branded campaign display at the event booth",
    caption: "Interactive Photobooth Installation",
  },
  {
    image: "/works/photobooth-vaccine-label/carousel-assets/journey-3.webp",
    alt: "Qdenga vaccine awareness photobooth result showing participant portrait with personalized branded overlay",
    caption: "Personalized Vaccine Awareness Result",
  },
  {
    image: "/works/photobooth-vaccine-label/carousel-assets/journey-4.webp",
    alt: "Qdenga photobooth output for vaccinated participant with name and campaign awareness message",
    caption: "Vaccinated Participant Output",
  },
  {
    image: "/works/photobooth-vaccine-label/carousel-assets/journey-5.webp",
    alt: "Qdenga photobooth output for participant with star rating style campaign overlay and personalized name label",
    caption: "Status-Based Campaign Overlay",
  },
];

const relatedProjects = getRelatedProjects("/works/vaccine-photobooth-qdenga");
</script>

<template>
  <WorkLayout
    title="Qdenga Vaccine Awareness Photobooth"
    heading-id="qdenga-vaccine-awareness-photobooth-title"
    showcase-title="Qdenga Vaccine Awareness Photobooth Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Qdenga Vaccine Awareness Photobooth Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

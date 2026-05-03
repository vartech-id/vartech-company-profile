<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "NHPV Journey";
const seoTitle =
  "NHPV Journey Project - Interactive HPV Education Web App, IoT Lighting, and Photobooth Experience";
const seoDescription =
  "NHPV Journey is an interactive HPV education project developed for ngobrolinhpv.com, combining a web app, personalized couple flow, synchronized IoT lighting, dramatic countdown moments, and photobooth integration to create a memorable event experience.";

const seoImage = "/works/interactive-journey/carousel-assets/journey-1.webp";

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
            "name": "NHPV Journey",
            "item": "https://vartech.id/works/nhpv-journey"
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
        genre: ["Interactive Event Experience", "Web App", "IoT Integration"],
        about: ["HPV Education", "Couple Journey", "Event Activation"],
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
    src: "/works/interactive-journey/display-mockup.webp",
    alt: "NHPV Journey interactive HPV education booth experience for couples at an event activation",
  },
  {
    src: "/works/interactive-journey/carousel-assets/journey-3.webp",
    alt: "Web app and IoT lighting experience inside the NHPV Journey couple education booth",
  },
];

const summaryItems = [
  {
    title: "Couple Registration",
    description:
      "Participants begin by entering the male and female partner names into the web app. This registration data is then used to personalize prompts and guide each participant through the interactive HPV education journey.",
  },
  {
    title: "Female Turn and Dramatic Reveal",
    description:
      "After registration, the female participant enters the booth while the lights remain off during the countdown. When the countdown ends, the center light turns on to create a dramatic reveal moment for the male partner.",
  },
  {
    title: "Male Reading Journey",
    description:
      "The web app displays a personalized prompt asking the male participant to look at his partner, followed by educational HPV content created to help him understand information related to female HPV awareness.",
  },
  {
    title: "Role Switch Experience",
    description:
      "Once the first phase is completed, the journey moves into a role-switching stage. A new countdown begins, the male participant enters the booth, and the same dramatic lighting flow is repeated for the second experience.",
  },
  {
    title: "Female Reading Journey",
    description:
      "After the countdown finishes, the center light turns on and the female participant sees a personalized prompt before continuing to the HPV educational content designed to give insight from the male perspective.",
  },
  {
    title: "Photobooth Finale with Full Lighting",
    description:
      "At the end of the journey, participants are invited to take a photo together. When they confirm, the lighting transitions from a single dramatic center light to five active lights, fully illuminating the booth for the final photobooth capture.",
    featured: true,
  },
];

const aboutText = [
  "NHPV Journey is an interactive HPV education project created for ngobrolinhpv.com to turn health information into a more immersive and memorable couple-based event experience.",
  "The challenge was to build an informational journey that encouraged both participants to actively read, reflect, and take turns experiencing each stage instead of passively consuming static content.",
  "To achieve this, we integrated a web app with synchronized IoT lighting, personalized participant prompts, countdown-based dramatic reveals, and a final photobooth moment, creating a connected experience that blends education, interaction, and event technology.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/interactive-journey/carousel-assets/journey-1.webp",
    alt: "MSD HPV interactive journey event booth with digital educational screen, branded floral installation, and immersive activation setup for health awareness campaign",
    caption: "MSD HPV Interactive Journey Event Booth",
  },
  {
    image: "/works/interactive-journey/carousel-assets/journey-2.webp",
    alt: "Participant using a touchscreen web app inside the MSD HPV interactive journey booth during an educational event activation experience",
    caption: "Touchscreen Web App Interaction",
  },
  {
    image: "/works/interactive-journey/carousel-assets/journey-3.webp",
    alt: "MSD HPV interactive event setup with ring light, laptop control station, digital screens, and immersive booth design for educational brand activation",
    caption: "Interactive Event Technology Setup",
  },
  {
    image: "/works/interactive-journey/carousel-assets/journey-4.webp",
    alt: "Visitors posing inside a branded MSD HPV photo booth frame as part of an interactive health education event experience",
    caption: "Branded Photo Booth Experience",
  },
  {
    image: "/works/interactive-journey/carousel-assets/journey-5.webp",
    alt: "Group photo session inside the MSD HPV activation booth with camera setup capturing the live branded event experience",
    caption: "Live Group Photo Capture",
  },
  {
    image: "/works/interactive-journey/carousel-assets/journey-6.webp",
    alt: "Empty MSD HPV branded photo frame installation with floral decorations prepared for participant photo sessions at the event booth",
    caption: "MSD HPV Photo Frame Installation",
  },
];

const relatedProjects = getRelatedProjects("/works/nhpv-journey");
</script>

<template>
  <WorkLayout
    title="NHPV Journey"
    heading-id="nhpv-journey-title"
    showcase-title="NHPV Journey Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="NHPV Journey Project Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

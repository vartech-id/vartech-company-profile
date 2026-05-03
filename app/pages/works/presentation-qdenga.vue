<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "Interactive Presentation Hub";
const seoTitle =
  "Interactive Presentation Hub Project - Touchscreen Presentation System for Takeda Campaign Event";
const seoDescription =
  "Interactive Presentation Hub is a touchscreen presentation system developed for Takeda's Qdenga campaign event in Malang, combining looping video playback, tap-to-start interaction, and seamless access to three preloaded presentations without switching tabs.";

const seoImage = "/works/presentation-app/carousel-assets/journey-1.webp";

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
            "name": "Interactive Presentation Hub",
            "item": "https://vartech.id/works/presentation-qdenga"
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
          "Touchscreen Application",
          "Presentation System",
        ],
        about: [
          "Touchscreen Presentation",
          "Looping Video Display",
          "Event Presentation Interface",
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
    src: "/works/presentation-app/display-mockup.webp",
    alt: "Interactive touchscreen presentation system for Takeda event activation",
  },
  {
    src: "/works/presentation-app/carousel-assets/journey-2.webp",
    alt: "Touchscreen TV presentation interface with looping video and presentation menu",
  },
];

const summaryItems = [
  {
    title: "Idle Screen with Looping Video",
    description:
      "The touchscreen TV is used as a continuous looping video display when it is not being actively used for presentation. This keeps the screen visually alive and useful as part of the event setup even during idle moments.",
  },
  {
    title: "Tap-to-Start Interaction",
    description:
      "When the presenter needs to begin, the screen can simply be tapped to switch from looping mode into an interactive menu. This makes the transition feel faster and more seamless than opening tabs or navigating through multiple windows manually.",
  },
  {
    title: "Three Ready-to-Use Presentation Options",
    description:
      "After tapping the screen, the system displays three prepared presentation choices. This allows the team to quickly select the material they need depending on the audience or discussion flow during the event.",
  },
  {
    title: "Seamless Presentation Access",
    description:
      "The main purpose of the system is to make presentation access feel smooth and practical on-site. Instead of switching between browser tabs or presentation files, the content can be launched directly from one structured touchscreen interface.",
  },
  {
    title: "Touchscreen-Based Event Utility",
    description:
      "Because the interface is built for a touchscreen TV, the experience feels more natural in an exhibition or campaign environment. It allows staff to interact with the screen directly and makes the setup more modern, clean, and presentation-friendly.",
  },
  {
    title: "Dual Function as Display and Presentation Tool",
    description:
      "The final result is a screen system that works both as an event display and a presentation utility. In one setup, the client gets a looping video screen for booth visibility and an instantly accessible presentation hub for smoother product communication.",
    featured: true,
  },
];

const aboutText = [
  "Interactive Presentation Hub is a touchscreen-based presentation system created for the same Takeda campaign event in Malang, where the client needed the TV screen to serve more than one purpose during the activation.",
  "The challenge was to make the screen useful both as a looping visual display and as a practical presentation tool without forcing the team to constantly switch tabs, open files manually, or break the flow of the conversation.",
  "The final solution transformed the touchscreen TV into a dual-purpose interface that could play looping video in idle mode and instantly reveal three prepared presentation options when tapped, creating a cleaner and more seamless on-site presentation experience.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/presentation-app/carousel-assets/journey-1.webp",
    alt: "Takeda Qdenga campaign booth with interactive touchscreen presentation hub for event product communication in Malang",
    caption: "Takeda Campaign Presentation Hub",
  },
  {
    image: "/works/presentation-app/carousel-assets/journey-2.webp",
    alt: "Interactive touchscreen presentation system inside the Takeda Qdenga event booth with digital display and product information area",
    caption: "Interactive Touchscreen Booth Display",
  },
];

const relatedProjects = getRelatedProjects("/works/presentation-qdenga");
</script>

<template>
  <WorkLayout
    title="Interactive Presentation Hub"
    heading-id="interactive-presentation-hub-title"
    showcase-title="Interactive Presentation Hub Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Interactive Presentation Hub Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

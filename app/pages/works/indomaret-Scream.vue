<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "Scream Game";
const seoTitle =
  "Scream Game Project - Interactive Voice Activation Game for Festival Indomaret 2025 Jogjakarta";
const seoDescription =
  "Scream Game is an interactive event game developed for Festival Indomaret 2025 in Jogjakarta, where guests scream into a microphone to reveal a hidden logo, earn a score based on the reveal percentage, and use the result to claim prizes.";

const seoImage = "/works/scream-game/carousel-assets/journey-1.webp";

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
          "Event Gamification",
          "Booth Activation",
        ],
        about: [
          "Scream Game",
          "Voice Interaction",
          "Festival Booth Activity",
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
    src: "/works/scream-game/display-mockup.webp",
    alt: "Scream Game booth activation at Festival Indomaret 2025 in Jogjakarta",
  },
  {
    src: "/works/scream-game/carousel-assets/journey-1.webp",
    alt: "Participants shouting into a microphone during the Scream Game event activity",
  },
];

const summaryItems = [
  {
    title: "Guest Registration",
    description:
      "Participants begin by registering their name and email through the web app before entering the game. This registration step prepares the player data for the interactive booth experience and prize claim flow.",
  },
  {
    title: "Countdown Start",
    description:
      "Once registration is complete, the game begins with a countdown. This creates anticipation and gives participants a clear moment to get ready before the scream challenge starts.",
  },
  {
    title: "Scream Into the Microphone",
    description:
      "After the countdown ends, participants must scream as loudly as possible into the microphone until the game timer runs out. Their voice input becomes the main trigger that drives the visual progress on screen.",
  },
  {
    title: "Logo Reveal Mechanic",
    description:
      "As the participant screams, the hidden logo gradually appears from invisible to visible. The stronger and more consistent the scream, the more the logo is revealed during the game session.",
  },
  {
    title: "Score Result",
    description:
      "When the timer ends, the system calculates a final score based on how much of the logo was successfully revealed. This score becomes the main performance result shown to the participant.",
  },
  {
    title: "Prize Claim and Crowd Engagement",
    description:
      "The final score is used for prize claiming and also becomes part of the entertainment value at the booth. The project successfully attracted attention because many visitors stopped by, watched others play, and recorded the scream moments on video.",
    featured: true,
  },
];

const aboutText = [
  "Scream Game is an interactive booth activity created for Festival Indomaret 2025 in Jogjakarta, where we were trusted to deliver a fun activation that could attract attention and energize the booth area.",
  "The concept was built as a voice-based challenge where participants had to scream as loudly as possible into a microphone to reveal a hidden logo, turning a simple action into a highly visual and entertaining game moment.",
  "By combining registration flow, countdown-based gameplay, real-time logo reveal feedback, and score-based prize claiming, the project helped create a crowded and lively booth atmosphere, with many visitors stopping to watch and record the experience.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/scream-game/carousel-assets/journey-1.webp",
    alt: "Participant playing the Scream Game interactive voice activation booth at Festival Indomaret 2025 in Jogjakarta",
    caption: "Interactive Scream Game Booth",
  },
];

const relatedProjects = getRelatedProjects("/works/indomaret-Scream");
</script>

<template>
  <WorkLayout
    title="Scream Game"
    heading-id="scream-game-title"
    showcase-title="Scream Game Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Scream Game Project Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

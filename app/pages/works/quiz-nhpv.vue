<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "NHPV Quiz";
const seoTitle =
  "NHPV Quiz Project - Interactive Couple Quiz Web App for Event Engagement and Partner Awareness";
const seoDescription =
  "NHPV Quiz is an interactive couple quiz project developed for ngobrolinhpv.com, designed to test how well partners know each other through playful questions, individual turns, right and wrong answer scoring, and sensitivity-based results in a memorable event experience.";

const seoImage = "/works/educational-quiz/carousel-assets/quiz-1.webp";

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
          "Web App",
          "Event Gamification",
        ],
        about: [
          "Couple Quiz",
          "Relationship Awareness",
          "Interactive Event Game",
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
    src: "/works/educational-quiz/display-mockup.webp",
    alt: "NHPV Quiz interactive couple quiz booth at ngobrolinhpv.com event activation",
  },
  {
    src: "/works/educational-quiz/carousel-assets/quiz-3.webp",
    alt: "Couples playing the NHPV Quiz web app experience at the event venue",
  },
];

const summaryItems = [
  {
    title: "Couple Registration",
    description:
      "Participants begin by entering the male and female partner names into the web app. This registration step personalizes the quiz flow and prepares the experience for both turns.",
  },
  {
    title: "Male Partner Quiz Turn",
    description:
      "The male participant plays first and answers a series of questions designed to test how well he understands his partner. The interaction is playful, relatable, and built around relationship awareness.",
  },
  {
    title: "Male Sensitivity Result",
    description:
      "After completing his turn, the system displays a score and ranking that shows how aware or sensitive he is toward his partner based on the number of correct and incorrect answers.",
  },
  {
    title: "Female Partner Quiz Turn",
    description:
      "Once the first round is finished, the female participant takes her turn and answers her own set of questions. This keeps the experience balanced and allows both participants to be evaluated individually.",
  },
  {
    title: "Female Sensitivity Result",
    description:
      "After the female participant completes the quiz, the web app calculates and displays her final score and ranking using the same right and wrong answer logic.",
  },
  {
    title: "Playful Couple Interaction",
    description:
      "The project is designed to create a fun and memorable moment between couples through playful questions, light teasing, and individual results that help them reflect on how well they know each other.",
    featured: true,
  },
];

const aboutText = [
  "NHPV Quiz is an interactive couple quiz project created for ngobrolinhpv.com at the same event location as the NHPV Journey activation.",
  "The goal of this project was to build a web app experience that could test how well partners know each other through a series of playful questions, individual turns, and clear right or wrong answer scoring.",
  "The concept focuses on kepekaan between partners, meaning how aware they are of each other's habits, preferences, and personality, presented in a light, teasing, and engaging format that makes the experience feel fun in an event setting.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/educational-quiz/carousel-assets/quiz-1.webp",
    alt: "MSD HPV educational quiz event booth with large interactive digital screens and branded experiential setup for health awareness activation",
    caption: "MSD HPV Educational Quiz Booth",
  },
  {
    image: "/works/educational-quiz/carousel-assets/quiz-2.webp",
    alt: "Participant using a touchscreen educational quiz web app inside the MSD HPV event activation booth during an interactive health awareness experience",
    caption: "Touchscreen Quiz Web App Interaction",
  },
  {
    image: "/works/educational-quiz/carousel-assets/quiz-3.webp",
    alt: "Close-up of a participant answering questions on the MSD HPV educational quiz screen as part of an interactive event gamification experience",
    caption: "Interactive Health Quiz Experience",
  },
  {
    image: "/works/educational-quiz/carousel-assets/quiz-4.webp",
    alt: "Participant playing the MSD HPV touchscreen quiz game with multiple choice questions during a branded educational event activation",
    caption: "Multiple Choice Quiz Interaction",
  },
  {
    image: "/works/educational-quiz/carousel-assets/quiz-5.webp",
    alt: "MSD HPV educational quiz installation with interactive screens, floral booth styling, and branded event technology setup for visitor engagement",
    caption: "Educational Gamification Setup",
  },
  {
    image: "/works/educational-quiz/carousel-assets/quiz-6.webp",
    alt: "Full MSD HPV quiz activation area with touchscreen stations, ring light, laptop control desk, and immersive event booth design for audience participation",
    caption: "Full Interactive Quiz Activation",
  },
];

const relatedProjects = getRelatedProjects("/works/quiz-nhpv");
</script>

<template>
  <WorkLayout
    title="NHPV Quiz"
    heading-id="nhpv-quiz-title"
    showcase-title="NHPV Quiz Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="NHPV Quiz Project Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

<script setup>
const pageTitle = "Scrabble Game";
const seoTitle =
  "Scrabble Game Project - Interactive Product Knowledge Game for FIF Group Event Booth";
const seoDescription =
  "Scrabble Game is an interactive event game developed for FIF Group at ICE BSD Serpong, combining word puzzle gameplay, countdown-based challenges, product knowledge testing, score-based evaluation, and prize claim flow to create a fun and engaging booth activity.";

const seoImage = "/works/scrabble-game/carousel-assets/journey-1.webp";

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
          "Product Knowledge Game",
        ],
        about: [
          "Scrabble Game",
          "Booth Activity",
          "Prize Claim Mechanism",
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
    src: "/works/scrabble-game/display-mockup.webp",
    alt: "Scrabble Game booth activation for FIF Group at ICE BSD Serpong",
  },
  {
    src: "/works/scrabble-game/carousel-assets/journey-1.webp",
    alt: "Interactive word puzzle game used for product knowledge and prize claim at FIF Group event booth",
  },
];

const summaryItems = [
  {
    title: "Guest Registration",
    description:
      "Participants begin by registering through the game system before entering the challenge. This step prepares player data and connects the gameplay result to the prize claim process at the booth.",
  },
  {
    title: "Interactive Scrabble Gameplay",
    description:
      "After registration, players enter a scrabble-style word game designed as a fun booth activity. The experience is built to attract visitors, keep them engaged, and create a more interactive event atmosphere.",
  },
  {
    title: "Product Knowledge Challenge",
    description:
      "The game is not only for entertainment but also functions as a product knowledge test for FIF Group. The words and puzzle structure are designed to connect the activity with the brand and product messaging inside the booth.",
  },
  {
    title: "20 Question Pool with 5 Questions per Player",
    description:
      "The full game contains around 20 randomized word challenges, but each participant only receives 5 questions per session. This keeps the experience efficient, replayable, and suitable for a busy event environment.",
  },
  {
    title: "Countdown on Every Question",
    description:
      "Each question is supported by its own countdown timer, adding urgency and excitement to the gameplay. This timed mechanic helps maintain energy at the booth while making the challenge feel more dynamic.",
  },
  {
    title: "Scoring and Prize Claim Flow",
    description:
      "At the end of the session, the system calculates the participant's score based on their performance. The final result is then used as the basis for prize claiming, turning the game into both a crowd-pulling activity and a reward-driven engagement tool.",
    featured: true,
  },
];

const aboutText = [
  "Scrabble Game is an interactive booth activation created for FIF Group at an annual event held at ICE BSD Serpong.",
  "The objective of the project was not only to make the booth more lively, but also to create a game experience that could support prize claiming while reinforcing product knowledge in a fun and accessible way.",
  "The final solution was a scrabble-style word game where participants register, answer a limited set of timed questions, receive a final score, and use that result as part of the reward flow, helping the activity function as both entertainment and branded engagement.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/scrabble-game/carousel-assets/journey-1.webp",
    alt: "Scrabble Game activation at FIF Group event booth",
    caption: "FIF Group Booth Activation",
  },
];

const relatedProjects = [
  {
    title: "Scream Game",
    category: "Event Gamification",
    image: "/services/varbel-regist.webp",
    alt: "Interactive scream game for booth crowd engagement",
    href: "/work-pages/scream-game",
    listClass: "md:col-start-1 md:col-end-3",
  },
  {
    title: "Registration System",
    category: "Web App",
    image: "/services/varbel-regist.webp",
    alt: "Event registration system for guest management and activity flow",
    href: "/registration-system",
    listClass: "md:col-start-3 md:col-end-5",
  },
  {
    title: "NHPV Quiz",
    category: "Interactive Experience",
    image: "/services/varbel-regist.webp",
    alt: "Interactive quiz web app for event engagement",
    href: "/work-pages/nhpv-quiz",
    listClass: "md:col-start-2 md:col-end-4",
  },
];
</script>

<template>
  <WorkLayout
    title="Scrabble Game"
    heading-id="scrabble-game-title"
    showcase-title="Scrabble Game Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Scrabble Game Project Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>
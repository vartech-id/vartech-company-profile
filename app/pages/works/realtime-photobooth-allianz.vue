<script setup>
const pageTitle = "Real-Time LED Photobooth Experience";
const seoTitle =
  "Real-Time LED Photobooth Experience for Allianz ASN Kick Off Meeting 2026";
const seoDescription =
  "Real-Time LED Photobooth Experience is an interactive event project for Allianz ASN Kick Off Meeting 2026, combining digital signage photo capture, automatic background removal, football-themed visual compositing, and sequential real-time display across three large LED panels.";

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
    src: "/services/regist-example.jpg",
    alt: "Real-time LED photobooth experience for Allianz ASN Kick Off Meeting 2026",
  },
  {
    src: "/services/regist-example.jpg",
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
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Real-time LED photobooth activation for Allianz event",
    caption: "Allianz Event Photobooth",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Digital signage photo capture for event guests",
    caption: "Digital Signage Capture",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Automatic background removal for football-themed event visuals",
    caption: "Background Removal Process",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Photo launched to large LED panels in real time",
    caption: "Launch to LED Interaction",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Sequential photo rotation across three large LED screens",
    caption: "3-LED Rotation System",
  },
  {
    image: "/images/carousel-ai-pb/sample-ai.jpeg",
    alt: "Guests viewing their photobooth image on the LED wall",
    caption: "Real-Time LED Experience",
  },
];

const relatedProjects = [
  {
    title: "Realtime Photobooth",
    category: "Event Technology",
    image: "/services/varbel-regist.webp",
    alt: "Realtime photobooth activation with live event display",
    href: "/work-pages/realtime-photobooth",
    listClass: "md:col-start-1 md:col-end-3",
  },
  {
    title: "Branded Event Photobooth",
    category: "Custom Photobooth",
    image: "/services/varbel-regist.webp",
    alt: "Branded photobooth system for guest engagement",
    href: "/custom-photobooth",
    listClass: "md:col-start-3 md:col-end-5",
  },
  {
    title: "AI Photobooth",
    category: "Interactive Experience",
    image: "/services/varbel-regist.webp",
    alt: "Interactive AI photobooth for event activation",
    href: "/ai-photobooth-v2",
    listClass: "md:col-start-2 md:col-end-4",
  },
];
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
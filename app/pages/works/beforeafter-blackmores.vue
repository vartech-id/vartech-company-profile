<script setup>
const pageTitle = "Beauty After Photobooth";
const seoTitle =
  "Beauty After Photobooth Project - AI Before After Photobooth for Blackmores Product Launch";
const seoDescription =
  "Beauty After Photobooth is an interactive AI photobooth project developed for the Blackmores product launch, transforming guest portraits into before and after visuals inspired by three skincare-focused product stories and designed for QR download and social sharing.";

const seoImage = "/works/beauty-photobooth-before-after/carousel-assets/journey-1.webp";

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
          "AI Photobooth",
          "Brand Activation",
        ],
        about: [
          "Before After Photobooth",
          "Product Launch Activation",
          "QR Download Experience",
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
    src: "/works/beauty-photobooth-before-after/display-mockup.webp",
    alt: "Beauty After Photobooth AI activation for Blackmores product launch event",
  },
  {
    src: "/works/beauty-photobooth-before-after/carousel-assets/journey-3.webp",
    alt: "Before and after photobooth result inspired by Blackmores beauty product selection",
  },
];

const summaryItems = [
  {
    title: "Launch Event Activation",
    description:
      "This project was created for a Blackmores event introducing three products: Ultimate Vibrant Skin, Bio E 250 IU, and Ultimate Radiance Skin. The experience was designed for guests attending the launch, turning the photobooth into a branded beauty interaction instead of a standard photo activity.",
  },
  {
    title: "Product-Led Transformation Concept",
    description:
      "The core idea was to represent the perceived magic of each product through an interactive visual result. Guests could choose a product-inspired effect and see their portrait transformed into a before and after output that reflects themes such as brighter-looking skin, more hydrated-looking skin, or reduced appearance of fine lines.",
  },
  {
    title: "AI Beauty Photobooth Flow",
    description:
      "Participants take a photo at the booth and select the product story they want to explore. The system then processes the image and generates a transformed beauty result based on the chosen concept, creating a more personalized and memorable brand interaction.",
  },
  {
    title: "Before and After Output",
    description:
      "The final result is presented as a before and after photobooth visual, making the transformation easy to understand at a glance. This side-by-side format helps connect the guest experience directly to the product narrative being introduced at the event.",
  },
  {
    title: "QR Scan and Download Experience",
    description:
      "After the image is generated, guests can scan a QR code to access and download their result. This makes the experience practical on-site while also extending the interaction beyond the booth itself.",
  },
  {
    title: "Brand Sharing and Campaign Reach",
    description:
      "The project was designed not only to entertain guests at the launch but also to encourage them to share their transformed photobooth results online. This helped position the activation as a brand campaign tool that could amplify product visibility through visitor-generated content.",
    featured: true,
  },
];

const aboutText = [
  "Beauty After Photobooth is an interactive brand activation created for a Blackmores launch event introducing three products: Ultimate Vibrant Skin, Bio E 250 IU, and Ultimate Radiance Skin.",
  "Instead of delivering a standard photobooth, the objective was to build an experience that could visually represent the product storytelling behind the launch by transforming guest portraits into product-inspired beauty results.",
  "The final solution combined an AI-based before and after photobooth, product selection flow, QR download system, and shareable output designed to support both guest engagement and broader brand campaign visibility.",
].join(" ");

const carouselAssets = [
  {
    image:
      "/works/beauty-photobooth-before-after/carousel-assets/journey-1.webp",
    alt: "Blackmores Beauty After Photobooth showing before and after AI beauty transformation result at product launch event",
    caption: "AI Before After Beauty Result",
  },
  {
    image:
      "/works/beauty-photobooth-before-after/carousel-assets/journey-2.webp",
    alt: "Blackmores AI beauty photobooth screen displaying a hijab guest portrait with before and after product-inspired transformation",
    caption: "Product-Inspired Beauty Transformation",
  },
  {
    image:
      "/works/beauty-photobooth-before-after/carousel-assets/journey-3.webp",
    alt: "Blackmores beauty photobooth interface showing product benefits and QR download experience for event guests",
    caption: "Beauty Photobooth Result Preview",
  },
];

const relatedProjects = [
  {
    title: "AI Face Swap Photobooth",
    category: "AI Photobooth",
    image: "/services/varbel-regist.webp",
    alt: "AI photobooth experience for branded event engagement",
    href: "/work-pages/ai-face-swap-photobooth",
    listClass: "md:col-start-1 md:col-end-3",
  },
  {
    title: "Branded Event Photobooth",
    category: "Custom Photobooth",
    image: "/services/varbel-regist.webp",
    alt: "Custom branded photobooth for product launch and event activation",
    href: "/custom-photobooth",
    listClass: "md:col-start-3 md:col-end-5",
  },
  {
    title: "Realtime Photobooth",
    category: "Event Technology",
    image: "/services/varbel-regist.webp",
    alt: "Realtime event photobooth system with live visual output",
    href: "/work-pages/realtime-photobooth",
    listClass: "md:col-start-2 md:col-end-4",
  },
];
</script>

<template>
  <WorkLayout
    title="Beauty After Photobooth"
    heading-id="beauty-after-photobooth-title"
    showcase-title="Beauty After Photobooth Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Beauty After Photobooth Project Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

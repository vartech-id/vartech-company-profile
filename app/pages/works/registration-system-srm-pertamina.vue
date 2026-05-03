<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "QR-Based Registration & Souvenir Validation System";
const seoTitle =
  "QR-Based Registration & Souvenir Validation System for SRM Summit Pertamina 2025";
const seoDescription =
  "QR-Based Registration & Souvenir Validation System is a custom event registration project for SRM Summit Pertamina 2025, an internal Pertamina event held at DoubleTree by Hilton Jakarta Kemayoran on December 4, 2025. The system handled guest check-in validation, souvenir redemption validation, email invitation access, QR code scanning, and real-time registration display through digital signage.";

const seoImage =
  "/works/registration-system-srm-pertamina/carousel-assets/journey-1.webp";

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
          "QR-Based Registration and Souvenir Validation System for SRM Summit Pertamina 2025",
        description: seoDescription,
        image: seoImage,
        genre: [
          "Event Technology",
          "Registration System",
          "QR Code Check-In",
          "Digital Signage",
          "Souvenir Validation System",
        ],
        about: [
          "QR-Based Event Registration",
          "Guest Check-In Validation",
          "Souvenir Redemption Validation",
          "Email Invitation System",
          "Real-Time Registration Display",
          "Digital Signage for Events",
          "Internal Corporate Event Technology",
        ],
        keywords: [
          "event registration system",
          "QR code registration system",
          "QR code check-in",
          "souvenir validation system",
          "digital signage registration display",
          "corporate event registration",
          "Pertamina internal event",
          "SRM Summit Pertamina 2025",
          "event technology Jakarta",
          "custom registration system Indonesia",
        ],
        locationCreated: {
          "@type": "Place",
          name: "DoubleTree by Hilton Jakarta Kemayoran",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
          },
        },
        temporalCoverage: "2025-12-04",
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
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "SRM Summit Pertamina 2025",
        description:
          "SRM Summit Pertamina 2025 was an internal Pertamina event supported by a custom QR-based registration system for guest check-in validation, souvenir redemption validation, email invitation access, QR scanning, and real-time digital signage registration display.",
        startDate: "2025-12-04",
        endDate: "2025-12-04",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "DoubleTree by Hilton Jakarta Kemayoran",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "Pertamina",
        },
      }),
    },
  ],
});

const showcaseImages = [
  {
    src: "/works/registration-system-srm-pertamina/display-mockup.webp",
    alt: "QR-based registration and souvenir validation system for SRM Summit Pertamina 2025 internal Pertamina event at DoubleTree by Hilton Jakarta Kemayoran",
  },
  {
    src: "/works/registration-system-srm-pertamina/hero-display.png",
    alt: "Digital signage registration display showing guest name company and check-in time for SRM Summit Pertamina 2025",
  },
];

const summaryItems = [
  {
    title: "Email Invitation with Unique QR Code",
    description:
      "Guests received their SRM Summit Pertamina 2025 invitation through email with a unique QR code. This QR code became the main digital access credential for the event, making the registration flow easier to manage before guests arrived at the venue.",
  },
  {
    title: "Guest Check-In Validation",
    description:
      "The system was used to validate guest entry at the registration area. When a QR code was scanned, the system checked the guest data and confirmed whether the person was registered and eligible to enter the internal Pertamina event.",
  },
  {
    title: "Souvenir Redemption Validation",
    description:
      "Beyond guest entry, the same QR code was also used to validate souvenir collection. This helped the event team track which guests had already claimed their souvenirs and reduced the risk of duplicate redemption.",
  },
  {
    title: "One QR Code for Two Validation Flows",
    description:
      "Each guest only needed one QR code for both event check-in and souvenir pickup. This simplified the guest journey while giving the on-site team better control over multiple validation points using a single digital identity.",
  },
  {
    title: "QR Code Scanner for On-Site Operation",
    description:
      "One QR code scanner was provided for the registration team to support fast and practical guest validation. The scanner helped speed up the check-in process and made the flow easier for the event crew to operate during the event.",
  },
  {
    title: "Real-Time Digital Signage Registration Display",
    description:
      "A digital signage unit was used to display registration results on screen in real time, including guest name, company, and check-in time. This gave the event team clear registration visibility and created a more professional check-in experience inside the venue.",
    featured: true,
  },
];

const aboutText = [
  "QR-Based Registration & Souvenir Validation System is a custom event registration project developed for SRM Summit Pertamina 2025, an internal Pertamina event held at DoubleTree by Hilton Jakarta Kemayoran on December 4, 2025.",
  "For this project, we were trusted to handle the registration system that supported both guest check-in validation and souvenir redemption validation. Instead of using separate access methods, each guest received one unique QR code through their email invitation, which could be used for both event entry and souvenir collection.",
  "The final solution included a QR code scanner for on-site validation and one digital signage unit to display real-time registration activity on screen. The display showed guest name, company, and check-in time, helping the event team monitor attendance clearly while keeping the guest journey simple, fast, and organized.",
].join(" ");

const carouselAssets = [
  {
    image:
      "/works/registration-system-srm-pertamina/carousel-assets/journey-1.webp",
    alt: "SRM Summit Pertamina 2025 registration booth with digital signage, QR scanner, and on-site check-in desk for internal Pertamina event guests",
    caption: "On-Site Registration Booth Setup",
  },
  {
    image:
      "/works/registration-system-srm-pertamina/carousel-assets/journey-2.webp",
    alt: "Digital registration system setup for SRM Summit Pertamina 2025 with QR code scan instruction, scanner device, and operator dashboard at the check-in desk",
    caption: "QR Check-In Validation System",
  },
  {
    image: "/works/registration-system-srm-pertamina/hero-display.png",
    alt: "SRM Summit Pertamina 2025 registration area featuring branded digital signage, QR code scanner, and operator desk for guest check-in and souvenir validation",
    caption: "Integrated Registration and Souvenir Validation",
  },
];

const relatedProjects = getRelatedProjects("/works/registration-system-srm-pertamina");
</script>

<template>
  <WorkLayout
    title="QR-Based Registration & Souvenir Validation System"
    heading-id="qr-based-registration-souvenir-validation-system-title"
    showcase-title="QR-Based Registration & Souvenir Validation System Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="SRM Summit Pertamina 2025 Registration System Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

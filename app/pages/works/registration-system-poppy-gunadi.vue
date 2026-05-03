<script setup>
import { getRelatedProjects } from "~/data/related-projects";

const pageTitle = "Poppy Gunadi 80th Birthday Guest Registration System";

const seoTitle =
  "Event Registration & QR Check-In System for 80th of Poppy Gunadi";

const seoDescription =
  "A custom event registration and QR check-in system for the 80th birthday celebration of Poppy Gunadi, managing approximately 380 invited guests through online RSVP, WhatsApp and email invitation blast, QR code invitation delivery, reminder automation, on-site scan validation, live guest display, and manual help desk support.";

const seoImage = "/works/registration-system-poppy-gunadi/carousel-assets/journey-1.webp";

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
        "@graph": [
          {
            "@type": "CreativeWork",
            name: pageTitle,
            headline: seoTitle,
            description: seoDescription,
            image: seoImage,
            genre: [
              "Event Registration System",
              "QR Code Check-In System",
              "Invitation Management System",
              "Guest Management System",
              "Event Technology",
            ],
            about: [
              "Event Registration",
              "QR Code Invitation",
              "Guest Check-In",
              "WhatsApp Invitation Blast",
              "Email Invitation Blast",
              "Event Reminder Automation",
              "On-Site Help Desk Validation",
              "Birthday Event Guest Management",
            ],
            creator: {
              "@type": "Organization",
              name: "Vartech",
            },
            publisher: {
              "@type": "Organization",
              name: "Vartech",
            },
          },
          {
            "@type": "Service",
            name: "Custom Event Registration and QR Check-In System",
            description:
              "A custom guest registration solution for private and corporate events, including online RSVP, guest database preparation, QR code invitation delivery, WhatsApp and email invitation blast, reminder scheduling, on-site QR scan validation, live guest display, and manual help desk support.",
            provider: {
              "@type": "Organization",
              name: "Vartech",
            },
            serviceType: [
              "Event Registration System",
              "QR Code Check-In",
              "Digital Invitation Management",
              "Guest Attendance Validation",
              "Event Technology Solution",
            ],
            areaServed: {
              "@type": "Country",
              name: "Indonesia",
            },
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What was the registration system built for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The system was built to manage approximately 380 invited guests for the 80th birthday celebration of Poppy Gunadi, covering invitation distribution, guest registration, QR code delivery, reminder communication, and on-site attendance validation.",
                },
              },
              {
                "@type": "Question",
                name: "How did guests receive their invitation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Guests received their invitation through WhatsApp and email. The invitation included a QR code that could be scanned at the event venue for check-in validation.",
                },
              },
              {
                "@type": "Question",
                name: "How did the QR check-in process work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When guests arrived at the venue, they showed the QR code from their invitation. The QR code was scanned into the system, validated against the guest database, displayed on screen, and the guest was allowed to enter.",
                },
              },
              {
                "@type": "Question",
                name: "Was manual registration support available on-site?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A help desk was available for guests who had difficulty registering, could not access their invitation, or required manual data validation before entering the event.",
                },
              },
            ],
          },
        ],
      }),
    },
  ],
});

const showcaseImages = [
  {
    src: "/works/registration-system-poppy-gunadi/display-mockup.webp",
    alt: "Custom event registration and QR check-in system for 80th of Poppy Gunadi birthday celebration",
  },
  {
    src: "/works/registration-system-poppy-gunadi/card-cover.webp",
    alt: "Guest QR code invitation scan and attendance validation system for private birthday event registration",
  },
];

const summaryItems = [
  {
    title: "Guest Database Management",
    description:
      "The event involved approximately 380 invited guests. Some guests registered through the invitation link, while manually prepared guest data from the event team was imported and managed inside the registration system.",
  },
  {
    title: "Online Invitation Link",
    description:
      "Guests who needed to register independently could access a dedicated invitation link. This made the RSVP process easier and helped collect guest information in a more structured and searchable format.",
  },
  {
    title: "WhatsApp and Email Invitation Blast",
    description:
      "For guests whose data had already been prepared by the event team, the system supported invitation distribution through WhatsApp and email. Each invitation included event information and a unique QR code for check-in.",
  },
  {
    title: "H-7 Invitation Delivery",
    description:
      "Seven days before the event, invitations were sent to registered and listed guests through WhatsApp and email. This gave guests enough time to receive, save, and prepare their digital invitation before attending.",
  },
  {
    title: "H-3 Attendance Reminder",
    description:
      "Three days before the event, reminder messages were sent to guests, encouraging them to attend and bring the QR code invitation that had been shared through WhatsApp or email.",
  },
  {
    title: "QR Code Check-In Validation",
    description:
      "At the venue, guests showed their QR invitation to the registration team. The QR code was scanned into the system, validated against the guest database, displayed on screen, and the guest was then allowed to enter.",
    featured: true,
  },
  {
    title: "Live Guest Display",
    description:
      "After the QR code was scanned successfully, the guest data appeared on the registration screen. This helped the on-site team confirm attendance quickly and keep the check-in process clear and organized.",
  },
  {
    title: "Manual Help Desk Support",
    description:
      "For guests who had difficulty registering, could not access their invitation, or needed additional validation, a help desk was available on-site to manually check, input, and validate guest data.",
  },
];

const aboutText = [
  "Event Registration & QR Check-In System for 80th of Poppy Gunadi is a custom guest management project created for the 80th birthday celebration of Ibu Poppy Gunadi.",
  "For this event, we were trusted to manage the invitation and attendance flow for approximately 380 invited guests, combining online registration, prepared guest database management, WhatsApp invitation blast, email invitation delivery, QR code check-in, reminder communication, and on-site manual help desk support.",
  "The registration flow was designed around two main guest entry methods. First, guests could register through the invitation link provided by the system. Second, guests whose information had already been collected manually by the event team were imported into the system and then received their invitation through WhatsApp and email.",
  "Seven days before the event, the invitation was sent to guests through WhatsApp and email. Three days before the event, a reminder was sent to help ensure guests remembered to attend and bring the QR code invitation that had already been shared with them.",
  "On the event day, guests arrived at the venue, showed their QR code invitation, and the registration team scanned the code into the system. Once validated, the guest information appeared on screen and the guest was allowed to enter. For guests who had difficulty registering or accessing their invitation, the help desk team could manually check and validate their data.",
  "This project shows how a custom event registration system can help private events, birthday celebrations, corporate gatherings, and invitation-only events create a more organized check-in process, reduce manual guest handling, and improve the overall arrival experience.",
].join(" ");

const carouselAssets = [
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-1.webp",
    alt: "Event crew assisting a guest during the on-site digital registration process for Poppy Gunadi 80th birthday celebration",
    caption: "Guest Assisted Registration",
  },
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-2.webp",
    alt: "Invited guest validating registration details with event staff using the digital guest check-in system at Poppy Gunadi birthday event",
    caption: "Digital Guest Validation",
  },
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-3.webp",
    alt: "Event reception team presenting printed guest information and registration materials for the private Poppy Gunadi birthday celebration",
    caption: "Reception Team and Guest Materials",
  },
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-4.webp",
    alt: "Guests completing the registration and validation process at the check-in desk for Poppy Gunadi 80th birthday event",
    caption: "On-Site Check-In Desk",
  },
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-5.webp",
    alt: "Event staff helping an invited guest verify attendance through the digital registration system at the private birthday celebration",
    caption: "Personalized Guest Assistance",
  },
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-6.webp",
    alt: "Guest receiving help from the reception crew during the invitation validation and event check-in process",
    caption: "Invitation Validation Support",
  },
  {
    image: "/works/registration-system-poppy-gunadi/carousel-assets/journey-7.webp",
    alt: "Multiple guests checking in through the event registration desk with digital validation devices for a private invitation-only birthday event",
    caption: "Multi-Guest Registration Flow",
  },
];

const relatedProjects = getRelatedProjects("/works/registration-system-poppy-gunadi");
</script>

<template>
  <WorkLayout
    title="Poppy Gunadi 80th Birthday Guest Registration System"
    heading-id="poppy-gunadi-registration-system-title"
    showcase-title="Guest Registration & QR Check-In System Showcase"
    about-title="About"
    summary-title="Project Summary"
    gallery-title="Poppy Gunadi Registration System Gallery"
    related-title="Related Projects"
    :showcase-images="showcaseImages"
    :about="aboutText"
    :summary-items="summaryItems"
    :gallery-slides="carouselAssets"
    :related-projects="relatedProjects"
  />
</template>

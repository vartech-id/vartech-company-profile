import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-03-16",
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmailTo: process.env.CONTACT_EMAIL_TO,
    contactEmailFrom: process.env.CONTACT_EMAIL_FROM,
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["embla-carousel-vue"],
    },
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/content"],
});

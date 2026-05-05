import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-03-16",
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmailTo: process.env.CONTACT_EMAIL_TO,
    contactEmailFrom: process.env.CONTACT_EMAIL_FROM,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://vartech.id',
    }
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://vartech.id',
  },

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },

  vite: {
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('embla-carousel')) {
              return 'embla';
            }
          },
        },
      },
    },
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

  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/content", "@nuxtjs/sitemap"],
});

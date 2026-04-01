import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-03-16',
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/image'],
})
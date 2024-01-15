// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon"],
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'RunMyEcom- Your Gateway to Tailored E-Commerce Excellence',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
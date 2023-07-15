// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  devtools: { enabled: true },

  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: "netlify",
  },
});

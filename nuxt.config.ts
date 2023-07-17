// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target:'static',
  ssr: true,
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@pinia/nuxt", "@vee-validate/nuxt"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
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

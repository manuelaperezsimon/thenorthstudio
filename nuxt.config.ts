// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  devtools: { enabled: true },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "https://royaloceanyachts.com/api/yachts?buy=true&page=1",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
  googleFonts: {
    families: {
      "Frank Ruhl Libre": [400, 500, 600, 700],
    },
    display: "swap",
  },
});

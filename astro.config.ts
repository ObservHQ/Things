import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

export default defineConfig({
  site: "https://www.observhq.com",
  adapter: vercel(),
  output: "hybrid",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    unocss({ injectReset: true }),
    vue(),
  ],
  server: {
    port: 6969,
  },
  markdown: { shikiConfig: { theme: "vitesse-dark", wrap: true } },
});

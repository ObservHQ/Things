import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import vercel from '@astrojs/vercel/serverless'
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"
import unocss from "unocss/astro"
import vesper from "./src/lib/vesper.json"

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markdown: { shikiConfig: { theme: vesper, wrap: true } },
})

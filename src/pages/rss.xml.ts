import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getCollection } from "astro:content"
import MarkdownIt from "markdown-it"
import sanitizeHtml from "sanitize-html"
import { sortPostsByDate } from "../lib/date"

const parser = new MarkdownIt()

export async function get({ site }: APIContext) {
  const posts = sortPostsByDate(await getCollection("blog"))

  return rss({
    title: "ObservHQ Blog",
    description: "Writings on programming and technology.",
    site: String(site),
    stylesheet: "/rss/styles.xsl",
    items: posts.map(({ body, slug, data: { title, description, date: pubDate } }) => ({
      title,
      description,
      pubDate,
      link: `/blog/${slug}`,
      content: sanitizeHtml(parser.render(body)),
    })),
    customData: "<language>en-us</language>",
  })
}

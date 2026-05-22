import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { siteConfig } from './src/config/site.config'

export default defineConfig({
  output: "static",
  site: 'https://lt-20260522-042729105-astrolify-01-9105-671b8e01.pages.dev',
  integrations: [sitemap()],
})

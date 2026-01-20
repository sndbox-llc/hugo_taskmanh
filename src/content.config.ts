import { defineCollection } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
}

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_ACCESS_TOKEN: string
}

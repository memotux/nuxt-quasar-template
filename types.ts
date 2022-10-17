import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

export interface ContentPost extends MarkdownParsedContent {
  date?: string
  status?: 'publish' | 'draft'
  permalink?: string
  author?: string
  type?: 'post' | 'page'
  id?: number
  thumbnail?: string
  category?: string[]
  tag?: string[]
}
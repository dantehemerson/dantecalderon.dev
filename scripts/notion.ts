import dotenv from 'dotenv'

dotenv.config({
  path: `${process.cwd()}/.env.development`,
})

import _ from 'lodash'
import { Client } from '@notionhq/client'
import Mustache from 'mustache'
import { NotionToMarkdown } from '@dantehemerson/notion-to-md'
import * as md from '@dantehemerson/notion-to-md/build/utils/md'

import fs from 'fs'
import { markdownHeaderTemplate } from './templates'
import { downloadImageAndGetPath } from './helpers/notion.helpers'

const { NOTION_SECRET } = process.env

if (!NOTION_SECRET) throw new Error('Missing NOTION_SECRET env')

const notion = new Client({
  auth: NOTION_SECRET,
})

async function imageParser(block) {
  let blockContent = block.image
  const image_caption_plain = blockContent.caption.map(item => item.plain_text).join('')
  const image_type = blockContent.type

  let imageUrl = undefined
  if (image_type === 'external') {
    imageUrl = blockContent.external.url
  } else if (image_type === 'file') {
    imageUrl = blockContent.file.url
  }

  console.log('🤫 Dante ➤ imageParser ➤ image_url', imageUrl)

  return md.image(image_caption_plain, imageUrl)
}

const n2m = new NotionToMarkdown({ notionClient: notion })
n2m.setCustomTransformer('image', imageParser)
;(async () => {
  await downloadImageAndGetPath('')
  return

  const pageId = process.argv[2]
  const pageData: any = await notion.pages.retrieve({
    page_id: pageId,
  })
  console.log('🤫 Dante ➤ ; ➤ pageData')

  const pageInfo: any = {}

  const mdblocks = await n2m.pageToMarkdown(pageId, 100)
  console.log('🤫 Dante ➤ ; ➤ mdblocks', mdblocks)
  pageInfo.content = n2m.toMarkdownString(mdblocks)

  pageInfo.createdAtDate = pageData.created_time.slice(0, 10)
  pageInfo.createdAt = pageData.created_time
  pageInfo.slug = pageData.properties.slug.rich_text[0].text.content
  pageInfo.tags = pageData.properties.tags.multi_select.map(tag => tag.name)
  pageInfo.published = Boolean(pageData.properties.published.checkbox)
  pageInfo.description = pageData.properties.description.rich_text[0].text.content
  pageInfo.pathPrefix = pageData.properties.pathPrefix.select.name || 'blog'
  pageInfo.title = pageData.properties.name.title[0].text.content
  pageInfo.filePath = `./content/blog/${pageInfo.createdAtDate}-${pageInfo.slug}.mdx`
  pageInfo.externalImage =
    _.get(pageData.cover, 'external.url') || _.get(pageData.cover, 'file.url')

  // console.log('🤫 Dante ➤ ; ➤ pageInfo', pageInfo)

  const textContent = Mustache.render(markdownHeaderTemplate, pageInfo)
  // console.log('🤫 Dante ➤ ; ➤ textContent', textContent)

  // console.log(textContent)

  fs.writeFileSync(pageInfo.filePath, textContent, { encoding: 'utf-8' })

  console.log('Notion page imported correcly!!!')
})()

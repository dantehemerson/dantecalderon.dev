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
import { downloadImageAndGetPath, getNotionImageData } from './helpers/notion.helpers'

const { NOTION_SECRET } = process.env

if (!NOTION_SECRET) throw new Error('Missing NOTION_SECRET env')

const notion = new Client({
  auth: NOTION_SECRET,
})

;(async () => {
  const n2m = new NotionToMarkdown({ notionClient: notion })

  const pageId = process.argv[2]
  const pageData: any = await notion.pages.retrieve({
    page_id: pageId,
  })
  console.log('🤫 Dante ➤ ; ➤ pageData', pageData)

  const imageParser = async block => {
    let blockContent = block.image
    const image_caption_plain = blockContent.caption.map(item => item.plain_text).join('')
    const image_type = blockContent.type

    let imageUrl = undefined
    if (image_type === 'external') {
      imageUrl = blockContent.external.url
    } else if (image_type === 'file') {
      imageUrl = blockContent.file.url
    }

    const imageData = getNotionImageData(imageUrl, pageId)

    await downloadImageAndGetPath(imageData)

    return md.image(image_caption_plain, imageData.filePathFromBlog)
  }

  n2m.setCustomTransformer('image', imageParser)

  const pageInfo: any = {}

  const mdblocks = await n2m.pageToMarkdown(pageId, 100)
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
  const coverImage = _.get(pageData.cover, 'external.url') || _.get(pageData.cover, 'file.url')

  const coverImageData = getNotionImageData(coverImage, pageId)
  console.log('🤫 Dante ➤ ; ➤ coverImageData', coverImageData)
  pageInfo.image = coverImageData.filePathFromBlog

  await downloadImageAndGetPath(coverImageData)

  // console.log('🤫 Dante ➤ ; ➤ pageInfo', pageInfo)

  const textContent = Mustache.render(markdownHeaderTemplate, pageInfo)
  // console.log('🤫 Dante ➤ ; ➤ textContent', textContent)

  // console.log(textContent)

  fs.writeFileSync(pageInfo.filePath, textContent, { encoding: 'utf-8' })

  console.log('Notion page imported correcly!!!')
})()

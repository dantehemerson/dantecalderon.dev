require('dotenv').config({
  path: `${process.cwd()}/.env.development`,
})

const { Client } = require('@notionhq/client')
const Mustache = require('mustache')
const { NotionToMarkdown } = require('notion-to-md')
const fs = require('fs')
const { markdownHeaderTemplate } = require('./templates')

const { NOTION_SECRET } = process.env

if (!NOTION_SECRET) throw new Error('Missing NOTION_SECRET env')

const notion = new Client({
  auth: NOTION_SECRET,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

;(async () => {
  const pageId = 'a6dfe4142490406d84ecdf45501c378d'
  const pageData = await notion.pages.retrieve({
    page_id: pageId,
  })

  const pageInfo = {}

  const mdblocks = await n2m.pageToMarkdown(pageId)
  console.log('🤫 Dante ➤ ; ➤ mdblocks', mdblocks.slice(0, 8))
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

  // console.log('🤫 Dante ➤ ; ➤ pageInfo', pageInfo)

  const textContent = Mustache.render(markdownHeaderTemplate, pageInfo)
  // console.log('🤫 Dante ➤ ; ➤ textContent', textContent)

  fs.writeFileSync(pageInfo.filePath, textContent)
})()

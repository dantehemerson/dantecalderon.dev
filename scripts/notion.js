require('dotenv').config({
  path: `${process.cwd()}/.env.development`,
})

const { Client } = require('@notionhq/client')
const { NotionToMarkdown } = require('notion-to-md')
const fs = require('fs')

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
  pageInfo.createdAtDate = pageData.created_time.slice(0, 10)
  pageInfo.slug = pageData.properties.slug.rich_text[0].text.content
  pageInfo.tags = pageData.properties.tags.multi_select.map(tag => tag.name)
  pageInfo.published = Boolean(pageData.properties.published.checkbox)
  pageInfo.description = pageData.properties.description.rich_text[0].text.content
  pageInfo.pathPrefix = pageData.properties.pathPrefix.select.name || 'blog'
  pageInfo.title = pageData.properties.name.title[0].text.content

  console.log('🤫 Dante ➤ ; ➤ pageInfo', pageInfo)

  // console.log('🤫 Dante ➤ ; ➤ pageData', JSON.stringify(pageData, null, 2))
  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)

  //writing to file
  fs.writeFile('test.md', mdString, err => {
    console.log(err)
  })
})()

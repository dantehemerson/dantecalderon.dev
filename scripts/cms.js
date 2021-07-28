#!/usr/bin/env node

const Mustache = require('mustache')
const slugify = require('slugify')
const inquirer = require('inquirer')
const fs = require('fs')

const blogPostTemplate = `---
model: post
title: {{ title }}
description: {{ title }}.
author: Dante Calderón
pathPrefix: blog
slug: {{ slug }}
image: ../images/mongodb_1.png
date: '{{ date }}'
published: true
tags:
  - tag1
---

### {{ title }}

Start writting here
`

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Post title:',
  },
]

const peruGMT = 5 // hours
function getDateInfo() {
  const today = new Date()
  today.setHours(today.getHours() - peruGMT)

  return {
    date: today.toISOString().substr(0, 19) + '-05:00',
    localeDate: today.toISOString().substr(0, 10),
  }
}

async function main() {
  const answer = await inquirer.prompt(questions)

  const postOptions = {
    ...answer,
    ...getDateInfo(),
    slug: slugify(answer.title, { lower: true }),
  }
  postOptions.filePath = `./content/blog/${postOptions.localeDate}-${postOptions.slug}.md`

  console.log('📄 Creating post file with these options: ', postOptions)

  const postContent = Mustache.render(blogPostTemplate, postOptions)

  fs.writeFileSync(postOptions.filePath, postContent)
}

main()

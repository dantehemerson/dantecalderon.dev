export const markdownHeaderTemplate = `---
model: post
title: {{ title }}
description: {{ description }}
author: Dante Calderón
pathPrefix: blog
slug: {{ slug }}
{{#image}}
image: {{{ image }}}
{{/image}}
{{#externalImage}}
externalImage: {{{ externalImage }}}
{{/externalImage}}
date: '{{ createdAt }}'
published: {{ published }}
tags:
{{#tags}}
  - {{.}}
{{/tags}}
---
{{{ content }}}
`

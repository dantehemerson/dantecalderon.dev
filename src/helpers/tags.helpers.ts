import kebabCase from 'lodash/kebabCase'
import { ITag, tags } from '../data/tags'

export function generateTagInfo(tagPlain): ITag {
  const tagSlug = kebabCase(tagPlain.toLowerCase())

  return {
    title: tagPlain,
    slug: tagSlug,
    color: '#dcdcdc',
    textColor: '#6a6a6a',
    ...tags[tagSlug],
  }
}

export function getTagInfoSelected(tagSlug): ITag {
  return {
    title: tagSlug,
    slug: tagSlug,
    color: '#515151',
    textColor: 'white',
    ...tags[tagSlug],
  }
}

export function makeSlugForTag(tagPlain): string {
  const tagSlug = kebabCase(tagPlain.toLowerCase())

  const existCustomTag = Boolean(tags[tagSlug])
  if (existCustomTag) {
    return tags[tagSlug].slug
  }

  return tagSlug
}

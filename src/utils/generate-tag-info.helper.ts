import { kebabCase } from 'lodash'
import { ITag, tags } from '../data/tags'

export function generateTagInfo(tagPlain): ITag {
  console.log('🤫 Dante ➤ generateTagInfo ➤ tagPlain', tagPlain)
  const tagSlug = kebabCase(tagPlain.toLowerCase())

  return {
    title: tagPlain,
    slug: tagSlug,
    color: '#dcdcdc',
    textColor: '#6a6a6a',
    ...tags[tagSlug],
  }
}

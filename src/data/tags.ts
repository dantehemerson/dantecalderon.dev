import tagsJSON from '../../content/tags.json'

export interface ITag {
  title: string,
  slug: string,
  color?: string,
  textColor?: string
}

export const tags: Record<string, ITag> = tagsJSON

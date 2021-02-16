export const pages = {
  home: '',
  blog: 'Blog',
  about: 'About',
  portfolio: 'Portfolio',
  contact: 'Contact',
}

export const preferSpacedTag = tags => {
  for (const tag of tags) {
    if (!tag.includes(` `)) {
      return tag
    }
  }
  return tags[0]
}

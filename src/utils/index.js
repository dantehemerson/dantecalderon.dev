export const pages = {
	home: '',
	blog: 'Blog',
	about: 'About',
	portfolio: 'Portfolio',
	contact: 'Contact',
}

export const getLinkEditPost = (absolutePath) => {
  const res = /([^/]+)$/g.exec(absolutePath)
  if(res.length >= 1) {
    return res[res.length - 1]
  }
  return ''
}

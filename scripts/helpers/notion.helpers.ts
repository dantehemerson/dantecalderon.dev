import { fetchRemoteFile } from 'gatsby-core-utils'
import { createFilePath } from 'gatsby-core-utils/dist/filename-utils'
import * as _gatsbyUtils from 'gatsby-core-utils/dist/filename-utils'
import path from 'path'
import { existsSync } from 'fs'

// Missing some interfaces in gatsby-core-utils
const gatsbyUtils = _gatsbyUtils as any

export type NotionLocalImageData = {
  url: string
  directory: string
  name: string
  ext: string
  filePathFromRoot: string
  filePathFromBlog: string
}

export function getNotionImageData(imageUrl): NotionLocalImageData {
  const directory = './content/images'
  let name = imageUrl.split('notion-static.com/')[1].split('?')[0]
  const ext = gatsbyUtils.getRemoteFileExtension(imageUrl)
  // Remove the extension from the name
  name = name.replace(ext, '')

  const fullFileName = createFilePath('', name, ext)

  const filePathFromBlog = path.join('../images', fullFileName)
  const filePathFromRoot = path.join(directory, fullFileName)

  return {
    url: imageUrl,
    directory,
    name,
    ext,
    filePathFromRoot,
    filePathFromBlog,
  }
}

export async function downloadImageAndGetPath(imageData: NotionLocalImageData): Promise<void> {
  const { filePathFromRoot, url, directory, name } = imageData

  if (existsSync(filePathFromRoot)) {
    console.log('Image already exists', filePathFromRoot)
    return
  }

  await fetchRemoteFile({
    url,
    directory,
    name,
    excludeDigest: true,
  })
}

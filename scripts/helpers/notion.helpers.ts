import { fetchRemoteFile } from 'gatsby-core-utils'

export async function downloadImageAndGetPath(imageUrl: string) {
  const result = await fetchRemoteFile({
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/52efbfef-e1ad-4b19-bf13-1f14077cb9b7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220725T052248Z&X-Amz-Expires=3600&X-Amz-Signature=a95914edf122f85614f99c0b2b3e9eba84ea1b194639c047cd3076b129a8efab&X-Amz-SignedHeaders=host&x-id=GetObject',
    directory: './content/images',
  })
  console.log('🤫 Dante ➤ downloadImageAndGetPath ➤ result', result)
  return result
}

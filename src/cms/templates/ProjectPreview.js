import React from 'react'
import { Post } from '../../templates/PostTemplate'

const PostPreview = ({ entry, widgetFor, getAsset }) => (
  <Post
    content={widgetFor('body')}
    image={getAsset(entry.getIn(['data', 'thumbnail']))}
    frontmatter={{
      style: entry.getIn(['data', 'style']),
      title: entry.getIn(['data', 'title'])
    }}
  />
)

export default PostPreview

import React from 'react'
import Content from '../../components/Content'


const Template = ({ content }) => {
  const PostContent = Content
  return (
    <div>
      JJAJJAJAJ
      <PostContent content={content}/>
    </div>
  )
}

const PostPreview = ({ entry, widgetFor }) => (
  <Template
    content={widgetFor('body')}/>
)

export default PostPreview

import React from 'react'
import Markdown from '../../components/Markdown'

const PostPreview = ({ entry, widgetFor, getAsset }) => <Markdown content={widgetFor('body')} isHtml />

export default PostPreview

import React from 'react'
import get from 'lodash/get'
import head from 'lodash/head'
import last from 'lodash/last'
import split from 'lodash/split'
import getObj from 'ast-get-object'

import Content, { HTMLContent } from '../components/Content'

export const Post = ({ 
  content,
  frontmatter,
  previous,
  next,
  siteTitle,
  image,
  siteUrl,
  contentComponent,
}) => {
	const PostContent = contentComponent || Content
	return (
		<div style={{
			marginLeft: 'auto',
        marginRight: 'auto',  // Falta       
		}}>

			<h1>{ frontmatter.title }</h1>
			<p 
				style={{
					color: 'red',
				}}
				>
				{ frontmatter.date }
			</p>
			<PostContent content={content} className="post" />
			<hr style={{
					marginBottom: '16px',
			}} 
			/>			
		</div>
	)
}

export default class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteMetadata = get(this.props, 'data.site.siteMetadata')
		const { previous, next } = this.props.pathContext

		const ast = post.htmlAst
		const images = getObj(ast, { type: 'element', tagName: 'img' })
		const image = head(split(last(get(head(images), 'properties.srcSet')), ' '))

		return (
			<Post 
				{ ...post }
				{ ...siteMetadata}
				previous={previous}
				next={next}
				content={post.html}
				contentComponent={HTMLContent}
				image={image}
				/>
		)
	}
}

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		markdownRemark(frontmatter: { path: { eq: $slug } }) {
			id
			html
			htmlAst
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				thumbnail
				path
			}
		}
	}
`
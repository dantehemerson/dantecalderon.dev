import React from 'react'
import get from 'lodash/get'
import head from 'lodash/head'
import last from 'lodash/last'
import split from 'lodash/split'
import getObj from 'ast-get-object'

import Content, { HTMLContent } from '../components/Content'

export const Post = ({ content, frontmatter, previous, next, siteTitle, image, siteUrl, contentComponent }) => {
	const PostContent = contentComponent || Content
	return (
		<div className="container Post">
			<h1 className="Post__title">{ frontmatter.title }</h1>
			<p className="Post__date">{ frontmatter.date }</p>			
			<PostContent content={content} className="post"/>
		</div>
	)
}

export default class BlogPostTemplate extends React.Component {
	componentDidMount() {
		/* Remueve los underlines de los links que contienen imagen */
		let links = document.getElementsByTagName('a')
		for (const link of links) {			
			if(link.getElementsByTagName('img').length > 0) {
				link.style.backgroundImage = 'inherit'
			}
		}
	}
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
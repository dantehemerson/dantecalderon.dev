import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import get from 'lodash/get'
import ReactDisqusComments from 'react-disqus-comments'

import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO'
import AuthorPost from '../components/AuthorPost'
import AuthorPostFooter from '../components/AuthorPostFooter'
import Share from '../components/Share'
import Layout from '../components/Layout'
import Project from './Project'

export const Post = ({ content, frontmatter, previous, next, siteTitle, image, siteUrl, contentComponent, timeToRead, avatar, model }) => {
	const PostContent = contentComponent || Content
	return (
		<div className={`Post ${ frontmatter.style }`}>
			<div className="Post__header">
				<div className="Post__header__data">
					<h1 className="Post__title">{ frontmatter.title }</h1>									
					<AuthorPost
						date={ frontmatter.date }
						timeToRead={timeToRead}
						avatar={avatar}						
						/>					
				</div>
				{
					frontmatter.style !== 'default' &&
					<div className="Post__header__image">
						<Img sizes={ image }/>
					</div>
				}
			</div>			
			<PostContent content={content} className="container Post__content"/>				
			<div className="wrapper-post">
				<div className="Foot__Share">
					<Share title={frontmatter.title} url={`https://dantecalderon.com/` + frontmatter.path}/>
				</div>
				<div className="Foot__AuthorPost">				
					<AuthorPostFooter
							date={ frontmatter.date }
							timeToRead={timeToRead}
							avatar={avatar}/>
				</div>
			</div>
		</div>
	)
}

export default class BlogPostTemplate extends React.Component {
	state = {
		location: '',
		show_share: false
	}

	componentDidMount() {
		let links = document.getElementsByTagName('a')
		for (const link of links) {
			if(link.getElementsByTagName('img').length > 0 || link.getElementsByTagName('svg').length > 0  ) {
				link.style.backgroundImage = 'inherit'
			}
		}
		this.setState({ location: window.location.href })
		let body = document.documentElement
		let contentY = document.getElementById('Post_content').offsetTop
		let height = document.getElementById('Post_content').clientHeight

		const scrollListenerShare = () => {
			let y = body.scrollTop - contentY + 110
			let show = y >= 0 && y - 0 <= height - 340

			if(this.state.show_share !== show) {
				this.setState({ 'show_share': show })
			}
		}

		window.addEventListener('scroll', scrollListenerShare)
	}

	render() {
		const post = this.props.data.markdownRemark
		const siteMetadata = get(this.props, 'data.site.siteMetadata')
		const { previous, next } = this.props.pageContext // replaced of pathContext
		return (
				<Layout location={ this.props.location }>
					<div>
						<SEO
							title={ post.frontmatter.title }
							url={ `${siteMetadata.siteUrl}/${post.frontmatter.path}` }
							//image={`https://dantecalderon.com${post.fields.thumbnail.childImageSharp.responsiveSizes.src}`}
							description={ post.frontmatter.description }
							isPost={ true }
						/>
						{
							post.frontmatter.model === 'post' ?
								<Post
									{ ...post }
									{ ...siteMetadata }
									previous={ previous }
									next={ next }
									content={ post.html }
									contentComponent={ HTMLContent }
									image={ post.fields.thumbnail.childImageSharp.sizes }
									avatar={ this.props.data.avatar }
									/>
								: <Project
										{ ...post }
										{ ...siteMetadata }
										previous={ previous }
										next={ next }
										content={ post.html }
										contentComponent={ HTMLContent }
										image={ post.fields.thumbnail.childImageSharp.sizes }
										avatar={ this.props.data.avatar }
										/>
						}
							<div className="Post__footer">
								
									<div id="disquser" className="container Disqus">
										<ReactDisqusComments
													shortname="dantecalderon"
													identifier={ post.frontmatter.path }
													title={ post.frontmatter.title }
													url={ this.state.location }/>
									</div>
								
								{
									post.frontmatter.model === 'post' &&
									<Share fixed show={ this.state.show_share }
									 	title={post.frontmatter.title}
										url={`https://dantecalderon.com/` + post.frontmatter.path}/>
								}
							</div>
					</div>
				</Layout>
		)
	}
}

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		avatar: imageSharp(fluid: {originalName: { regex: "/avatar2.jpeg/" } }) {
		  sizes(maxWidth: 720) {
		   	...GatsbyImageSharpSizes_tracedSVG
		  }
		}
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
			timeToRead
			frontmatter {
				title
				subtitle
				date(formatString: "MMMM DD, YYYY")
				description
				thumbnail
				path
				model
				style
			}
			fields {
				thumbnail {
					childImageSharp {
						sizes(maxWidth: 1920) {
    					...GatsbyImageSharpSizes_tracedSVG
    				}
					}
				}
			}
		}
	}
`
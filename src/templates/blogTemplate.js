import React from 'react'
import Img from 'gatsby-image'
import get from 'lodash/get'
import getObj from 'ast-get-object'
import ReactDisqusComments from 'react-disqus-comments'

import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO'
import AuthorPost from '../components/AuthorPost'
import Share from '../components/Share'

export const Post = ({ content, frontmatter, previous, next, siteTitle, image, siteUrl, contentComponent, timeToRead, avatar }) => {
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
						header
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
					<AuthorPost 
							date={ frontmatter.date }
							timeToRead={timeToRead}
							avatar={avatar}
								/>						
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

			if(this.state.show_share != show) {				
				this.setState({ 'show_share': show })		
			}
		}
		
		window.addEventListener('scroll', scrollListenerShare)		
	}

	render() {
		const post = this.props.data.markdownRemark		
		const siteMetadata = get(this.props, 'data.site.siteMetadata')		
		const { previous, next } = this.props.pathContext
		const ast = post.htmlAst
		const images = getObj(ast, { type: 'element', tagName: 'img' })
		return (
			<div>
				<SEO
					title={ post.frontmatter.title }
					url={ `${siteMetadata.siteUrl}/${post.frontmatter.path}` } 
					image={`https://dantecalderon.com${post.fields.thumbnail.childImageSharp.responsiveSizes.src}`}
					description={ post.frontmatter.description }     
					isPost={ true }
				/>
				<Post 
					{ ...post }
					{ ...siteMetadata }
					previous={ previous }
					next={ next }
					content={ post.html }
					contentComponent={ HTMLContent }
					image={ post.fields.thumbnail.childImageSharp.responsiveSizes }
					avatar={ this.props.data.avatar }
					/>		
					<div className="Post__footer">
						{  post.frontmatter.model === 'post' && 
							<div id="disquser" className="container Disqus">
								<ReactDisqusComments
											shortname="dantecalderon"
											identifier={ post.frontmatter.path }
											title={ post.frontmatter.title }
											url={ this.state.location }/>
							</div>
						}
					</div>
					<Share fixed show={ this.state.show_share } 
					 	title={post.frontmatter.title} 
						url={`https://dantecalderon.com/` + post.frontmatter.path}/>
			</div>
		)
	}
}

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		avatar: imageSharp(id: {regex: "/avatar/"}) {
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
    					responsiveSizes(maxWidth: 1920) {
    						aspectRatio
				            src
				            srcSet
				            sizes			            
    					}
					}
				}
			}
		}
	}
`
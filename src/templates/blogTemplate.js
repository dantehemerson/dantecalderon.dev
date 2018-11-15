import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import get from 'lodash/get'


import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO'
import AuthorPost from '../components/AuthorPost'

import Project from './Project'
import Layout from './TemplateLayout'

export const Post = ({ content, frontmatter, image, contentComponent, timeToRead, avatar, model }) => {
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
		</div>
	)
}

export default class BlogPostTemplate extends React.Component {
	render() {
    const post = this.props.data.markdownRemark
    const siteMetadata = get(this.props, 'data.site.siteMetadata')
    const isPost = post.frontmatter.model === 'post'
    return (
      <Layout isPost={isPost} >
        {
          isPost ?
            <Post
              { ...post }
              { ...siteMetadata }
              content={ post.html }
              contentComponent={ HTMLContent }
              image={ post.fields.thumbnail.childImageSharp.sizes }
              avatar={ this.props.data.avatar }
              />
            : <Project
                { ...post }
                { ...siteMetadata }
                content={ post.html }
                contentComponent={ HTMLContent }
                image={ post.fields.thumbnail.childImageSharp.sizes }
                avatar={ this.props.data.avatar }
                />
        }
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
				tags
				stack
				roles
				client
				repository
				website
				licence
			}
			fields {
				thumbnail {
					childImageSharp {
						sizes(maxWidth: 1920) {
    					...GatsbyImageSharpSizes_tracedSVG
    				}
					}
				}
				images {
					description
					image {
						childImageSharp {
							sizes(maxWidth: 1920) {
								...GatsbyImageSharpSizes_tracedSVG
							}
						}
					}
				}
			}
		}
	}
`

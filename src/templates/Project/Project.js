import React from 'react'
import Img from 'gatsby-image'

import Content from '../../components/Content'
import AuthorPostFooter from '../../components/AuthorPostFooter'
import Toolbar from '../../components/ProjectToolbar'

export default props => {
	const PostContent = props.contentComponent || Content
	return (
		<div className="Post ProjectTemplate">
			<div className="Post__header">
				<div className="Post__header__data">								
					<h1 className="Post__title">{ props.frontmatter.title }</h1>										
					<h2 className="Post__subtitle">{ props.frontmatter.subtitle }</h2>					
					<Toolbar/>										
				</div>
				{
					props.frontmatter.style !== 'default' &&					
					<div className="Post__header__image ProjectTemplate__header__image">
						<Img sizes={ props.image }/>
					</div>
				}
			</div>			
			<PostContent content={ props.content } className="container Post__content"/>			
			<div className="wrapper-post">				
				<div className="Foot__AuthorPost">				
					<AuthorPostFooter
						make									
						avatar={ props.avatar }/>
				</div>	
			</div>				
		</div>
	)
}
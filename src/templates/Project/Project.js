import React from 'react'

import Content from '../../components/Content'
import AuthorPostFooter from '../../components/AuthorPostFooter'
import Toolbar from '../../components/ProjectToolbar'
import Sidebar from '../../components/SidebarProject'
import Tags from '../../components/Tags'
import Slider from '../../components/Slider'

export default props => {
	const PostContent = props.contentComponent || Content
	return (
		<div className="Post ProjectTemplate">
			<div className="Post__header ProjectTemplate__header">
				<div className="Post__header__data">
					<h1 className="Post__title">{`${props.frontmatter.title}`}</h1>
					<h2 className="Post__subtitle">{ props.frontmatter.subtitle }</h2>
					<Toolbar
						repository={ props.frontmatter.repository }
						website={ props.frontmatter.website }
					/>
				</div>
			</div>
			<Slider images={props.fields.images} />
			<div>
				<Tags items={ props.frontmatter.tags }/>
			</div>
			<div className="row ProjectTemplate__contentwrapper">
				<div className="col-xs-12 col-lg-9 ProjectTemplate__col">
					<hr className="ProjectTemplate__header-separator"/>
					<PostContent content={ props.content } className="container Post__content ProjectTemplate__content"/>
				</div>
				<div className="col-xs-12 col-lg-3">
					<Sidebar
						tags={ props.frontmatter.tags }
						stack={ props.frontmatter.stack }
						roles={ props.frontmatter.roles }
						website={ props.frontmatter.website }
						repository={ props.frontmatter.repository }
						client={ props.frontmatter.client }
						licence={ props.frontmatter.licence }
					/>
				</div>
			</div>
		</div>
	)
}

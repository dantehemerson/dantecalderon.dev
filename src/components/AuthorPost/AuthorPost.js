import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default props => (
	<div className={`AuthorPost ${props.header ? ' header' : ''}`}>
		<div className="AuthorPost__header">
			<Img className="AuthorPost__image" sizes={ props.avatar.sizes } />
		</div>
		<div className="AuthorPost__body">
			<Link to="/#about" className="AuthorPost__name">Dante Calderón</Link>
			<p className="AuthorPost__about">Programmer</p>
			{ props.header && <p className="AuthorPost__date">{ props.date } · { props.timeToRead } min de lectura</p>}
			{
				!props.header && 
				<div className="Foot__AuthorPost__social">					
					<a href="https://www.github.com/dantehemerson">
						<img src="https://icongr.am/fontawesome/github.svg?color=ffffff&size=21" />
					</a>
					<a href="https://twitter.com/dantehemerson">
						<img src="https://icongr.am/fontawesome/twitter.svg?color=ffffff&size=21" />
					</a>
					<a href="https://www.linkedin.com/in/dantehemerson">
						<img src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff&size=21" />
					</a>
					<a href="https://www.instagram.com/dantehemerson">
						<img src="https://icongr.am/fontawesome/instagram.svg?color=ffffff&size=21" />
					</a>						
				</div>
			}
		</div>
	</div>
)
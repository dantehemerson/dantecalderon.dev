import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default props => (
	<div className='AuthorPostFooter'>
		<div className="AuthorPostFooter__header">
			<Img className="AuthorPostFooter__image" sizes={ props.avatar.sizes } />
		</div>
		<div className="AuthorPostFooter__body">
			<p className="AuthorPostFooter__writtenby">Escrito por</p>
			<Link to="/#about" className="AuthorPostFooter__name">Dante Calderón</Link>
			<p className="AuthorPostFooter__about">Contribuidor de Software libre(@linux, @git). Desarrollador Web utilizando React, Node y Mongo. También me gusta desarrollar videojuegos, puedes ver los que he creado en mi <Link to="/portfolio">portafolio</Link>.</p>
			<div className="AuthorPostFooter__social">
				<a href="https://www.github.com/dantehemerson">
					<img alt="img" src="https://icongr.am/fontawesome/github.svg?color=646464&size=21" />
				</a>
				<a href="https://twitter.com/dantehemerson">
					<img alt="img" src="https://icongr.am/fontawesome/twitter.svg?color=646464&size=21" />
				</a>
				<a href="https://www.linkedin.com/in/dantehemerson">
					<img alt="img" src="https://icongr.am/fontawesome/linkedin.svg?color=646464&size=21" />
				</a>
				<a href="https://www.instagram.com/dantehemerson">
					<img alt="img" src="https://icongr.am/fontawesome/instagram.svg?color=646464&size=21" />
				</a>
			</div>
		</div>
	</div>
)
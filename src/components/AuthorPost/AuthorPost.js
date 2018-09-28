import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default props => (
	<div className='AuthorPost'>
		<div className="AuthorPost__header">
			<Img className="AuthorPost__image" sizes={ props.avatar.sizes } />
		</div>
		<div className="AuthorPost__body">
			<p className="AuthorPost__name"><Link to="/about">Dante Calderón</Link> <b>|</b> <span>{ props.date } · { props.timeToRead } min de lectura</span></p>
		</div>
	</div>
)
import React from 'react'
import Link from 'gatsby'
import Img from 'gatsby-image'

export default props => (
	<div className='Card'>
		<Link to={ props.data.path } className="Card__header">
			<Img resolutions={props.data.thumbnail} />
		</Link>
		<div className="Card__body">
			<Link to={ props.data.path } className="Card__title">
				<h3>{ props.data.title }</h3>
			</Link>
			<p className="Card__date">
				<time dateTime="2008-02-14 20:00">{ props.data.date}</time>
				&middot;{ props.data.timeToRead} min read
			</p>
			<p className="Card__content">{ props.data.excerpt }</p>
			<Link className="btn Card__btn" to={ props.data.path }>
				Seguir Leyendo ➞
			</Link>
		</div>
	</div>
)
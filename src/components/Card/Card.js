import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Card extends React.Component {
	render() {		
		return (
			<div className='Card'>		
				<Link to={ this.props.data.path } className="Card__header">
					<Img resolutions={this.props.data.thumbnail} />						
				</Link>				
				<div className="Card__body">
					<Link to={ this.props.data.path } className="Card__title">
						<h3>{ this.props.data.title }</h3>
					</Link>		
					<p className="Card__date">
						<time dateTime="2008-02-14 20:00">{ this.props.data.date}</time> 
						&middot;{ this.props.data.timeToRead} min read
					</p> 
					<p className="Card__content">{ this.props.data.excerpt }</p>						
					<Link className="btn Card__btn" to={ this.props.data.path }>Seguir Leyendo ➞</Link>				
				</div>	
			</div>
		)
	}
}

export default Card
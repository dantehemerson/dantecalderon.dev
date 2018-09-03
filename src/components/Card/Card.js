import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Card extends React.Component {
	render() {
		const blogMode = this.props.mode === 'blog'		
		return (
			<div  className={`Card ${(blogMode ? 'blogMode' : '')}`}>		
				{ !blogMode && 
				 	<div className="Card__topbar">
						<div className="Card__topbar__button">
						</div>
					</div>		
				}
					<div className="Card__header">
						<Img resolutions={this.props.data.thumbnail} />
						{/** sizes={this.props.data.image.sizes} */}
					</div>				
					<div className="Card__body">
						<Link to={ this.props.data.path }><h3 className="Card__title">{ this.props.data.title }</h3></Link>
						{ blogMode &&
							<p className="Card__date"><time dateTime="2008-02-14 20:00">{ this.props.data.date}</time> &middot; { this.props.data.timeToRead} min read</p> 
						}
						<p className="Card__content">{ this.props.data.excerpt }</p>						
						<Link className="btn Card__btn" to={ this.props.data.path }>Seguir Leyendo ➞</Link>				
					</div>	
			</div>
		)
	}
}

export default Card
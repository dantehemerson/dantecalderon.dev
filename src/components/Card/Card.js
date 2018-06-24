import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Card extends React.Component {
	render() {
		const blogMode = this.props.mode === 'blog'
		return (
			<div  className={`Card ${(blogMode ? 'blogMode' : '')}`}>
				<Link to="/">
					<div className="Card__header">
						<Img sizes={this.props.data.image.sizes}/>
					</div>
					<div className="Card__body">
						<h3 className="Card__title">{ this.props.data.title }</h3>
						<p className="Card__date"><time datetime="2008-02-14 20:00">{ this.props.data.date}</time></p>
						<p className="Card__content">{ this.props.data.content }</p>						
						<Link className="btn Card__btn" to="/blog"><span>Read it</span></Link>
						<div className="Card__wavey"></div>
						<div className="Card__tags">
							<p className="Card__tag">Tag</p>
						</div>						
					</div>		
				</Link>		
			</div>
		)
	}
}

export default Card
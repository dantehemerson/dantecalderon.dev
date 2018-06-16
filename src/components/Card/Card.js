import React from 'react'
import Img from 'gatsby-image'

class Card extends React.Component {
	render() {
		return (
			<div className="Card">
				<div className="Card__header">
					<Img sizes={this.props.data.image.sizes}/>
				</div>
				<div className="Card__body">
					<h3 className="Card__title">{ this.props.data.title }</h3>
					<p className="Card__content">{ this.props.data.content }</p>
					<p><time datetime="2008-02-14 20:00">{ this.props.data.date}</time></p>
				</div>
			</div>
		)
	}
}

export default Card
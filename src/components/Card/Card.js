import React from 'react'
import Img from 'gatsby-image'

class Card extends React.Component {
	render() {
		return (
			<div className="Card">
				<div className="Card__header">

				</div>
				<div className="Card__body">
					<h3 className="Card__title"></h3>
					<p className="Card__content"></p>
					<p><time datetime="2008-02-14 20:00">24 Junio</time></p>
				</div>
			</div>
		)
	}
}

export default Card
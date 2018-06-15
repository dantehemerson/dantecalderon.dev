import React from 'react'
import Img from 'gatsby-image'

class ContactSocial extends React.Component {
	render() {
		return (
			<div className="ContactSocial">
				<Img sizes={this.props.imageLeft.sizes} />
			</div>
		)
	}
}

export default ContactSocial
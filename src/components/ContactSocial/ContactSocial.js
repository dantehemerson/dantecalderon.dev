import React from 'react'
import Img from 'gatsby-image'

class ContactSocial extends React.Component {
	render() {
		return (
			<div className="ContactSocial">			
				<div className="contain">
					<h3 className="ContactSocial__title col-xs-12 text-center">Mis Datos</h3>
					<div className="ContactSocial__info row">
						<div className="ContactSocial__info__item col-xs-6">
							<p><img src="https://icongr.am/feather/mail.svg?color=FFFFFF"  title="{{ item.title }}" />Email</p>
							<ul>
								<li>
									<a href="">dantehemerson@gmail.com</a>
								</li>									
							</ul>
						</div>
						<div className="ContactSocial__info__item col-xs-6">
							<p><img src="https://icongr.am/feather/phone.svg?color=FFFFFF"  title="{{ item.title }}" />Celular</p>
							<ul>
								<li>
									<p>+51 928124770</p>
								</li>
							</ul>
						</div>
					</div>
				</div>				
				<Img sizes={this.props.imageLeft.sizes} />
			</div>
		)
	}
}

export default ContactSocial
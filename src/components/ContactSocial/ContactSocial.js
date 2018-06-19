import React from 'react'
import Img from 'gatsby-image'

class ContactSocial extends React.Component {
	render() {
		return (
			<div className="ContactSocial">			
				<div className="contain">
					<h3 className="ContactSocial__title col-xs-12 text-center">Mis Datos</h3>
					<div className="ContactSocial__info row">
						<div className="ContactSocial__info__item col-xs-12 col-lg-7">
							<p><img src="https://icongr.am/feather/mail.svg?color=FFFFFF"  title="{{ item.title }}" />Email</p>
							<ul>
								<li>
									<a href="">dantehemerson@gmail.com</a>
								</li>									
							</ul>
						</div>
						<div className="ContactSocial__info__item col-xs-12 col-lg-5">
							<p><img src="https://icongr.am/feather/phone.svg?color=FFFFFF"  title="{{ item.title }}" />Celular</p>
							<ul>
								<li>
									<p>+51 928124770</p>
								</li>
							</ul>
						</div>
					</div>

					<div className="row ">
						<div className="col-xs-12">											
							<div className="ContactSocial__social">
								<a className="link-no-border ContactSocial__social__icon icon-github" href="https://www.github.com/dantehemerson" title="Github - Dante Calderón" target="_blank">
									<img src="https://icongr.am/fontawesome/github.svg?color=FFFFFF" title="Github - Dante Calderón"/>
								</a>		
								<a className="link-no-border ContactSocial__social__icon icon-twitter" href="https://twitter.com/dantehemerson" title="Twitter - Dante Calderón" target="_blank">
									<img src="https://icongr.am/fontawesome/twitter.svg?color=FFFFFF" title="Twitter - Dante Calderón"/>
								</a>		
								<a className="link-no-border ContactSocial__social__icon icon-instagram" href="https://www.instagram.com/dantehemerson/" title="Instagram - Dante Calderón" target="_blank">
									<img src="https://icongr.am/fontawesome/instagram.svg?color=FFFFFF" title="Instagram - Dante Calderón"/>
								</a>		
								<a className="link-no-border ContactSocial__social__icon icon-linkedin" href="https://www.linkedin.com/in/dantehemerson/" title="Linkedin - Dante Calderón" target="_blank">
									<img src="https://icongr.am/fontawesome/linkedin.svg?color=FFFFFF" title="Linkedin - Dante Calderón"/>
								</a>										
							</div>
						</div>
					</div>
				</div>				
				<Img sizes={this.props.imageLeft.sizes} />
			</div>
		)
	}
}

export default ContactSocial
import React from 'react'
import Link from 'gatsby-link'

import ContactForm from '../components/ContactForm'
import ContactSocial from '../components/ContactSocial'

class Contact extends React.Component {
	render() {
		return (
			<div className="Contact">
				<section className="HeaderContact Page">
					<div className="container">
						<div className="row center-xs">
							<div className="HeaderContact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
								<h2 className="HeaderContact__title Page__title">Contacto</h2>
								<p className="HeaderContact__description Page__description">Si tienes una pregunta, quieres que trabajemos juntos o quieres dejarme unas palabras. Me encantaría escucharte</p>
							</div>							
						</div>
					</div>
				</section>
				<div className="Contact__form container">

					<div className="row">
						<div className="col-xs-6">
							<ContactSocial />
						</div>
						<div className="col-xs-6">
							<ContactForm/>
						</div>

					</div>
				</div>
				
			</div>
		)
	}
}

export default Contact	

import React from 'react'
import Link from 'gatsby-link'

import ContactForm from '../components/ContactForm'

class Contact extends React.Component {
	render() {
		return (
			<div>
				<section className="HeaderContact Page">
					<div className="container">
						<div className="row center-xs">
							<div className="About__titlewrap Page__titlewrap text-center col-xs-12 col-md-10">
								<h2 className="About__title Page__title">Contacto</h2>
								<p className="About__description Page__description">Si tienes una pregunta, quieres que trabajemos juntos o quieres dejarme unas palabras. Me encantaría escucharte</p>
							</div>							
						</div>
						<div className="row">
							<div className="col-xs-6">
							</div>
							<div className="col-xs-6">
								<ContactForm/>
							</div>

						</div>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Contact	

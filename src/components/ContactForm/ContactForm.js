import React from 'react'

class ContactForm extends React.Component {

	render() {
		return (
			<div className="form-container">
				<form>
					<div className="label-input">
						<div className="title-input">
							<p>Tu nombre</p>
						</div>
						<div className="input-container">
							<input className="input" placeholder="Nombre" type="text"/>
						</div>
					</div>		
					<div className="label-input">
						<div className="title-input">
							<p>Tu compañia</p>
						</div>
						<div className="input-container">
							<input className="input" placeholder="Nombre de la compañia" type="text"/>
						</div>
					</div>
					<div className="label-input">
						<div className="title-input">
							<p>Tu correo</p>
						</div>
						<div className="input-container">
							<input className="input" placeholder="E-mail" type="text"/>
						</div>
					</div>
					<div className="label-input label-describe">
						<div className="title-input">
							<p>Describenos lo que tu necesitas, mientras mas conoscamos, mejor.</p>
						</div>
						<div className="input-container">
							<textarea className="input" placeholder="Describe" rows="9"></textarea>
						</div>
					</div>

					<div className="label-input">
						<div className="submit-container">
							<input className="btn" placeholder="E-mail" type="submit"/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default ContactForm
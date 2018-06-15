import React from 'react'

class ContactForm extends React.Component {

	render() {
		return (
			<div className="ContactForm">
				<form>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Tu nombre</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input className="ContactForm__input" placeholder="Nombre" type="text"/>
						</div>
					</div>		
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Tu correo</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input className="ContactForm__input" placeholder="E-mail" type="text"/>
						</div>
					</div>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Asunto</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input className="ContactForm__input" placeholder="Asunto" type="text"/>
						</div>
					</div>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Describenos lo que tu necesitas, mientras mas conoscamos, mejor.</p>
						</div>
						<div className="ContactForm__inputwrap">
							<textarea className="ContactForm__input" placeholder="Describe" rows="6"></textarea>
						</div>
					</div>

					<div className="ContactForm__item">
						<div className="ContactForm__submitwrap">
							<input className="ContactForm__submit" placeholder="E-mail" type="submit"/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default ContactForm
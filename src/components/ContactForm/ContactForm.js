import React from 'react'
import Swal from 'sweetalert2'


const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

class ContactForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: ""
		}
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: {
				 "Content-Type": "application/x-www-form-urlencoded"
			},
			body: encode({ "form-name": "contact", ...this.state })
		})
		.then(() => {
			Swal({
				type: 'success',
				title: 'Mensaje Enviado', 
				text: 'Gracias por enviarme tu mensaje, te responderé lo mas pronto posible.',
				confirmButtonClass:  'Btn',
    			cancelButtonClass:  'Btn',
    			onClose: () => {    				
					this.setState({
						name: "",
						email: "",
						subject: "",
						message: ""
					})
    			},
			})

		})
		.catch(error => alert("Error"))

		e.preventDefault()
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	render() {
		const { name, email, subject, message } = this.state
		return (
			<div className="ContactForm">
				<form 
					name="contact"
					onSubmit={ this.handleSubmit }
					>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Tu nombre</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input name="name" value={name} className="ContactForm__input" placeholder="Nombre" type="text" required onChange={ this.handleChange }/>
						</div>
					</div>		
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">E-mail</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input name="email" value={email} className="ContactForm__input" placeholder="tu@correo.com" type="email" required onChange={ this.handleChange }/>
						</div>
					</div>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Asunto</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input name="subject" value={subject} className="ContactForm__input" placeholder="Asunto" type="text" required onChange={ this.handleChange }/>
						</div>
					</div>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Tu mensaje</p>
						</div>
						<div className="ContactForm__inputwrap">
							<textarea name="message" value={message} className="ContactForm__input" placeholder="Ingresa tu mensaje aquí" rows="6" required onChange={ this.handleChange }></textarea>
						</div>
					</div>					
					<div className="ContactForm__item">
						<div className="ContactForm__submitwrap">
							<button className="ContactForm__submit btn" placeholder="E-mail" type="submit">Enviar</button>						
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default ContactForm
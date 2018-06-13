import React from 'react'


class About extends React.Component {

	render() {
		return (
			<section className="About">
				<h2 className="About__title">Sobre mi</h2>
				<p className="About__description">¡Hola! :smiley: Soy Dante Calderon. Soy Programador en Javascript, Go & Python</p>

				<div className="About__interests">
					<h3 className="About__interests__title">Intereses</h3>
					<ul className="About__interests__list">
						<li className="About__interests__item" >Inteligencia Artificial</li>
						<li className="About__interests__item" >Machine Learning</li>
						<li className="About__interests__item" >Data Science</li>
						<li className="About__interests__item" >El fascinante mundo de Javascript y Nodejs</li>
						<li className="About__interests__item" >Desarrollo Web</li>
						<li className="About__interests__item" >Backend Development</li>
						<li className="About__interests__item" >Competitive Programming</li>
						<li className="About__interests__item" >y todo lo que tenga que ver con programación en </li>general.
					</ul>
				</div>
			</section>
		)
	}
}

export default About
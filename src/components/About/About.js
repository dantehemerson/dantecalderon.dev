import React from 'react'
import Img from 'gatsby-image'


class About extends React.Component {
	
	render() {
		return (
			<section className="About Page">
				<div className="container">
					<div className="row center-xs">
						<div className="About__titlewrap Page__titlewrap text-center col-xs-12 col-md-10">
							<h2 className="About__title Page__title">Sobre mí</h2>
							<p className="About__description Page__description">¡Hola! :smiley: Soy Dante Calderon. Soy Programador en Javascript, Go & Python</p>
						</div>
					</div>


					<div className="row">
						<div className="About__img-container col-xs-12 col-md-6">
							<div className="About__img">
								<Img sizes={ this.props.image.sizes } />
							</div>
						</div>
						<div className="About__interests col-xs-12 col-md-6 text-left first-md">
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
					</div>
				</div>				
			</section>
		)
	}
}

export default About
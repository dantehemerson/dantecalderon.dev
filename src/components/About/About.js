import React from 'react'
import Img from 'gatsby-image'


class About extends React.Component {
	
	render() {
		return (
			<section className="About Page" id="about">
				<div className="container">
					<div className="row center-xs">
						<div className="About__titlewrap Page__titlewrap text-center col-xs-12 col-md-10">
							<h2 className="About__title Page__title">About me</h2>
							<p className="About__description Page__description">Hola,  soy Dante Calderon y programo en Python, por que Python es cool.</p>
						</div>
					</div>


					<div className="row">
						<div className="About__img-container col-xs-12 col-md-6">
							<div className="About__img">
								<Img sizes={ this.props.image.sizes } />
							</div>
						</div>
						<div className="About__interests col-xs-12 col-md-6 text-left first-md">
							<h3 className="About__interests__title">Interests</h3>
							<ul className="About__interests__list">
								<li className="About__interests__item" ><i className="ai"></i>Artificial intelligence</li>
								<li className="About__interests__item" ><i className="ml"></i>Machine Learning</li>
								<li className="About__interests__item" ><i className="ds"></i>Data Science</li>
								<li className="About__interests__item" ><i className="cp"></i>Competitive Programming</li>
								<li className="About__interests__item" ><i className="game"></i>Games Development</li>
								<li className="About__interests__item" ><i className="back"></i>Data, data and more data.</li>
								{/*
								<li className="About__interests__item" ><i className="js"></i>El fascinante mundo de Javascript y Nodejs</li>
								*/}
							</ul>

						</div>
					</div>
				</div>				
			</section>
		)
	}
}

export default About
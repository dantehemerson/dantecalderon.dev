import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Navbar extends React.Component {	
	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
	}

	render() {		
		return (					
			<nav className="Navbar">				
				<div className="container">
					<div className="Navbar__titlewrap">
						<Link className="Navbar__title" to="/">Dante Calderon</Link>
					</div>
					<div className="Navbar__navwrap">
						<ul className="Navbar__nav">
							<li className={(this.props.activePage === '' ? 'Navbar__item' : '')}>
								<Link className="Navbar__link" to="/">Inicio</Link>
							</li>
							<li className={(this.props.activePage === 'Blog' ? 'Navbar__item' : 'Navbar__item')}>
								<Link className="Navbar__link" to="/blog">Blog</Link>
							</li>
							<li className={(this.props.activePage === 'Contact' ? 'Navbar__item' : 'Navbar__item')}>
								<Link className="Navbar__link" to="/contact">Contacto</Link>
							</li>						
							<li className={(this.props.activePage === 'Portfolio' ? 'Navbar__item' : 'Navbar__item')}>
								<Link className="Navbar__link" to="/portfolio">Portafolio</Link>
							</li>						
						</ul>					
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
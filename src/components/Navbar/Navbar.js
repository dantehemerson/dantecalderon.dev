import React, { Component } from 'react'
import Link from 'gatsby-link'



class Navbar extends Component {	
	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
	}

	render() {		
		return (
			<nav className="navbar">				
				<div className="app-name">
					<Link to="/">Lotcod</Link>
				</div>
				<div className="links">
					<ul>
						<li className={(this.props.activePage === '' ? 'active' : '')}><Link to="/">Inicio</Link></li>
						<li className={(this.props.activePage === 'Blog' ? 'active' : '')}><Link to="/blog">Blog</Link></li>
						<li className={(this.props.activePage === 'Contact' ? 'active' : '')}><Link to="/contact">Contacto</Link></li>						
						<li className={(this.props.activePage === 'Portfolio' ? 'active' : '')}><Link to="/portfolio">Portafolio</Link></li>						
					</ul>					
				</div>
			</nav>
		)
	}
}

export default Navbar
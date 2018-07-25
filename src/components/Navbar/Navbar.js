import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Navbar extends React.Component {	
	state = {
		navbarIsTop: true,
	}

	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
		navbarIsTop: true,		
	}

	componentDidMount() {
		const scrollListener = () => {
			this.setState({ navbarIsTop: document.body.scrollTop <= 50 && 
												document.documentElement.scrollTop <= 50 })	
		}
		window.addEventListener('scroll', scrollListener)
	}

	render() {		
		return (					
			<nav className={
				"Navbar " + 
				(this.state.navbarIsTop ? '' : 'noTop') 
			}>				
				<div className="container">
					<div className="Navbar__titlewrap">
						<Link className="Navbar__title" to="/">dantehemerson</Link>
					</div>
					<div className="Navbar__navwrap">
						<ul className="Navbar__nav">
							<li className={(this.props.activePage === '' ? 'Navbar__item' : '')}>
								<Link className="Navbar__link" to="/"><img className="icon-item" src="https://icongr.am/clarity/home.svg?size=20&color=000000"/>Inicio</Link>
							</li>
							<li className={(this.props.activePage === 'Blog' ? 'Navbar__item' : 'Navbar__item')}>
								<Link className="Navbar__link" to="/blog"><img className="icon-item" src="https://icongr.am/clarity/computer.svg?size=20&color=000000"/>Blog</Link>
							</li>
							<li className={(this.props.activePage === 'Contact' ? 'Navbar__item' : 'Navbar__item')}>
								<Link className="Navbar__link" to="/contact"><img className="icon-item" src="https://icongr.am/clarity/user.svg?size=20&color=000000"/>Contacto</Link>
							</li>						
							<li className={(this.props.activePage === 'Portfolio' ? 'Navbar__item' : 'Navbar__item')}>
								<Link className="Navbar__link" to="/portfolio"><img className="icon-item" src="https://icongr.am/clarity/view-cards.svg?size=20&color=000000"/>Portafolio</Link>
							</li>						
						</ul>					
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
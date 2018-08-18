import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Navbar extends React.Component {	
	state = {
		navbarIsTop: true,
		menuIsOpen: false
	}

	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
		navbarIsTop: true,
		menuIsOpen: false		
	}

	componentDidMount() {
		const scrollListener = () => {
			this.setState({ navbarIsTop: document.body.scrollTop <= 5 && 
												document.documentElement.scrollTop <= 5 })	
		}
		window.addEventListener('scroll', scrollListener)
	}

	handleToggle = (event) => {			
		this.setState((prevState, props) => {
			return {
				menuIsOpen: !prevState.menuIsOpen,
			}
		})
	}

	render() {	
		const { menuIsOpen }	 = this.state
		return (	

			<nav className={
				"Navbar " + 
				(this.state.navbarIsTop ? '' : 'noTop') 
			}>				
				<div className="container">
					<div className="Navbar__titlewrap">
						<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } } className="Navbar__title" to="/">dante H.</Link>
					</div>
					

					<div className="Navbar__navwrap">
						
						<button onClick={ this.handleToggle } id="navbarToggler" className={`Navbar__toggler ${menuIsOpen ? 'open' : ''}`}>
							<span className="Navbar__toggler__burger-menu">
							</span>
						</button>
						<ul className={`Navbar__nav ${menuIsOpen ? 'open' : ''}`}>
							<li className='Navbar_item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } } className={`Navbar__link ${ this.props.activePage === '' ? 'active' : ''}`} to="/">
									<img className="icon-item" src="https://icongr.am/clarity/home.svg?size=20&color=000000"/>Inicio
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} className={`Navbar__link ${ this.props.activePage === 'Blog' ? 'active' : ''}`} to="/blog">
									<img className="icon-item" src="https://icongr.am/clarity/computer.svg?size=20&color=000000"/>Blog
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} className={`Navbar__link ${ this.props.activePage === 'Contact' ? 'active' : ''}`} to="/contact">
									<img className="icon-item" src="https://icongr.am/clarity/user.svg?size=20&color=000000"/>Contacto
								</Link>
							</li>						
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} className={`Navbar__link ${ this.props.activePage === 'Portfolio' ? 'active' : ''}`} to="/portfolio">
									<img className="icon-item" src="https://icongr.am/clarity/view-cards.svg?size=20&color=000000"/>Portafolio
								</Link>
							</li>						
						</ul>					
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
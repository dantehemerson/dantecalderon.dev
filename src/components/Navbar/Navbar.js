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
							<li className={(this.props.activePage === '' ? 'Navbar__item' : '')}>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } } className="Navbar__link" to="/"><img className="icon-item" src="https://icongr.am/clarity/home.svg?size=20&color=000000"/>Home</Link>
							</li>
							<li className={(this.props.activePage === 'Blog' ? 'Navbar__item' : 'Navbar__item')}>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} className="Navbar__link" to="/blog"><img className="icon-item" src="https://icongr.am/clarity/computer.svg?size=20&color=000000"/>Blog</Link>
							</li>
							<li className={(this.props.activePage === 'Contact' ? 'Navbar__item' : 'Navbar__item')}>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} className="Navbar__link" to="/contact"><img className="icon-item" src="https://icongr.am/clarity/user.svg?size=20&color=000000"/>Contact</Link>
							</li>						
							<li className={(this.props.activePage === 'Portfolio' ? 'Navbar__item' : 'Navbar__item')}>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} className="Navbar__link" to="/portfolio"><img className="icon-item" src="https://icongr.am/clarity/view-cards.svg?size=20&color=000000"/>Portfolio</Link>
							</li>						
						</ul>					
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Logo from '../../assets/images/logo_letter.png'
import { isPostOrProject } from '../../utils'

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
			let scrollPosition = document.documentElement.scrollTop
			this.setState({
				navbarIsTop: scrollPosition <= 5
			})
		}
		window.addEventListener('scroll', scrollListener)

		const Headroom = require('headroom.js/dist/headroom.min.js')

		let navbar = document.getElementById('Navbar')
		let headroom = new Headroom(navbar, {
			"offset": 200,
  		"tolerance": 15,
		})
		headroom.init()

		window.addEventListener('resize', () => {
			let width = window.innerWidth;
			if(width >= 768) {
				this.setState({
					menuIsOpen: false
				})
			}
		})
	}

	handleToggle = event => {
		this.setState((prevState, props) => {
			return {
				menuIsOpen: !prevState.menuIsOpen,
			}
		})
	}

	render() {
		const { menuIsOpen }	 = this.state
		const isPost = isPostOrProject(this.props.activePage)
		return (
			<nav className={
				"Navbar " +
				(this.props.activePage === "" ? "inicio " : "") +
				(menuIsOpen ? ' open ' : '') +
				(isPost ? '' : ' isPost ') +
				(this.state.navbarIsTop ? '' : 'noTop')
			}
				id="Navbar">
				<div
					onClick={ (e) => { this.setState({ menuIsOpen: false }) }}
					className={`Navbar__shadow ${menuIsOpen ? 'open' : ''}`}>
				</div>
				<div className="container">
					<Link className="Navbar__titlewrap"
						onClick={ (e) => { this.setState({menuIsOpen: false}) } }
						to="/">
						<img alt="logo" className="Navbar__logo" src={Logo} />
						<p className="Navbar__title">Dante Calderón</p>
					</Link>
					<div className="Navbar__navwrap">
						<button onClick={ this.handleToggle }
							id="navbarToggler"
							className={`Navbar__toggler ${menuIsOpen ? 'open' : ''}`}>
							<span className="Navbar__toggler__burger-menu"></span>
						</button>
						<ul className={ `Navbar__nav ${ menuIsOpen ? 'open' : '' }` }>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } }
									className={`Navbar__link ${ this.props.activePage === '' ? 'active' : ''}`}
									to="/">
									<clr-icon shape="home" class="icon-item" size="21"/>
									Inicio
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Blog' ? 'active' : ''}`} to="/blog">
									<clr-icon shape="computer" class="icon-item" size="21"/>
									Blog
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Contact' ? 'active' : ''}`} to="/contact">
									<clr-icon shape="user" class="icon-item" size="21"/>
									Contacto
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Portfolio' ? 'active' : ''}`}to="/portfolio">
									<clr-icon shape="view-cards" class="icon-item" size="21"/>
									Portafolio
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
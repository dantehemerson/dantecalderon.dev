import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { actualPage } from '../utils'

import 'prismjs/themes/prism-solarizedlight.css'
import '@clr/icons/clr-icons.min.css'
import 'react-awesome-button/src/styles/styles.scss'
import './index.scss'

class Layout extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	componentDidMount() {
		require('@webcomponents/custom-elements/custom-elements.min.js')
		require('@clr/icons/clr-icons.min.js')
	}

	render() {
		return (
			<div>
				<Helmet>
					<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Noto+Serif:400,700,400italic,700italic|Playfair+Display:400,700" rel="stylesheet"/>
					<meta name="theme-color" content="#DFBD83"/>
					<meta name="distribution" content="global"/>
					<meta httpEquiv="Content-Language" content="es" />
					<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32"	href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileColor" content="#DFBD83" />
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				</Helmet>

				<Navbar activePage={ actualPage(this.props.location.pathname) }/>
				<div className="Dyamic-container">
					{ this.props.children }
				</div>
				<Footer/>
			</div>
			)
	}
}

export default Layout
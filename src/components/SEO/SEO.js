import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import avatar from '../../assets/images/avatar.png'

export default class SEO extends PureComponent {

	static propTypes = {
		title: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		description: PropTypes.string,
		isPost: PropTypes.bool,
	};

	static defaultProps = {
		title: 'Dante Calderon',
		image: avatar,
		url: 'https://dantecalderon.com/',
		description: 'Dante Hemerson Calderón Vasquez - Programador',
		isPost: false,
	}

	render() {
		const { title, image, url, description, isPost } = this.props
		return (
			<Helmet>
				<html lang="es" />
				<title>{ title }</title>
				<meta name="description" content={description} />
				<meta name="image" content={image} />

				{/* Facebook Cards */}
				<meta property="og:url" content={url} />
      		{isPost && <meta property="og:type" content="article" />}
      		<meta property="og:title" content={title} />
		      <meta property="og:description" content={description} />
		      <meta property="og:image" content={image} />	     		      
			</Helmet>
		)
	}
}


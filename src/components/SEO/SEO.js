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
		title: 'Dante Calderón',
		image: `https://dantecalderon.com${avatar}`, // En produccion no añade la url
		url: 'https://dantecalderon.com/',
		description: 'Dante Hemerson Calderón Vasquez - Programador',
		isPost: false,
	}

	render() {
		const { title, image, url, description, isPost } = this.props		
		const schemaOrgJSONLD = [
		  {
		    '@context': 'http://schema.org',
		    '@type': 'WebSite',
		    url: url,
		    name: title,
		    alternateName: description,
		  },
		]
		
		if (isPost) {
		  schemaOrgJSONLD.push([
		    {
		      '@context': 'http://schema.org',
		      '@type': 'BreadcrumbList',
		      itemListElement: [
		        {
		          '@type': 'ListItem',
		          position: 1,
		          item: {
		            '@id': url,
		            name: title,
		            image: image,
		          },
		        },
		      ],
		    },
		    {
		      '@context': 'http://schema.org',
		      '@type': 'BlogPosting',
		      url: url,
		      name: title,
		      alternateName: `${url} | Dante Calderón`,
		      headline: title,
		      image: {
		        '@type': 'ImageObject',
		        url: image,
		      },
		      description,
		    },
		  ])
		}

		return (
			<Helmet>
				<html lang="es" />
				<title>{ (title === "" ? "" :  `${title} · `) + "Dante Calderón" }</title>
				<meta name="description" content={description} />
				<meta name="image" content={image} />

				<script type="application/ld+json">
				  {JSON.stringify(schemaOrgJSONLD)}				  
				</script>				

				{/* Facebook Cards */}
				<meta property="og:url" content={url} />
      		<meta property="og:type" content={ isPost ? "article" : "website" }/>
      		<meta property="og:title" content={title} />
		      <meta property="og:description" content={description} />
		      <meta property="og:image" content={image} />	     		 

		      {/* Twitter Cards */}
		      <meta name="twitter:card" content="summary_large_image" />
		      <meta name="twitter:site" content="@dantehemerson" />
		      <meta name="twitter:creator" content="@dantehemerson" />		      
		      <meta name="twitter:title" content={title} />		      
		      <meta name="twitter:description" content={description} />
		      <meta name="twitter:image" content={image} />     
			</Helmet>
		)
	}
}


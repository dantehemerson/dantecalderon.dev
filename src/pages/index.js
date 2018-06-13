import React from 'react'

import Rotational from '../components/Rotational'

class Index extends React.Component {
	render() {
		const { data } = this.props    	
		return (
			<main className="Header-Home">			
				<h1 className="Header-Home__title">Dante Calderón</h1>
				<h2 className="Header-Home__subtitle">Javascript Developer</h2>
				<Rotational avatar={ data.avatar }/>
			</main>
		)
	}
}

export const queryHome = graphql`
  query QueryHome {
    avatar: imageSharp(id: {regex: "/avatar/"}) {
      sizes(maxWidth: 720) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    site {
      siteMetadata {
            title
      }     
    }
  }
`


export default Index

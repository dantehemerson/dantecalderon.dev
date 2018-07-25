import React from 'react'

import Rotational from '../components/Rotational'
import About from '../components/About'

import { animateScroller } from '../utils'

class Index extends React.Component {
 
	render() {
		const { data } = this.props    	
		return (
      <div>
  			<main className="Header-Home">			
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-5 text-center" >
        				<h1 className="Header-Home__title" >Dante Calderón</h1>
        				<h2 className="Header-Home__subtitle">⊰ Programmer ⊱</h2>
                <a id="btn_to_about" className="btn Header-Home__btn-about" href="#about" onClick={(event) => { 
                  event.preventDefault()                  
                  let target = document.getElementById('about').getBoundingClientRect().top
                  animateScroller(target)
                }
                }>Sobre mi</a>
              </div>
              <div className="col-xs-12 col-lg-7">
    				    <Rotational avatar={ data.avatar }/>
              </div>
            </div>
          </div>
        </main>
        <About image={ data.aboutImage } />      
      </div>
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
    aboutImage: imageSharp(id: {regex: "/about-image/"}) {
      sizes(maxWidth: 960) {
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

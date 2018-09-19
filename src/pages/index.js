import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import { AwesomeButton } from 'react-awesome-button'
import get from 'lodash/get'

import Rotational from '../components/Rotational'
import About from '../components/About'
import SEO from '../components/SEO'
import Stack from '../components/Stack'
import Social from '../components/Social'
import Layout from '../components/Layout'

class Index extends React.Component {
	render() {
		const { data } = this.props
      const siteTitle = get(this, 'props.data.site.siteMetadata.title')
      const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
         <PageTransition>
            <Layout location={ this.props.location }>
               <div>
                  <SEO
                     title=""
                     url={ siteUrl }/>
                     <main className="Header-Home">
                     <div className="container">
                        <div className="row">
                           <div className="col-xs-12 col-lg-5 text-center" >
                              <h1 className="Header-Home__title" >Dante Calderón</h1>
                              <h2 className="Header-Home__subtitle">Web Developer</h2>
                              <Social />
                              <AwesomeButton
                                 size="small"
                                 className="Header-Home__btn-about"
                                 href="#about" >
                                 SOBRE MÍ
                              </AwesomeButton>
                           </div>
                           <div className="col-xs-12 col-lg-7">
                              <Rotational avatar={ data.avatar }/>
                           </div>
                        </div>
                     </div>
                  </main>
                  <About image={ data.aboutImage } />
                  <Stack />
               </div>
            </Layout>
         </PageTransition>
		)
	}
}

export const queryHome = graphql`
   query QueryHome {
      avatar: imageSharp(fluid: {originalName: "/avatar/"}) {
         sizes(maxWidth: 720) {
            ...GatsbyImageSharpSizes_tracedSVG
         }
      }
      aboutImage: imageSharp(fluid: {originalName: "/about-image/"}) {
         sizes(maxWidth: 960) {
            ...GatsbyImageSharpSizes
         }
      }
      site {
         siteMetadata {
            title
            siteUrl
         }
      }
   }
`

export default Index

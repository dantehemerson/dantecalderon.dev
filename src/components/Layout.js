import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'

import 'react-awesome-button/src/styles/styles.scss'
import './index.scss'
import { GlobalStyles, defaultTheme } from '../styles'

class Layout extends React.Component {
  componentDidMount() {
    require('@webcomponents/custom-elements/custom-elements.min.js')
  }

  render() {
    const { simple, active } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Gentium+Book+Basic:400,400i,700,700i" rel="stylesheet"/>
          <meta name="distribution" content="global"/>
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
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          {/* Pinterest Domain Verify*/}
          <meta name="p:domain_verify" content="c397688e54fbd5c1a5dc40a1db9b809f"/>
        </Helmet>
        <ThemeProvider theme={ defaultTheme }>
          <>
            <GlobalStyles/>
            <Navbar active={ active }/>
            <div className="Dyamic-container">
              { this.props.children }
            </div>
            {
              !simple &&
              <Footer/>
            }
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default Layout

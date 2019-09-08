import React from 'react'
import 'react-awesome-button/src/styles/styles.scss'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyles } from '../styles'
import Footer from './Footer'
import './index.scss'
import Navbar from './Navbar'
import '../assets/fonts/fira'

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
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Gentium+Book+Basic:400,400i,700,700i"
            rel="stylesheet"
          />
          <meta name="distribution" content="global" />
          {/* Pinterest Domain Verify*/}
          <meta name="p:domain_verify" content="c397688e54fbd5c1a5dc40a1db9b809f" />
        </Helmet>
        <ThemeProvider theme={defaultTheme}>
          <>
            <GlobalStyles />
            <Navbar active={active} />
            <div className="Dyamic-container">{this.props.children}</div>
            {!simple && <Footer />}
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default Layout

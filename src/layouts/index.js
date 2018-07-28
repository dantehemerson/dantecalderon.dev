import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Syntax scheme
import 'prismjs/themes/prism-solarizedlight.css'

import './index.scss'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const { children, data } = this.props    
    return (
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Open+Sans:400,600,700" rel="stylesheet"/>
          <meta name="theme-color" content="#DFBD83"/>
          {
            /**
            * 
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121858272-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-121858272-1');
            </script>
            **/
          }
        </Helmet>
        <Navbar/>
        <div>
          {children()}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout
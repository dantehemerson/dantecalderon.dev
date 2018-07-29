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
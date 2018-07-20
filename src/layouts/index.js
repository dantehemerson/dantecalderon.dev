import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|PT+Serif:400,400i,700,700i|Playfair+Display:400,700|Open+Sans:300,400,400i,600,700|Roboto:300,400,500,700|Lora:400,400i,700,700i" rel="stylesheet"/>
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
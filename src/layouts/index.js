import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Navbar from '../components/Navbar'

import './index.scss'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const { children, data } = this.props
    console.log(data)
    return (
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>
        </Helmet>
        <Navbar/>
        <div>
          {children()}
        </div>
      </div>
    )
  }
}

export default Layout


export const contactQuery = graphql`
  query ContactQuery {
    backgroundImage: imageSharp(id: {regex: "/avatar/"}) {
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

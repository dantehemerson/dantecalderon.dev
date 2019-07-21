import Img from 'gatsby-image'
import React from 'react'

export default props => (
  <div className="Rotational">
    <div className="Rotational__orbit">
      <div className="Rotational__item computer" />
      <div className="Rotational__item hacker" />
      <div className="Rotational__item server" />
      <div className="Rotational__item www" />
      <div className="Rotational__item browser" />
      <div className="Rotational__item protection" />
      <div className="Rotational__item laptop" />
      <div className="Rotational__item headphones" />
      <div className="Rotational__avatar-container">
        <Img sizes={props.avatar.sizes} />
      </div>
    </div>
  </div>
)

import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default (props) => (
	<div className="PortfolioItem">				
		 	<div className="PortfolioItem__topbar">
				<div className="PortfolioItem__topbar__button">
				</div>
			</div>				
			<div className="PortfolioItem__header">
				<Img resolutions={props.data.thumbnail} />
			</div>				
			<div className="PortfolioItem__body">
				<Link to={ props.data.path }><h3 className="PortfolioItem__title">{ props.data.title }</h3></Link>				
				<p className="PortfolioItem__content">{ props.data.excerpt }</p>						
				<Link className="btn PortfolioItem__btn" to={ props.data.path }>Seguir Leyendo ➞</Link>			
			</div>	
	</div>
)
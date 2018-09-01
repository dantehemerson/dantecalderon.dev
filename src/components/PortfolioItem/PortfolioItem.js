import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ItemWrapper = styled.article`	
	text-align: center;
`

const ItemLink = styled(Link)`
	text-decoration: none;	
`

const Title = styled.h3`	
	color: #333;		
	font-size: 27px;	
`

const Cover = styled(Img)`	
	img {				
		
	}
	 		 	
`

export default (props) => (
	<ItemWrapper>				
		 	<div className="PortfolioItem__topbar">
				<div className="PortfolioItem__topbar__button">
				</div>
			</div>				
			<ItemLink to={ props.data.path }>
				<Cover sizes={props.data.thumbnail} />
			</ItemLink>				
			<div className="PortfolioItem__body">
				<ItemLink to={ props.data.path }>
					<Title className="PortfolioItem__title">{ props.data.title }</Title>
				</ItemLink>				
				<p className="PortfolioItem__content">{ props.data.excerpt }</p>						
				<Link className="btn PortfolioItem__btn" to={ props.data.path }>Seguir Leyendo ➞</Link>			
			</div>	
	</ItemWrapper>
)
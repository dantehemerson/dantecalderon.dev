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

const TopBar = styled.div`
	height: 25px;
	background: #e0e3e6;
	width: 100%;
	display: flex;
	align-items: center;
	border-radius: 4px 4px 0 0;

	.TopBarButtons {
		background: white;
		border-radius: 50%;
		height: 9px;
		width: 9px;
		position: relative;
		margin-left: 5px;
		&:after {
			content: '';
			    background: white;
			    border-radius: 50%;
			    position: absolute;
			    left: 260%;
			    top: 0;
			    height: 9px;
			    width: 9px;

		}

		&:before {
			content: '';
			background: white;
			border-radius: 50%;
			height: 9px;
			width: 9px;
			position: absolute;
			left: 130%;
			top: 0;
		}
	}
`

export default (props) => (
	<ItemWrapper>				
		 	<TopBar>
				<div className="TopBarButtons"></div>
			</TopBar>				
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
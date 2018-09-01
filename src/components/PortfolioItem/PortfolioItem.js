import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ItemWrapper = styled.article`		
	box-shadow: 0px 0px 5px #BABABA;
	border-radius: 4px 4px 0 0;
	cursor: pointer;
`

const ItemContainer = styled.div`
	position: relative;
	text-align: center;
`

const Title = styled.h3`	
	color: #758282;		
	font-family: 'Open Sans', serif;
	font-size: 15px;	
	text-transform: uppercase;
	width: 100%;
	text-align: center;
	margin: 0;
`

const Content = styled.p`	
	color: white;			
`

const Cover = styled(Img)`	
	img {				
		
	}	 	
`

const TopBar = styled.div`
	height: 30px;
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

const ItemBody = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, .5);
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0;

`

const ItemLink = styled(Link)`
	text-decoration: none;

	&:hover .PortfolioItem__body {
		opacity: 1;
	}
`

const ItemView = styled.p`
	color: white;
	padding: 10px 30px;
	background: gray;
	border-radius: 3px;
	font-weight: 600;
	&:hover {
		background: yellow;
	}
`


export default (props) => (
	<ItemLink to={ props.data.path }>
		<ItemWrapper>				
		 	<TopBar>
				<div className="TopBarButtons"></div>
				<Title>{ props.data.title }</Title>	
			</TopBar>
			<ItemContainer>
				<Cover sizes={props.data.thumbnail} />
				<ItemBody className="PortfolioItem__body">					
					<Content>{ props.data.excerpt }</Content>		
					<ItemView>VER ➞</ItemView>	
				</ItemBody>	
			</ItemContainer>				
		</ItemWrapper>
	</ItemLink>
)
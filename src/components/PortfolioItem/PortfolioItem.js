import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ItemWrapper = styled.article`		
	box-shadow: 0px 0px 8px #ededed;
	cursor: pointer;
`

const ItemContainer = styled.div`
	position: relative;
	text-align: center;
`

const Title = styled.h3`	
	color: white;		
	font-size: 27px;	
`

const Content = styled.p`	
	color: white;			
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

const ItemBody = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, .4);
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;	
`

const ItemLink = styled(Link)`
	text-decoration: none;
`

export default (props) => (
	<ItemWrapper>				
		 	<TopBar>
				<div className="TopBarButtons"></div>
			</TopBar>
			<ItemLink to={ props.data.path }>
				<ItemContainer>
					<Cover sizes={props.data.thumbnail} />
					<ItemBody>					
						<Title>{ props.data.title }</Title>	
						<Content>{ props.data.excerpt }</Content>		
						<ItemLink to={ props.data.path }>VER ➞</ItemLink>	
					</ItemBody>	
				</ItemContainer>				
			</ItemLink>

	</ItemWrapper>
)
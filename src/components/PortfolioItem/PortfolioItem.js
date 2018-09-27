import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ItemWrapper = styled.article`
	border-radius: 4px 4px 0 0 !important;
	cursor: pointer;
	text-align: left;
`

const CoverWrapper = styled.div`
	position: relative;
	overflow: hidden;
	box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
	margin-bottom: 13px !important;
  ${ItemWrapper}:hover & {
  	box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;
    transform: translateY(-3px);
  }
`

const Title = styled.h3`
	color: #758282;
	font-family: 'Open Sans', serif;
	font-size: 1.1rem;
	text-align: left;
	width: 100%;
	display: inline;
	margin: 0;
	${ItemWrapper}:hover & {
  	color: #1976d2;
  	box-shadow: rgb(224, 214, 235) 0px -3px 0px 0px inset;
  }
`

const Cover = styled(Img)`
	img {

	}
`

const TopBar = styled.div`
	height: 26px;
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

const ItemLink = styled(Link)`
	text-decoration: none;
`

const TagsWrapper = styled.div`
	text-align: left;
`

const Tag = styled(Link)`
	padding: 2px 7px;
	background: #F7F7F7;
	color: #6A6A6A;
	border-radius: 3px;
	text-decoration: none;
	margin: 2px 2px;
	font-size: 13px;
	font-weight: 600;
	display: inline-block;
	text-transform: uppercase;
	&:hover {
		background: #E2E2E2;
		// color: #BCBCBC;
	}
`

export default props => (
	<ItemLink to={ props.data.path }>
		<ItemWrapper>
			<CoverWrapper>
			 	<TopBar>
					<div className="TopBarButtons"></div>
					{/* <Title>{ props.data.title }</Title> */}
				</TopBar>
				<Cover sizes={ props.data.thumbnail } />				
			</CoverWrapper>
			<Title>{ props.data.title }</Title>
		</ItemWrapper>
		<TagsWrapper className="PortfolioItem__tagswrapper">
			{
				props.data.tags.map((value, index) => {
					return (
						<Tag key={ index }>
							<clr-icon shape="tag" class="icon-item" size="18"/>
							{ " " + value }
						</Tag>
					)
				})
			}
		</TagsWrapper>
	</ItemLink>
)
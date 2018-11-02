import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { media } from '../styles'

const Container = styled(Link)`
	& > div {
		display: flex;
		align-items: center;		
		text-align: left;		
		flex-direction: column;
		border-bottom: 1px solid rgb(221, 221, 221);
    padding: 2rem 0px;
    ${media.md`
    	flex-direction: row;
    `}
		* {
			margin: 0;    	
		}
	}
	text-decoration: none;
`
const ImageWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
	width: 100%;
	max-width: 500px;
	${media.md`
		width: 36%;		
	`}
`
const Info = styled.div`
	width: 100%;
	max-width: 560px;
	padding-top: 12px;
	${media.md`
		padding: 0 0 0 50px;
		width: 64%;		
		max-width: 100%;
	`}
`
const Title = styled.h3`
	font-family: 'Open Sans', sans-serif;
	color: #282a2d;	
	transition: .3s;
	${Container}:hover & {
		color: #1976d2;
	}
`
const Time = styled.p`
	color: #757575;
	font-size: 14px;
	text-align: right;
	padding: 6px 6px 6px;
`
const Excerpt = styled.p`
	color: #757575;
	font-size: 15px;
	${media.sm`
		font-size: 1rem;
	`}
`

export default props => (
	<Container to={ props.data.path }>
		<div>
			<ImageWrapper>
				<Img sizes={props.data.thumbnail} />
			</ImageWrapper>
			<Info>
				<Title>{ props.data.title }</Title>
				<Time>
					<time dateTime="2008-02-14 20:00">{ props.data.date} </time>&middot; { props.data.timeToRead} min read
				</Time>			
				<Excerpt>{ props.data.excerpt }</Excerpt>						
			</Info>
		</div>
	</Container>
)
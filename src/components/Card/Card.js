import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled(Link)`
	& > div {
		display: flex;
		align-items: center;		
		text-align: left;		
		border-bottom: 1px solid rgb(221, 221, 221);
    padding: 2rem 0px;
		* {
			margin: 0;    	
		}
	}
	text-decoration: none;
`
const ImageWrapper = styled.div`
	width: 36%;
	border-radius: 4px;
	overflow: hidden;
`
const Info = styled.div`
	width: 64%;
	padding-left: 50px;
`
const Title = styled.h3`
	font-family: 'Open Sans', sans-serif;
	color: #282a2d;
	padding-bottom: 10px;
`
const Time = styled.p`
	color: #757575;
	font-size: 14px;
	text-align: right;
	padding: 6px;
`
const Excerpt = styled.p`
	color: #757575;
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
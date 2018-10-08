import React from 'react'
import styled from 'styled-components'


const List = styled.ul`	
	margin-left: 0;
`

const Container = styled.div`
	
`

const Item = styled.li`
	padding: 2px 10px;
	background: #F7F7F7;
	color: #6A6A6A;
	border-radius: 25px;
	text-decoration: none;
	margin: 0 2px;
	font-size: 13px;
	font-family: 'Open Sans';
	font-weight: 600;
	display: inline-block;
	text-transform: capitalize;
	&:hover {
		background: #E2E2E2;
	}
`

export default props => (
	<Container>
		<List>
			{
				props.items.map(item => <Item>{ item }</Item>)
			}
		</List>
	</Container>
)
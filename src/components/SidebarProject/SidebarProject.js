import React from 'react'
import styled from 'styled-components'

import Stack from './Stack'
import Tags from '../../components/Tags'

const Container = styled.div`
	max-width: 480px;
  margin-left: auto;
  width: 100%;
  margin-right: auto;
`

const Title = styled.h3`
	font-family: 'Open Sans';
	font-size: 16px !important;	
	padding-bottom: 10px;
	text-align: center;
	border-bottom: 1px solid #efefef;
`

const List = styled.ul`
	list-style: none;
	margin-left: 0;
`

const Item = styled.li`
	font-family: 'Open Sans';
	font-size: 15px;

	display: flex;
	align-items: center;
	svg {
		width: 22px;
		height: 22px;
		position: relative;
		top: -1px;
		margin-right: 10px;
	}
`


export default props => (
	<Container>
		<Title>Información del Proyecto</Title>
		<List>
			<Item title="Licencia"> <svg version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M24,33H12a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z" className="clr-i-outline clr-i-outline-path-1" /><rect x={17} y={9} width={2} height="22.5" className="clr-i-outline clr-i-outline-path-2" /><path d="M28,7H8A1,1,0,0,1,8,5H28a1,1,0,0,1,0,2Z" className="clr-i-outline clr-i-outline-path-3" /><path d="M26.93,24.79a7.23,7.23,0,0,1-5.81-2.89l-.6-.8,1.59-1.21.6.8a5.28,5.28,0,0,0,8.42,0l.6-.8,1.59,1.21-.6.8A7.23,7.23,0,0,1,26.93,24.79Z" className="clr-i-outline clr-i-outline-path-4" /><path d="M30.51,19.25a.8.8,0,0,1-.73-.48L26.93,12.2l-2.85,6.57a.8.8,0,0,1-1.47-.64L26.2,9.87a.83.83,0,0,1,1.47,0l3.58,8.26a.8.8,0,0,1-.73,1.12Z" className="clr-i-outline clr-i-outline-path-5" /><path d="M9.68,24.79A7.23,7.23,0,0,1,3.88,21.9l-.6-.8L4.86,19.9l.6.8a5.28,5.28,0,0,0,8.42,0l.6-.8,1.59,1.21-.6.8A7.23,7.23,0,0,1,9.68,24.79Z" className="clr-i-outline clr-i-outline-path-6" /><path d="M13.26,19.25a.8.8,0,0,1-.73-.48L9.68,12.2,6.84,18.77a.8.8,0,0,1-1.47-.64L8.95,9.87a.83.83,0,0,1,1.47,0L14,18.13a.8.8,0,0,1-.73,1.12Z" className="clr-i-outline clr-i-outline-path-7" />
        <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
      </svg> MIT</Item>
			<Item title="Rol"> <svg version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M18,22a4.23,4.23,0,1,0-4.23-4.23A4.23,4.23,0,0,0,18,22Zm0-6.86a2.63,2.63,0,1,1-2.63,2.63A2.63,2.63,0,0,1,18,15.14Z" className="clr-i-outline clr-i-outline-path-1" /><path d="M22,4a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2v7h8ZM20,9H16V4h4Z" className="clr-i-outline clr-i-outline-path-2" /><path d="M26,30V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27a1.13,1.13,0,0,0-.26.73V30h1.6V27.87A8.33,8.33,0,0,1,18,25.29a8.33,8.33,0,0,1,6.4,2.59V30Z" className="clr-i-outline clr-i-outline-path-3" /><path d="M28,6H24V8h4V32H8V8h4V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6Z" className="clr-i-outline clr-i-outline-path-4" />
        <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
      </svg> Web Developer</Item>
			<Item title="Cliente"><svg version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path className="clr-i-outline clr-i-outline-path-1" d="M17.9,17.3c2.7,0,4.8-2.2,4.8-4.9c0-2.7-2.2-4.8-4.9-4.8c-2.7,0-4.8,2.2-4.8,4.8C13,15.1,15.2,17.3,17.9,17.3z M17.8,9.6C17.9,9.6,17.9,9.6,17.8,9.6c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.8-2.9,2.8c-1.6,0-2.8-1.3-2.8-2.8C15,10.9,16.3,9.6,17.8,9.6z" /><path className="clr-i-outline clr-i-outline-path-2" d="M32.7,16.7c-1.9-1.7-4.4-2.6-7-2.5c-0.3,0-0.5,0-0.8,0c-0.2,0.8-0.5,1.5-0.9,2.1c0.6-0.1,1.1-0.1,1.7-0.1c1.9-0.1,3.8,0.5,5.3,1.6V25h2v-8L32.7,16.7z" /><path className="clr-i-outline clr-i-outline-path-3" d="M23.4,7.8c0.5-1.2,1.9-1.8,3.2-1.3c1.2,0.5,1.8,1.9,1.3,3.2c-0.4,0.9-1.3,1.5-2.2,1.5c-0.2,0-0.5,0-0.7-0.1c0.1,0.5,0.1,1,0.1,1.4c0,0.2,0,0.4,0,0.6c0.2,0,0.4,0.1,0.6,0.1c2.5,0,4.5-2,4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6,0-3,0.8-3.8,2.2C22.5,6.8,23,7.2,23.4,7.8z" /><path className="clr-i-outline clr-i-outline-path-4" d="M12,16.4c-0.4-0.6-0.7-1.3-0.9-2.1c-0.3,0-0.5,0-0.8,0c-2.6-0.1-5.1,0.8-7,2.4L3,17v8h2v-7.2c1.6-1.1,3.4-1.7,5.3-1.6C10.9,16.2,11.5,16.3,12,16.4z" /><path className="clr-i-outline clr-i-outline-path-5" d="M10.3,13.1c0.2,0,0.4,0,0.6-0.1c0-0.2,0-0.4,0-0.6c0-0.5,0-1,0.1-1.4c-0.2,0.1-0.5,0.1-0.7,0.1c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1,0,1.9,0.6,2.3,1.5c0.4-0.5,1-1,1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1,1.3-2.8,4-1.5,6.1C7.3,12.3,8.7,13.1,10.3,13.1z" /><path className="clr-i-outline clr-i-outline-path-6" d="M26.1,22.7l-0.2-0.3c-2-2.2-4.8-3.5-7.8-3.4c-3-0.1-5.9,1.2-7.9,3.4L10,22.7v7.6c0,0.9,0.7,1.7,1.7,1.7c0,0,0,0,0,0h12.8c0.9,0,1.7-0.8,1.7-1.7c0,0,0,0,0,0V22.7z M24.1,30H12v-6.6c1.6-1.6,3.8-2.4,6.1-2.4c2.2-0.1,4.4,0.8,6,2.4V30z" />
        <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
      </svg> Monsters Inc</Item>
		</List>
		<Title>Stack</Title>
		<Stack items={ props.stack }/>
		<Title>Tags</Title>
		<Tags items={ props.tags }/>
	</Container>
)
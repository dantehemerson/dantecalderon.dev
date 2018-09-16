import React from 'react'
import { withPrefix } from 'gatsby-link'


export default props => (
	<div className='Stack__item' >
		<img 
			className="Stack__item__img" 
			style={{
				background: (props.item.background ? props.item.background : 'transparent'),
				boxShadow: (props.item.background ? '0 0 4px #191919' : '0 0 0 transparent' )
			}}
			src={ withPrefix('icons/' + props.item.icon) }/>
		<h3 className="Stack__item__name">{ props.item.name }</h3>
		<div className="Stack__item__typewrapper">
			<h4 className="Stack__item__type">{props.item.type}</h4>
		</div>

		{/*
		<div className="Stack__item__tooltip">
			<p className="Stack__item__tooltip__text">
				This is the tooltip alsdkj  asldkj  alsdkj lakdsj 
				<span className="Stack__item__tooltip__arrow"></span>
			</p>
		</div>
	*/}
	</div>
)
import React from 'react'

import Item from '../Item'


export default ({ group }) => (
	<div className="Stack__group">
		<p className="Stack__group__title">{group.title}</p>
		<div className="Stack__group__itemswrapper">
			{
				group.items.map((item, index) => <Item key={index} item={item}/>)
			}
		</div>
	</div>
)
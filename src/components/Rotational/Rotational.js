import React from 'react'
import Img from 'gatsby-image'

const Rotational = (props) => (
	<div className="Rotational">
	{
		console.log(props.avatar)
	}
		<div className="Rotational__orbit">
			<div className="Rotational__item computer"></div>
			<div className="Rotational__item hacker"></div>
			<div className="Rotational__item server"></div>
			<div className="Rotational__item www"></div>
			<div className="Rotational__item browser"></div>
			<div className="Rotational__item protection"></div>
			<div className="Rotational__item laptop"></div>
			<div className="Rotational__item headphones"></div>
		</div>
	</div>
)

export default Rotational
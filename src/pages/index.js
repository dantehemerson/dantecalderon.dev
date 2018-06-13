import React from 'react'

import Rotational from '../components/Rotational'

class Index extends React.Component {
	render() {
		return (
			<main className="Header-Home">			
				<h1 className="Header-Home__title">Dante Calderón</h1>
				<h2 className="Header-Home__subtitle">Javascript Developer</h2>
				<Rotational/>
			</main>
		)
	}
}

export default Index

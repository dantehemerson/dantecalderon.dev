---
model: post
title: Mejores prácticas con React
description: Simple blog
path: mejores-practicas-con-react
thumbnail: /img/react-best-practices.png
date: 2018-10-01T20:16:06.768Z
published: true
style: full-image
tags:
  - react
---

### Importando componentes y librearías
Al importar componentes lo que hago es separar con una linea en blanco los componentes que son externos y los de mí proyecto. Por ejemplo:
```javascript
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'

import Header from './components/Header'
import Footer from './components/Footer'
import initialState from './data'
import './css/styles.css'

class MyComponent extends React.Component {
	...
}
```

### Estructura de la clase
La estructura de la clase de un componente lo ordeno en el siguiente orden:
* Constructor
* Estado(`state`)
* PropTypes
* DefaultProps
* Funciónes del ciclo de vida de React(`componentDidMount`, `componentDidUpdate`, etc)
* Función `render`

Por supuesto, agrega sólo los elementos que vas a utilizar.
Vamos a ver como declarar estos componentes.

#### Constructor
En muchas ocaciónes no es necesario usar el constructor, ya que el uso más común es para iniciar el **estado** y **bindear** las funciónes. En caso de que quierás usarlo declarálo justo después de definida la clase:
```javascript
class Component extends React.Component {
	constructor(...props) {
		super(...props)
	}
}
```


#### Estado
Una forma de declarar e inicializar el store es está forma:
```javascript
class Component extends React.Component {
	constructor(...props) {		
		this.state = {
			...
		}
	}
}
```
Aúnque también podemos hacer lo mismo de está forma:
```javascript
class Component extends React.Component {
	// ... constructor(si es necesario)
	state = {
		...
	}
}
```
de está forma ya no necesitamos el constructor(salvo para casos específicos) y nuestro código se ve mas elegante :sunglasses:.

#### propTypes y defaultProps
`propTypes` y `defaultProps` son propiedades estáticas. Con ES6 las se definen de está manera:
```javascript
class Component extends React.Component {
	static propTypes = {
		...
	}

	static defaultProps = {
		
	}
}
```


#### Escribiendo nuestras propias funciónes
```javascript
class Component extends React.Component {
	// ...

	fetchData = () => {

	}

	updateMenu = () => {

	}
}
```
Definiendo las funciónes de está forma ya no será necesario **bindear** las funciónes en el **constructor**.

:tada: Finalmente así quedaría nuestro componente:
```javascript
class Component extends React.Component {
	// Constructor
	constructor(...props) {		
		super(...props)	
		// ...
	}

	// Estado
	state = {
		//...
	}

	// Funciónes del ciclo de vida de react
	componentDidMount() {

	}

	componentDidUpdate() {

	}

	// Nuestras funciónes
	fetchData = () => {
		// ...
	}

	updateMenu = () => {
		// ...
	}

	// Función render
	render() {
		return (
			<div>
				Hello World
			</div>
		)
	}
}
```

### Propiedades de los componentes
Sí tu componente tienes muchas propiedades, colocá cada propiedad en una linea separada.
Por ejemplo:
```javascript
<input name="name" value={ name } className="ContactForm__input" placeholder="Nombre" type="text" required onChange={ this.handleChange }/>
```
quedaría mejor como:
```javascript
<input 
	name="name" 
	value={ name } 
	className="ContactForm__input" 
	placeholder="Nombre" 
	type="text" 
	required 
	onChange={ this.handleChange }/>
```

### Javascript dentro de JSX

#### Una sola linea
Agrega un espacio en los extremos del código.
```javascript
<h1>{ this.state.title }</h1>
<p>{ this.getBody() }</p>
```
#### Multiples lineas
Identa las llaves y deja la llave izquieda y derecha en una linea separada cada una.
```javascript
<div>
	{
		this.date &&
			<time>
				this.date
			</time>
	}
</div>
```

## Conclusión
Tener la estructura defínida de nuestro código es muy importante sobre todo cuando se trabaja en equípo, seguir pautas y reglas sintacticas y semánticas harán que nuestro **código sea mas limpio**.

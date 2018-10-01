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
Al importar componentes y/o librerías lo que hago es separar entre los componentes que son externos y los de mí proyecto. Por ejemplo:
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

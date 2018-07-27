---
templateKey: blog
path: es2018-parte2-rest-spread-object-y-promise-finally
thumbnail: /img/0_tfjfeucebech_w5h.jpeg
title: 'ES2018 Parte2: Rest/Spread Object y Promise.finally'
date: '2018-03-16T20:45:14-05:00'
description: >
  Dos de las partes más importantes de JavaScript, Objectos y Promesas tienen
  nuevas funcionalidades en ES2018, veamos cómo funcionan.
---
## Dos de las partes más importantes de JavaScript, Objetos y Promesas tienen nuevas funcionalidades en ES2018, veamos cómo funcionan.

![Photo by Emily Marie](/img/0_tfjfeucebech_w5h.jpeg)
![Photo by Emily Marie](https://crearpaginaweb.org/wp-content/uploads/2013/09/imagenweb.jpg)

Photo by [Emily Marie](https://unsplash.com/@sahuaromedia?utm_source=medium&utm_medium=referral)
on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

> Nota: Este contenido lo publiqué primero en [mi
> newsletter](https://tinyletter.com/yeion7), la semana después de publicar el
> newsletter publico en mi blog, si quieres ser el primero en leer [suscríbete](https://tinyletter.com/yeion7).

En Enero el [TC39](https://ecma-international.org/memento/TC39.htm) se reunió y
**se decidió las propuestas que llegarán a stage 4** y por consiguiente **serán
incluidas dentro de ECMAScript 2018**.

Este es un post de una serie donde cubriremos esas nuevas características.

[Parte1: Mejoras a
RegExp](https://medium.com/@yeion7/es2018-parte-1-mejoras-a-regexp-dad987c52802)

**Parte2: Rest/Spread Object y Promise.finally**

_Parte3: Iteración asincrona_

Sí estas interesado en cuales son todas las propuestas actuales y sus estados
puedes verlas [acá](https://github.com/tc39/ecma262/blob/master/README.md)

#### Rest Object

Desde ES6 tenemos la posibilidad usar [el operador rest en
Arrays](https://medium.com/entendiendo-javascript/entendiendo-la-asignaciÃ³n-por-destructuring-en-javascript-c352a462d066),
desde ES2018 podemos hacerlo también con objetos literales.

El operador rest nos permite asignar las propiedades de un objeto a variables, y
las propiedades que no asignemos (el resto) asignarlas a un objeto.

Debemos tener en cuenta que esto funciona con las propiedades que son
enumerables y el operador rest va a asignar las propiedades que no hayan sido
nombradas antes.

```js
const colors = {
  red: '...',
  green: '...',
  blue: '...',
  black: '...',
  white: '...'
}

const { red, green, blue, ...rest} = colors

console.log(rest) // {black: '', white: ''}
```

La principal restricción es que debes tener en cuenta es que el operador rest
deber ir al final de la declaración.

```js
const { ...rest, red, green } = colors // error
```

#### Spread Object

Esta es una gran funcionalidad (tal vez mi favorita), permite asignar los
valores de un objeto a otro, tal vez antes de ES2018, utilizabas `Object.assign`
para lograr un resultado igual.

```js
const colors = {
  red: '...',
  blue: '...'
}

const newColors = {...colors}

console.log(newColors) // {red: '...', blue: '...'}
```

Algo importante a tener en cuenta es que el operador Spread hace una copia
shallow del objeto, esto quiere decir que si el objeto tiene objetos anidados
van a seguir teniendo la misma referencia ([referencias de
objetos](https://medium.com/entendiendo-javascript/entendiendo-los-objetos-en-javascript-3a6d3a0695e5))

```js
const colors = {
  red: {
    light: '...',
    dark: '...'
  },
  blue: '...'
}

const newColors = {...colors}

newColors.red.ligth = 'rosa'

console.log(colors.red.ligth) // 'rosa'
```

Otra uso bastante util que puedes darle es unir varios objetos en uno nuevo,
para esto recuerda que si tienen propiedades con el mismo nombre, va a
resolverse de acuerdo al orden como los uses.

```js
const colorfull = {
  red: '',
  green: '',
  white: '',
}

const blackAndWhite = {
  black: '',
  white: ''
}

const colors = { ...colorfull, ...blackAndWhite }
```

En este caso la propiedad `white` de `blackAndWhite` va a ser la que se use en
el nuevo objeto.

El tercer uso más común es poder tener valores por defecto.

```js
const DEFAULTS = {
  user: 'lala',
  age: 18,
 }

const juan = { ...DEFAULTS, user: 'juan' }

console.log(juan) // {user: 'juan', age: 18}
```

Spread operator es increíble y permite realizar acciones bastante útiles con
objetos, hay un par de detalles de la implementación que quisiera nombrar.

* Todos los objetos creados van a estar vinculados a `Object.prototype`
* Para obtener los valores de los objetos fuente se utilizan los
  [getters](https://medium.com/entendiendo-javascript/entendiendo-getters-y-setters-en-javascript-f0eeb5d6fe06) de las propiedades
* Para definir las propiedades en el nuevo objeto se utilizan solo los valores, no los [setters](https://medium.com/entendiendo-javascript/entendiendo-getters-y-setters-en-javascript-f0eeb5d6fe06)
* Spread operator no copia los atributos de cada propiedad del objeto.

#### Promise.finally

Al ejecutar una promesa podemos asignar callbacks que se ejecutan cuando la
promesa es fullfiled con `.then` o rejected con `.catch` , ahora `.finally` nos
da la posibilidad de ejecutar otro callback si importar si se completo o no.

Imagina que haces una petición y debes utilizar un estado de loading mientras
sucede la consulta, antes tendríamos que setear el nuevo estado en el `.then` y
también en el `.catch` ahora con finally solo lo hacemos en un lugar.

El finally se va a ejecutar sin importar si la promesa tuvo una falla.

```js
this.setState({loading: true})

fetch('...')
  .then(response => response.json())
  .then(data => this.setState({data}))
  .catch(e => this.setState({error: true, message: e}))
  .finally(() => this.setState({loading: false}))
```

Su funcionalidad es básicamente la misma al finally usada en código asincrono.

#### Palabras finales

Estas funcionalidades son las que tal vez vas a usar con más frecuencia en tu
trabajo, para un montón de cosas y situaciones, es importante que las aprendas
bien. si tienes dudas no dudes en escribirme.

En el próximo post, hablaremos sobre iteración asíncrona.

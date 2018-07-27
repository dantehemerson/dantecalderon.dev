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

> Nota: Este contenido lo publiqué primero en [mi
> newsletter](https://tinyletter.com/yeion7), la semana después de publicar el
> newsletter publico en mi blog, si quieres ser el primero en leer [suscríbete](https://tinyletter.com/yeion7).

En Enero el [TC39](https://ecma-international.org/memento/TC39.htm) se reunió y
**se decidió las propuestas que llegarán a stage 4** y por consiguiente **serán
incluidas dentro de ECMAScript 2018**.

Este es un post de una serie donde cubriremos esas nuevas características.

[Parte1: Mejoras a
RegExp](https://medium.com/@yeion7/es2018-parte-1-mejoras-a-regexp-dad987c52802)



# Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### How do we deploy it?

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### How do we deploy it?

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### How do we deploy it?

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### How do we deploy it?

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### 3. Installing dependencies
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### How do we deploy it?
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### 3. Installing dependencies

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### How do we deploy it?

 - Write MORE Tests
 - Add Night Mode

How do we deploy it?
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>


**Parte2: Rest/Spread Object y Promise.finally**

_Parte3: Iteración asincrona_

Sí estas interesado en cuales son todas las propuestas actuales y sus estados
puedes verlas [acá](https://github.com/tc39/ecma262/blob/master/README.md)

#### 3. Installing dependencies

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

#### 3. Installing dependencies

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

#### 3. Installing dependencies

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

#### 3. Installing dependencies

Estas funcionalidades son las que tal vez vas a usar con más frecuencia en tu
trabajo, para un montón de cosas y situaciones, es importante que las aprendas
bien. si tienes dudas no dudes en escribirme.

En el próximo post, hablaremos sobre iteración asíncrona.

---
templateKey: blog
path: novedades-y-configuración-de-webpack-4
thumbnail: /img/0_733pce3vafdi88jv.jpeg
title: Novedades y configuración de Webpack 4
date: '2018-02-27T21:27:53-05:00'
description: >-
  Este fin de semana se ha lanzado Webpack 4 (nombre clave, Legato), esta es una
  versión bastante importante, ya que se ha trabajado bastante en el performance
  y en seguir el concepto de cero configuración #0CJS
---
Este fin de semana se ha **lanzado** **Webpack 4** (nombre clave, _Legato_),
esta es una versión bastante importante, ya que se ha trabajado bastante en el

 Plugins aún no se han actualizado, en futuras semanas supongo se lanzarán las versiones que soporten webpack 4 totalmente ya que han habido cambios importante en la forma como se integran los plugins.

Pero creemos un proyecto desde cero y veamos más detalles.

#### Primer proyecto con Webpack 4 y React

En este ejemplo vamos a crear el setup de un proyecto con React, primero creamos
una carpeta del proyectos

```bash
mkdir react-webpack4 

cd react-webpack4
```

Inicializamos el `package.json`

```bash
yarn init -y
```

Ahora vamos a instalar webpack, las instalamos como dependencias de desarrollo.

```
yarn add -D webpack webpack-cli
```

Ahora podemos crear un script en el `package.json`

```
"scripts": {
  "build": "webpack"
}
```

Sí corremos el comando `yarn build` vamos a tener un error, se refiere a que no
puede resolver `.src` , esto es porque por defecto busca el archivo `./src/index.js`

Crea ese archivo, y coloca algo sencillo cómo:

```
console.log('prueba')
```

y ejecuta `yarn build`

ahora se va a crear el archivo `.dist/main.js` en este momento ya tenemos
construido el proyecto, perno nos falta React y definir nuestro entorno de
desarrollo.

Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.

Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.
Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.
Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.
Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.
Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.
Primero modifiquemos un poco los scripts

```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

El flag mode va a asignar las optimizaciones para cada entorno.

Para poder usar react debemos añadir babel y el preset `babel-preset-react`

Instalemos las dependencias necesarias

```bash
yarn add -D babel-core babel-loader babel-preset-env babel-preset-react
```

Veamos cada dependencia

* babel-core: El core que necesitamos para cargar presets
* babel-loader: Es un loader para poder utilizar babel con webpack
* babel-preset-env: Para transpilar características de es6 en adelante
* babel-preset-react: Para transpilar JSX

Ahora debemos decirle a webpack que utilize babel, para esto podemos crear un
archivo `webpack.config.js` o podemos utilizar el flag `--module-bind js=babel-loader` , en este caso vamos a utilizar el segundo

```
"scripts": {
  "dev": "webpack --mode development --module-bind js=babel-   loader",
  "build": "webpack --mode production --module-bind js=babel-loader"
}
```

Ahora ya tenemos listo nuestro setup, podemos crear los archivos de nuestro
proyecto, dentro de `./src/index.js`

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
```

Esto va a añadir nuestro componente dentro de un elemento con id app, para esto
debemos crear un html base en `./dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.js" charset="utf-8"></script>
    </body>
</html>
```

Dentro de poco el plugin `HtmlWebpackPlugin`tendrá soporte para webpack 4

Necesitamos también un servidor de desarrollo, para esto podemos usar
`webpack-dev-server`

```
yarn add -D webpack-dev-server
```

y modificamos el script de `dev`

```
{
 "dev": "webpack-dev-server --mode development --module-bind   js=babel-loader --content-base ./dist/"
}
```

Debemos agregar el tag `— content-base ./dist/`ya que por ahora el no esta
buscando esa ruta por defecto, en próximas versiones esto no será necesario.

Ahora puedes ejecutar `yarn dev` y tendrás tu entorno de desarrollo funcionando
y si decides enviarlo a producción solo debes ejecutar `yarn build.`

Puedes encontrar el resultado final en este
#### Palabras finales

Las mejoras de rendimiento en el proceso de construcción del proyecto han sido
increíbles en está versión y según el equipo de webpack aún hay bastante campo
de mejora.

**¿Cuál herramienta de build utilizan actualmente?**

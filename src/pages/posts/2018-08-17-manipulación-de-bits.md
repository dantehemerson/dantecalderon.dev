---
model: post
title: Manipulación de bits
description: Manipulación de bits y usos.
path: manipulacion-de-bits
thumbnail: /img/bit-manipulation.png
date: '2018-08-17T03:16:12-05:00'
style: full-image
tags:
  - competitive programming
  - bits
  - c++
---
### Operaciónes útiles
#### Conocer si el j-ésimo bit(desde la derecha) es 1 ó 0

Para saber si un bit está encendido(`1`) ó apagado(`0`) es necesario compararlo con un segundo mapa en el cual  la posición `j` esté en `1` y el resto en `0`.
Por ejemplo si `j = 2`, una forma de hacerlo es:
```
// 1 (dec) -> 000001 (bin)
1 << j
```
Como el numero 1 solo tiene encendido el bit de la derecha al recorrer `j` posiciónes a la izquierda quedaría asi:
```
000001 // 1 << 0 (j = 0)
000010 // 1 << 1 (j = 1)
000100 // 1 << 2 (j = 2)
010000 // 1 << 4 (j = 4)

Como verás el primer bit desde la derecha es la posición 0, el segundo el 1 y asi sucesivamente. 
```

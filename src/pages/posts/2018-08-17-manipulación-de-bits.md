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

Para saber si un bit está encendido(`1`) ó apagado(`0`) es necesario compararlo con un segundo número el cual   tenga el bit en la posición `j` (desde la derecha) en `1` y el resto en `0`.

Esto se puede hacer de la siguiente manera:

```
1 << j
```

> Nota: \`j\`  empieza a contar las posiciónes desde 0, es decir el primer bit desde la derecha estará en la posición \`0\` es segundo en la posición \`1\` y asi sucesivamente.

Como el numero 1 solo tiene encendido el bit de la derecha al recorrer `j` posiciónes a la izquierda quedaría asi:

```
000001 // 1 << 0 (j = 0)
000010 // 1 << 1 (j = 1)
000100 // 1 << 2 (j = 2)
010000 // 1 << 4 (j = 4)

Como verás el primer bit desde la derecha es la posición 0, el segundo el 1 y asi sucesivamente. 
```

#### Conocer si un número es par o impar

Para convertir un numero a decimal lo que se hace es sumar sus valores correspondiente. 

Por ejemplo tenemos el siguiente numero en binario:

```
010100
```

Lo valores de acuerdo a las posiciónes del numero son:

```
2⁵  2⁴  2³  2²  2¹  2⁰ // El exponente aumenta de Izq. > Der.
---------------------
32  16  8   4   2   1  
0   1   0   1   0   0
```

Luego se suman todas los valores de las posiciónes que sean 1, por lo que la suma sería:

```
16 + 4 = 22 (dec)
```

Como vemos cada numero es el doble del anterior iniciando en 1. La suma de los valores sera par siempre que el bit menos significativo sea 0, ya que su valor es 1.

Si sumamos los valores de cualquier combinación de los bits excepto el **bit menos signicativo** el resultado siempre será par ya que todos tiene mitad, por que es el resultado del doble del anterior. Por eso decimos que el **bit menos significativo** es el que define la paridad de un numero.

En conclución si el bit menos significativo del numero es 1 entonces es impar, y si es 0 entonces es par.

Esto se hace de la siguiente manera:

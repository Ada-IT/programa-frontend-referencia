---
id: clase-42
title: 'Práctica integradora: DFD'
sidebar_label: 42) Práctica integradora
---

### 🏁 Objetivos

- Que puedas aplicar lo aprendido para resolver un ejercicio integrador.
- Que el ejercicio te ayude a resolver el proyecto del módulo siguiente.

---

### 🚀 Recursos de la clase

📹 Grabación

---

## Consigna

Nos pidieron desarrollar un juego, pero antes de ponernos a codificar, quieren que bajemos algunas funcionalidades utilizando pseudocódigo y DFD. El juego se trata de ir desplazando distintos elementos que están en una matriz hasta crear filas o columnas de, al menos, tres elementos **iguales** (muy similar al candy crash).

Para eso, tenemos que documentar con pseudocódigo y DFD las siguientes funcionalidades:

### `generarGrilla()`

Generar una matriz cuadrada (_igual cantidad_ de filas y columnas), y dentro de cada posición guardar un elemento elegido al azar. Para esto último, en un cuadro de asignación, podés hacer lo siguiente:

![Asignar elemento random](/img/dfd/XobtenerItemRandom.jpg)

En este caso podemos tomar como que `obtenerItemRandom` es algo que ya existe y nos va a crear, sin necesidad de hacer nada más, un elemento de los que queremos mostrar en la grilla.

### `obtenerBloqueHorizontal()`

Teniendo una matriz/grilla, generada con el algoritmo que hicimos en el punto anterior, queremos buscar si hay alguna **fila** en donde tenemos al menos 3 elementos seguidos (aunque puede haber más) que sean iguales. Los elementos pueden estar en cualquier parte de la **fila**, pero tienen que estar juntos. En el caso que haya algún bloque de al menos 3 elementos, tenemos que guardar en una variable la cantidad de elementos que encontramos repetidos. Una vez que encontramos la cantidad total de elementos iguales, seguidos, en la misma **fila**, tenemos que guardar en una variable la posición el último elemento encontrado. Tanto la grilla, como el tamaño de la misma, los podemos obtener utilizando el siguiente diagrama:

![Generar grilla y obtener su longitud](/img/dfd/grillalength.jpg)

Al final nuestro algoritmo, tenemos que crear un array con 3 elementos: en la primer posición el índice I del último elemento encontrado (la fila en la que estamos), en la segunda posición el ínide J del último elemento encontrado (la columna en la que estamos), y la cantidad de repetidos.

Este array, lo vamos a retornar en nuestra función (algoritmo), utilizando el siguiente diagrama:

![Retornar bloque encontrado](/img/dfd/returnarray.png)

**Si no encontramos ningún bloque de al menos 3 elementos iguales, seguidos, en fila, tenemos que usar el mismo diagrama pero devolviendo null: `return null` (_lo que nos indica que no encontramos nada_)**

### `obtenerBloqueVertical()`

Teniendo una matriz/grilla, generada con el algoritmo que hicimos en el punto anterior, queremos buscar si hay alguna **columna** en donde tenemos al menos 3 elementos seguidos (aunque puede haber más) que sean iguales. Los elementos pueden estar en cualquier parte de la **columna**, pero tienen que estar juntos. En el caso que haya algún bloque de al menos 3 elementos, tenemos que guardar en una variable la cantidad de elementos que encontramos repetidos. Una vez que encontramos la cantidad total de elementos iguales, seguidos, en la misma **columna**, tenemos que guardar en una variable la posición el último elemento encontrado. Tanto la grilla, como el tamaño de la misma, los podemos obtener utilizando el siguiente diagrama:

![Generar grilla y obtener su longitud](/img/dfd/grillalength.jpg)

Al final nuestro algoritmo, tenemos que crear un array con 3 elementos: en la primer posición el índice I del último elemento encontrado (la fila en la que estamos), en la segunda posición el ínide J del último elemento encontrado (la columna en la que estamos), y la cantidad de repetidos.

Este array, lo vamos a retornar en nuestra función (algoritmo), utilizando el siguiente diagrama:

![Retornar bloque encontrado](/img/dfd/returnarray.png)

**Si no encontramos ningún bloque de al menos 3 elementos iguales, seguidos, en columna, tenemos que usar el mismo diagrama pero devolviendo null: `return null` (_lo que nos indica que no encontramos nada_)**

### `eliminarBloqueHorizontal()`

Partiendo de un array como el que genera el algoritmo `obtenerBloqueHorizontal`, con solo 3 elementos (posición de fila, posición de columna, y cantidad de elementos encontrados), tenemos que eliminar el bloque de elementos repetidos de la grilla original (que tenemos en la variable `grilla`). Para esto, tenemos que vaciar esos espacios en la matriz, y hacer descender todos los elementos que se encuentren por arriba de los mismos, y en las nuevas posiciones que quedaron vacias arriba de todo, hay que crear nuevos elementos utilizando la misma función del punto **1**.

![Eliminar elemento horizontal](/img/dfd/eliminarBloqueHorizontal.gif)

### `eliminarBloqueVertical()`

Partiendo de un array como el que genera el algoritmo `obtenerBloqueVertical`, con solo 3 elementos (posición de fila, posición de columna, y cantidad de elementos encontrados), tenemos que eliminar el bloque de elementos repetidos de la grilla original (que tenemos en la variable `grilla`). Para esto, tenemos que vaciar esos espacios en la matriz, y hacer descender todos los elementos que se encuentren por arriba de los mismos, y en las nuevas posiciones que quedaron vacias arriba de todo, hay que crear nuevos elementos utilizando la misma función del punto **1**.

![Eliminar elemento horizontal](/img/dfd/eliminarBloqueVertical.gif)

### `moverCuadrados()`

Dados dos cuadrados de la grilla, que lo vamos a representar por dos variables, siendo cada una un array con dos elementos (primer elemento es la fila donde se encuentra el cuadrado, y segundo elemento es la posición en la columna donde está el cuadrado), tenemos que verificar si se pueden intercambiar (como en el gif anterior). Las condiciones para que dos cuadrados puedan intercambian es que:

- Sean cuadrados adyacentes (estén pegados ya sea horizontal o verticalmente)
- Al hacer el cambio, efectivamente se forme un bloque de al menos 3 items iguales ya sea en fila o columna
- Si se cumplen **las 2 condiciones**, los cuadrados tienen que intercambiarse
- Si no se cumple alguna de las condiciones, los cuadrados tienen que volver a su posición original dejando la grilla en el mismo estado que al comienzo.

Ejemplo de cuadrados que no pueden moverse:

![No se mueven los cuadrados](/img/dfd/noSeMueven.gif)

Para verificar si se forman bloques en fila o columna, podemos utilizar las funciones que creamos en el punto 2 y 3. Ya que sabemos que si no hay bloques de al menos 3 cuadrados iguales, nos tiene que retornar un null.

## ![Encontrar bloque vertical](/img/dfd/bloqueEncontrado.jpg)

---
id: proyecto
title: 'Proyecto: MatcheADAs'
sidebar_label: Proyecto - MatcheADAs
---

## Consigna

En este proyecto vas a desarrollar un juego de navegador conocido como match-3. Construirás una grilla, implementarás animaciones para dar feedback de las interacciones, controlarás el input de quien juegue, aplicarás la lógica del juego y agregarás funcionalidades como un sistema de puntuación de dificultad para crear una experiencia totalmente interactiva. Para hacerlo, utilizarás un flujo de trabajo que te permitirá ir complejizando el código de manera gradual, pudiendo trabajar en varias funcionalidades por separado sin que estas afecten el resto de tu código.

---

## Ejemplo

Puedes ver un ejemplo funcional del proyecto siguiendo [este link](https://frontend-proyecto-matcheadas.adaitw.org)

---

## Comentarios

A diferencia del anterior, este proyecto tiene una cantidad de líneas de código mucho más reducida. El diseño no es complicado, no tenemos mucho que maquetar ni demasiados elementos que estilar o manipular. La dificultad consiste en que tiene una lógica más compleja, que requiere ser pensada y analizada de antemano con más cuidado y detalle que en los proyectos anteriores.

Si empezamos a probar y modificar cosas, sin tener muy en claro qué y por qué lo estamos haciendo, es probable que nos encontremos con caminos sin salida muy seguido, que el código se vuelva muy difícil de seguir y que tengamos que volver hacia atrás reiteradas veces.

Para evitar esto, es recomendable ir haciendo las funcionalidades _una por una_. Al empezar una nueva funcionalidad, deberíamos crear una nueva `brach` y ponerle un nombre adecuado (por ejemplo, `puntaje`, `tiempo`, `dificultad`), en esa `branch` ocuparnos _única y exclusivamente_ de esa funcionalidad, y _una vez terminada_, mergearla a `master` y continuar con la siguiente funcionalidad, repetiendo el proceso.

Si tenemos que mejorar o arreglar una funcionalidad ya agregada, deberíamos hacer una nueva branch para dicho fix o refactor, y nombrarla adecuadamente (por ejemplo, `refactorDificultad`, `fixPuntaje`, `fixSeleccionItems`), y una vez finalizada la mejora o correción, mergearla a `master`.

---

## Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes, íconos y temática (en vez de frutas, usar otros emojis, íconos u imágenes).
- Debe respetar las interacciones y flujo de modales del ejemplo.
- Debe ser responsive.
- Debe cumplir con todas las funcionalidades listadas en la sección siguiente.
- Debe hacer uso de la librería [SweetAlert](https://sweetalert.js.org/) para los modales.
- Debe estar deployado y ser accesible desde una dirección web.
- **No se debe trabajar en la rama `master`**. En `master` sólo van a mergearse las demás ramas, por lo que cada `commit` de `master` debería ser el `merge` de una `branch` de una funcionalidad _terminada_.

---

## Funcionalidades

1. Debe generar una grilla.
2. Debe llenar la grilla con ítems aleatorios.
3. Debe seleccionarse un ítem al hacer click en él.
4. Al clickear un nuevo ítem, si este no se encuentra adyacente al seleccionado, debe seleccionarse el nuevo ítem cleado.
5. Al clickear un nuevo ítem, si este no encuentra adyacente al seleccionado, debe intercambiar las posiciones de ambos ítems.
6. Debe eliminar grupos horizontales
   1. **Debe chequear si hay grupos horizontales**. 3 o más ítems iguales en fila.
   2. Debe eliminar los ítem en grupos horizontales.
   3. Debe hacer descender el bloque de ítems que quedó por encima del espacio dejado por los ítems eliminados.
   4. Debe rellenar el espacio vacío restante con ítems aleatorios.
   5. Debe repetir pasos del 6.a al 6.d hasta que no queden más grupos horizontales.
7. **Debe eliminar grupos horizontales**. 3 o más ítems iguales en columna.
8. **Debe generar un tablero sin grupos**. Al generar una nueva partida, el tablero no debería tener ning´¨ún presente.
9. **Debe volver los ítems a sus lugares originales si no hay grupos encontrados.** Al intercambiar dos ítems, si dicha operación no generó ningún grupo, deben intercambiarse nuevamente las posiciones de dichos ítems.
10. **Debe llevar la cuenta del puntaje**. Al eliminar ítems se suman puntos (100 por cada uno). Al comenzar una nueva partida se reinician los puntos.
11. **Agregar combos**. Un combo es un grupo de ítems eliminados. Mientras siga habiendo grupos que se sigan eliminando luego de una jugada, el modificador de combos debe ir aumentando en 1. Cuando ya no se encuentran más combos (es decir, más grupos para eliminar), el modificador de combos debe volver a 1.
12. **Debe modificar puntaje en base al modificador de combos**. Cuando hay un modificador de combo x3 los puntos obtenidos se multiplican por ese modificador (en este caso, un ítem eliminado vale 300 puntos).
13. **Las partidas deben tener una duración**. Cada partida debe durar 30 segundos, al terminar el tiempo debe aparecer un modal con un puntaje obtenido y preguntar si se quiere reiniciar o comenzar una nueva partida.
14. **Debe poderse reiniciar el juego**. Si se reinicia el juego, se debe comenzar un mismo juego en la misma dificultad (es decir, tamaño de grilla).
15. **Debe poderse elegir la dificultad**. Debe tener 3 dificultades a elegir en cada nueva partida:

- **Fácil:** grilla de 9x9
- **Normal:** grilla de 8x8
- **Difícil:** grilla de 7x7

16. **Debe contar con animaciones**. Al intercambiar, eliminar, aparecer y descender ítems.
17. **Debe impedir interacciones durante las animaciones**. Cuando hay una animación en proceso no se debe poder seleccionar ni mover ítems.
18. **Debe poder manejarse mediante el teclado**. Usando las `flechas` y las teclas `WASD` para desplazarse. Si se llega a un borde de la grilla debe continuar del otro lado. Las teclas `Espacio` y `Enter` actúan como el click, seleccionado y deseleccionando ítems. Cuando hay un ítem seleccionado, si se presiona una tecla de dirección (flechas o `WASD`), debe intercambiar dicho ítem con el ítem adyacente en la dirección seleccionada.
19. **Debe impedir las interacciones cuando hay modales visibles**. Si hay un modal, no debería poderse interactuar con los ítems mediante el teclado.

---

## Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Respeta la consigna.
  - Estructura correcta de documento HTML.
  - Respeta el diseño dado.
  - Respeta el funcionamiento.
  - Responsive funciona correctamente.
- **7 (Bueno)**
  - Estilos limpios y bien estructurados.
  - Buena estructura de proyecto.
  - Código bien indentado.
  - Uso correcto de etiquetas semánticas.
- **8 (Muy bueno)**
  - Buenos nombres de clases.
  - Buenos nombres de funciones y variables.
- **9 (Muy bueno)**
  - Funciones pequeñas.
  - Nombres de branchs adecuados.
  - Buen uso estructuras de datos (arrays, matrices y objetos).
  - Buen uso de estructuras de control (condicionales y bucles).
- **10 (Excelente)**
  - Lógica clara y simple.
  - Reutilización de lógica / funciones.
  - Commits con mensajes adecuados.

---

## Recursos

- [SweetAlert](https://sweetalert.js.org/) - Librería para popups y modales

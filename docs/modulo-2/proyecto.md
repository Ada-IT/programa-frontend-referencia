---
id: proyecto
title: 'Proyecto: Tienda'
sidebar_label: Tienda
---

## Consigna

Para el primer proyecto vas a realizar un **portfolio personal**. Este sitio te servirá como introducción personal y presentación de los proyectos que vas a ir haciendo a lo largo del curso, de modo que cualquiera que acceda al mismo pueda ver lo que hayas armado durante el mismo. En esta primera entrega del proyecto desarrollarás la estructura, los estilos y las secciones principales. En el siguiente módulo, a partir de lo que veas en las clases, le agregarás nuevas secciones, elementos, interacciones y efectos que ofrecerán una mejor y más completa experiencia de usuario.

## Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe mostrar un listado de productos.

**Filtros y búsqueda**

- Debe tener una lista de filtros.
- Debe poder reiniciarse los filtros seleccionados.
- Debe tener un input para buscar productos por el nombre.
- La lista de productos debe actualizarse en el momento en que
  - se modifica algún filtro
  - se escribe algo en el input de búsqueda
- La búsqueda debe ser insensible al caso, es decir, debe ignorar mayúsculas y minúsculas.
- Criterios de actualización de lista de productos
  - si hay un filtro seleccionado, debe actualizarse mostrando los productos que coinciden con dicho filtro
  - si hay varios filtros seleccionados, debe actualizarse mostrando los productos que coinciden con todos los filtros
  - si se ingresa una búsqueda por el nombre, debe actualizarse mostrando los productos cuyo nombre o parte del mismo coincide por la búsqueda. Por ejemplo, si se ingresa `madera` y hay un producto con nombre `Mesa de madera` debe mostrarse.
  - si hay uno o varios filtros seleccionados y una búsqueda por nombre, debe mostrar los productos que coincidan con los filtros y con la búsqueda del nombre
- Cuando se actualiza la lista de productos, debe indicarse la cantidad de resultados encontrados

**Carrito**

- El carrito debe poder mostrarse y ocultarse.
- Debe poder agregarse un producto al carrito.
- Debe poder eliminarse un producto del carrito.
- Debe poder modificarse la cantidad de productos agregados en el carrito.
- Cuando no hay productos agregados, el carrito debe mostrar un mensaje indicándolo.
- Cuando se agrega un producto al carrito debe ....
- Cuando se agrega un producto al carrito, debe mostrarse el producto agregado en el carrito.
- El carrito debe mostrar el subtotal del mismo (suma de precio de productos agregados por cantidad), que debe actualizarse cuando:
  - Se agrega un producto.
  - Se elimina un producto.
  - Se modifica la cantidad del mismo/
- El carrito debe mostrar la cantidad de productos agregados, ignorando las cantidades individuales de cada producto. Por ejemplo, si hay 5 productos agregados, cada uno con 3 unidades, solo debe mostrar 5 productos agregados. Esto debe actualizarse cuando:
  - Se agrega un producto.
  - Se elimina un producto.
- Debe poder vaciarse todos los productos del carrito:
  - Al elegir vaciar el carrito, debe mostrar un modal con una advertencia y dar la opci´ón de confirmar o cancelar la operaci´ón.
  - Si se cancela, debe cerrarse el modal.
  - Si se confirma, debe cerrarse el modal y vaciarse el carrito.

**Checkout**

- Debe poder seleccionarse el método de pago:
  - Efectivo / Débito.
  - Crédito.
- Debe poder seleccionarse si necesita envío.
- Debe poder seleccionarse si tiene tarjeta de descuento.
- Debe mostrar un resumen de la compra, incluyendo:
  - subtotal (suma de precio de productos por sus cantidades)
  - si compra con crédito, tiene un 10% de recargo sobre el subtotal
  - si tiene tarjeta de descuento, tiene un 5% de descuento sobre el subtotal
  - si necesita envío, se le agregan \$300 al subtotal
  - total
- Cuando se modifica alguna opción de pago (método de pago, envío, tarjeta de descuento), debe actualizarse el resumen
- ...

**Accesibilidad**

_Básica_

- [ ] Los colores tienen un contraste adecuado.
- [ ] Las imágenes tiene el atributo `alt` que corresponde.
- [ ] La página tiene la información meta correspondiente.
- [ ] La página tiene una semántica correcta.
- [ ] Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria, texto oculto).
- [ ] Cuando se hace zoom el diseño se mantiene.

_Avanzada_

- [ ] La página puede ser navegada con el teclado correctamente.
  - [ ] Siempre hay un foco visible.
  - [ ] Cuando un elemento está oculto (modales, carrito, productos), no debe poder moverse el foco a elementos del mismo.
  - [ ] Cuando se abre el carrito, el foco salta al botón de cierre del mismo.
  - [ ] Cuando se cierra el carrito, el foco salta al botón de apertura del mismo.
  - [ ] Cuando se abre un modal, el foco salta al botón de cancelación del mismo.
  - [ ] Cuando se cierra un modal, el foco salta al bot´ón que abrió dicho modal.
  - [ ] Cuando un modal está abierto, no debe poder moverse el foco a algún elemento por fuera del modal.
- [ ] La página puede ser navegada con un lector de pantalla correctamente.
- [ ] Cuando hay cambios dinámicos el lector de pantalla lo anuncia correctamente.

## Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Estructura correcta de documento HTML.
  - Respeta la consigna.
  - Respeta el diseño dado.
  - Respeta el funcionamiento.
  - Responsive funciona correctamente.
- **7 (Bueno)**
  - Buena estructura de proyecto.
  - Código bien indentado.
  - Comentarios que permiten mejorar la legibilidad del código.
- **8 (Muy bueno)**
  - Uso correcto de etiquetas semánticas.
  - Buenos nombres de clases.
  - Buenos nombres de funciones y variables.
- **9 (Muy bueno)**
  - Cumple con las condiciones de accesibilidad básica.
  - Reutilización de estilos.
  - Funciones pequeñas.
- **10 (Excelente)**
  - Cumple con las condiciones de accesibilidad avanzada.
  - Reutilización de lógica / funciones.
  - Commits con mensajes adecuados.

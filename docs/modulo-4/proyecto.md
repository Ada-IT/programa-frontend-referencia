---
id: proyecto
title: 'Buscador de Cómics'
sidebar_label: 🦸‍♀️ Proyecto - Buscador de Cómics
---

## ⚙️ Consigna

En este proyecto vas a crear una aplicación que permita listar cómics y personajes de comics, y obtener información sobre los mismos. Para eso utilizarás una API REST con datos reales, realizarás consultas a la misma pasándole distintos parámetros que permitan personalizar la búsqueda y mostrarás los datos obtenidos como respuesta.

## 👀 Ejemplo

Puedes ver un ejemplo funcional del proyecto siguiendo [este link](https://frontend-proyecto-comics.adaitw.org/).

## 👍 Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos
- Debe ser responsive
- Debe cumplir con las funcionalidades _principales_ listadas en la sección siguiente
- Debe hacer hacer uso de un preprocesador CSS
- Debe estar deployado y ser accesible desde una dirección web
- **No se debe trabajar en la rama `main`**. En `main` sólo van a mergearse las demás ramas, por lo que cada `commit` de `main` debería ser el `merge` de una `branch` de una funcionalidad _terminada_
- **Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request)**

## 🎛 Funcionalidades principales

- Se debe poder realizar una búsqueda de cómics
  - Se debe poder realizar una búsqueda por título
  - Se debe poder ordenar los resultados alfabéticamente y por fecha de lanzamiento, en orden ascendente y descendente
- Se debe poder realizar una búsqueda de personajes de cómics
  - Se debe poder realizar una búsqueda por nombre
  - Se debe poder ordenar los resultados alfabéticamente, en orden ascendente y descendente
- Se debe mostrar la información de un cómic (al clickear sobre el mismo)
  - Portada
  - Título
  - Fecha de lanzamiento
  - Guionistas
  - Descripción
  - Personajes incluidos
- Se debe mostrar la información de un personaje (al clickear sobre el mismo)
  - Imagen
  - Nombre
  - Descripción
  - Cómics en los que aparece
- Se debe mostrar el total de resultados en los casos en los que se listen cómics o personajes
- Debe contar con un paginado
  - Se debe mostrar 20 resultados por página
  - Se debe poder ir a la primera página
  - Se debe poder ir a la última página
  - Se debe poder ir a la página siguiente
  - Se debe poder ir a la página anterior
  - Se deben deshabilitar los botones correspondientes cuando no puedan ser utilizados (por ejemplo, si se está en la última página, no se debe poder utilizar el botón de ir a la última página ni el de avanzar página)

## 💪 Desafíos extra (opcionales)

- Agregar la cantidad de páginas y la p´agina actual en el paginado
- Agregar la posibilidad de ir a una página espec´ífica (mediante un select)
- Cuando se realiza una búsqueda de cómics o personajes, y luego se clickea en uno para ver los detalles, perdemos la búsqueda realizada y la página en la que estábamos. Agregar un botón que permita ir a la página exacta de la última búsqueda realizada.
- Agregar modo oscuro

## 📝 Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Respeta la consigna
  - Respeta el diseño dado
  - Respeta el funcionamiento
  - Responsive funciona correctamente
- **7 (Bueno)**
  - HTML semántico
  - Código bien indentado
  - Buenos nombres de clases
  - Buenos nombres de funciones y variables
  - Uso de variables (SASS)
- **8 (Muy bueno)**
  - Buena estructura y separación de archivos (SASS)
  - Correcto uso de estilos anidados (SASS)
  - Nombres de branchs adecuados
- **9 (Muy bueno)**
  - Componentización de estilos (SASS)
  - Funciones pequeñas
  - Lógica clara y simple
  - Separación clara de manejo de datos y visualización
- **10 (Excelente)**
  - Reutilización de lógica / funciones
  - Commits con mensajes adecuados
  - Un PR por funcionalidad, fix o mejora
  - PRs con buenos títulos

## 🧰 Marvel API

La API que vamos a utilizar para este proyecto es la de Marvel Cómics.

- [Registro (Para obtener la API KEY)](https://developer.marvel.com/account)
- [Información general](https://developer.marvel.com/documentation/generalinfo)
- [Uso de imágenes](https://developer.marvel.com/documentation/images)
- [Documentación](https://developer.marvel.com/docs)

Una vez que nos registramos, tenemos que agregar los dominios desde los que vamos a estar utilizando la API en la sección de **Your authorized referrers**

- Para trabajar de forma local, hay que agregar `127.0.0.1*` y `localhost`
- Una vez que deployamos el proyecto, tenemos que agregar la URL, por ejemplo: `adacomics.netlify.com`
- Para hacer pruebas en la documentación interactiva, tenemos que agregar `developer.marvel.com` (opcional)

**_Para evitar problemas con CORS, se recomienda correr el proyecto usando la extensión Live Server de VSCode_**

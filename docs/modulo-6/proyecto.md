---
id: proyecto
title: 'Películas-React'
sidebar_label: 🎥 Proyecto - Peliculas React
---

## ⚙️ Consigna

En este proyecto vas a crear una aplicación que permita conectarse a una [API](https://developers.themoviedb.org/3/getting-started/introduction) de películas, los estrenos, populares y mejor puntadas. Aplicarás lo aprendido para consumir y manipular la información de tu aplicación.

Para este proyecto trabajarás en equipo siguiendo prácticas que se utilizan profesionalmente para desarrollar colaborativamente.

## 👀 Ejemplo

Puedes ver un ejemplo funcional del proyecto siguiendo [este link](https://frontend-proyecto-movies.adaitw.org/).

## 💬 Comentarios

A este proyecto se le suma un nuevo grado de complejidad: tenemos que trabajar diferentes secciones y componentes haciendo uso de useEffect y useFetch.

Por eso, es recomendable ir haciendo las funcionalidades _una por una_. Al empezar una nueva funcionalidad, deberíamos crear una nueva `brach` y ponerle un nombre adecuado (por ejemplo, `vista-principal`, `ultimos-lanzamientos`, `populares`, `etc` ), en esa `branch` ocuparnos _única y exclusivamente_ de esa funcionalidad, y _una vez terminada_, mergearla a `main` y continuar con la siguiente funcionalidad, repetiendo el proceso.

Si tenemos que mejorar o arreglar una funcionalidad ya agregada, deberíamos hacer una nueva branch para dicho fix o refactor, y nombrarla adecuadamente (por ejemplo, `refactor-populares`, `fix-buscador`), y una vez finalizada la mejora o correción, mergearla a `main`.


## 👍 Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos
- Debe respetar las interacciones y flujo de pantallas
- Debe ser responsive
- Debe cumplir con las funcionalidades _principales_ listadas en la sección siguiente
- Debe hacer hacer uso de un framework CSS 
- Debe estar deployado y ser accesible desde una dirección web
- **No se debe trabajar en la rama `main`**. En `main` sólo van a mergearse las demás ramas, por lo que cada `commit` de `main` debería ser el `merge` de una `branch` de una funcionalidad _terminada_
- **Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request)**

## 🎛 Funcionalidades principales

- Se debe tener un menú que nos muestre diferentes vistas(Home, ultimos lanzamientos, Populares y Buscador)
- En `Home` se debe tener un slider con al menos 5 películas recomendadas y una breve descripción de la película en cuestión. 
- En `Home` debe tener dos listas(Populares y mejor puntadas) con al menos 10 películas cada una.
- Cuando demos click a cualquier película debe llevarnos a una vista donde se vea el fondo de pantalla de esa película, el poster y la descripción de la misma.
- Dentro de los detalles debemos contar con un botón para reproducir el triler de dicha película(funcionalidad avanzada)
- La vista de `Últimos lanzamientos` nos debe mostrar un listado de al menos 20 películas en cards, con su titulo y un botón para llevarnos a la vista de detalles de película (anteriormente mencionada)
- La vista de `Últimos lanzamientos` debe contar con un paginador, para poder ir viendo de 20 películas en 20 películas(funcionalidad avanzada)
- La vista de `Populares` debe tener lo mismo que la vista de `Últimos lanzamientos` pero con las películas más populares. 
- La vista de `Buscador` debe contar con un input, el cual al ir escribiendo se debe hacer un filtro y mostrar al menos 20 películas(en caso que existan) que concuerden con lo que el usuario eligió. 
. La URL de nuestra aplicación debe reflejar los cambios que el usuario haga, por ejemplo al seleccionar una película se debe modificar con el id de la película, al buscar una película se debe editar la url con los datos que el usuario va escribiendo(funcionalidad avanzada)
- Todas las vistas deben de tener un footer. 



## 📝 Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Respeta la consigna
  - Respeta el diseño dado
  - Respeta el funcionamiento
  - Respeta el flujo de pantallas
  - Responsive funciona correctamente
- **7 (Bueno)**
  - Código bien indentado
  - Buenos nombres de componentes y variables
  - uso de useState
- **8 (Muy bueno)**
  - Nombres de branchs adecuados
  - Lógica clara y simple
  - Uso de useEffect
- **9 (Muy bueno)**
  - Uso de funciones puras para el manejo de datos
  - Separación clara de manejo de datos y visualización
  - Buen uso de métodos funcionales de array (`map`, `filter`, `reduce`, etc)
- **10 (Excelente)**
  - Uso de useFetch
  - Reutilización de lógica / componentes
  - Commits con mensajes adecuados
  - Un PR por funcionalidad, fix o mejora
  - PRs con buenos títulos

- **(Extra)**
  - Realizar Issues y resolverlos.

## 🧰 Recursos

- [API](https://developers.themoviedb.org/3/getting-started/introduction) - API películas 
- [Material UI](https://material-ui.com/) - Framework CSS
- [React Bootstrap](https://react-bootstrap.github.io/) - Framework CSS
- [Font Awesome](https://fontawesome.com/icons) - Íconos
- [Undraw](https://undraw.co/) - Imágenes

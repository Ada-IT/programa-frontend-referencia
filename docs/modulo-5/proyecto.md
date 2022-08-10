---
id: proyecto
title: 'Todo List React'
sidebar_label: 🎥 Proyecto - Todo List React
---

## ⚙️ Consigna

En este proyecto vas a crear una aplicación de React que permita hacer una lista de tareas,  marcar las tareas completadas ✔️ y poder eliminar 🗑  aquellas que ya no quieras o necesites, además de manipular localStorage.

Para este proyecto trabajarás en equipo siguiendo prácticas que se utilizan profesionalmente para desarrollar colaborativamente.

## 👀 Ejemplo

Puedes ver un ejemplo funcional del proyecto siguiendo [este link](https://ada-it.github.io/proyecto-todo-list-react/).

## 💬 Comentarios

A este proyecto se le suma un nuevo grado de complejidad, tenemos que trabajar diferentes secciones y componentes haciendo uso de useFetch y useEffect.

Por eso es recomendable ir haciendo las funcionalidades _una por una_. Al empezar una nueva funcionalidad deberíamos crear una nueva `brach` y ponerle un nombre adecuado (por ejemplo, `maqueta`, `agregar-tarea`, `eliminar-tarea`, `etc` ), en esa `branch` ocuparnos _única y exclusivamente_ de esa funcionalidad y _una vez terminada_ mergearla a `master` y continuar con la siguiente funcionalidad repetiendo el proceso.

Si tenemos que mejorar o arreglar una funcionalidad ya agregada, deberíamos hacer una nueva branch para dicho fix o refactor y nombrarla adecuadamente (por ejemplo, `refactor-completada`, `fix-localStorage`) y una vez finalizada la mejora o correción mergearla a `master`.


## 👍 Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos.
- Debe respetar las interacciones y flujo del proyecto.
- Debe ser responsive.
- Debe cumplir con las funcionalidades _principales_ listadas en la sección siguiente
- Puede hacer hacer uso de un framework CSS 
- Debe estar deployado y ser accesible desde una dirección web
- **No se debe trabajar en la rama `main`**. En `main` sólo van a mergearse las demás ramas, por lo que cada `commit` de `main` debería ser el `merge` de una `branch` de una funcionalidad _terminada_
- **Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request)**

## 🎛 Funcionalidades principales

- Toda la App debe estar desarrolada con React.js.(no hacer uso de Js vanilla)
- Se debe tener un input para ingresar nuevas tareas con un icono. 
- Se debe tener un select con opciones de `todas`, `completadas` e `incompletas` para seleccionar las tareas, y debe contener un con un icono. 
- Debemos poder generar nuevas tareas.
- Cada tarea debe tener dos iconos, uno que nos ayude a marcar las tareas completadas y otro que nos permita eliminarlas.
- Debemos poder marcar una tarea como completada, esto quiere decir que se debe de tachar.
- Debemos poder eliminar una tarea del estado de la aplicación.
- Debemos almacenar en useState el estado de todas las tareas.
- Con ayuda del select debemos poder filtrar las tareas que se encuentran completadas, no completadas y todas.
- Se debe poder separa la funcionalidad por componentes tomando en cuenta el ejemplo de: 
-App
  - Components
    - Form
    - TodoList
      - Todo
- Se debe poder almacenar en localStorage ó Firebase las tareas.
- Al eliminar una tarea se debe eliminar tanto del localStorage ó Firebase y de la App.
- Al marcar como completada una tarea se debe marcar tanto en
localStorage ó Firebase y de la App.
- Debe estar alojado y deployado en un servicio como githubPages, Heroku, Netlify, etc. 


## 📝 Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Respeta la consigna
  - Respeta el diseño dado
  - Respeta el funcionamiento
  - Respeta el flujo del proyecto
  - Responsive funciona correctamente
- **7 (Bueno)**
  - Código bien indentado
  - Buenos nombres de componentes y usar functionalComponents
  - uso de useState
- **8 (Muy bueno)**
  - Nombres de branchs adecuados
  - Lógica clara y simple
  - Uso de useEffect
- **9 (Muy bueno)**
  - Buen nombramiento de Componentes
  - Uso de funciones puras para el manejo de datos
  - Buen uso de métodos funcionales de array (`map`, `filter`)
- **10 (Excèlente)**
  - Reutilización de lógica / componentes
  - Commits con mensajes adecuados
  - Un PR por funcionalidad, fix o mejora
  - PRs con buenos títulos

- **(Extra)**
  - Realizar Issues y resolverlos.

## 🧰 Recursos


- [Material UI](https://material-ui.com/) - Framework CSS
- [React Bootstrap](https://react-bootstrap.github.io/) - Framework CSS
- [Font Awesome](https://fontawesome.com/icons) - Íconos

# Cómo editar documentación

La documentación está hecha con [Docusaurus](https://v2.docusaurus.io/docs/)

## Pasos a seguir por clase

- Ir al archivo de la clase correspondiente en la carpeta `docs` y editarlo
- Agregar la fecha
- Agregar el link de la grabación
- Agregar el link al código de la clase (si lo hay)
- Agregar links de recursos extra a la clase (si los hay)
- Agregar sección de comentarios (si es necesaria)

```
---

💬 Comentarios

Este es un comentario de ejemplo

---
```

- Agregar sección de actividades de la clase o ejercicios extra (si es necesaria)

```
---

💻 Actividad de la clase

Consigna de actividad

---
```

```
---

💪 Ejercicios

- Consigna de ejercicio 1
- Consigna de ejercicio 2

---
```

- Descomentar la clase correspondiente en `sidebar.js`

## 📹 Para agregar el vídeo de las clase

- Ir a la carpeta `docs`
- Buscar el archivo de markdown correspondiente a la clase
- Editar el archivo agregando el link de la clase con markdown
- Guardar los cambios

En caso de no estar editándolo desde la página de Github y haber descargado el repo, es necesario commitear los cambios y hacer un push a master para que se haga el deploy.

## 📝 Para editar archivos de la clase

- Son los mismos pasos que para agregar el vídeo

## 👀 Para hacer visible una clase

- Descomentar la línea correspondiente a la clase en `sidebar.js`

## 📚 Para agregar páginas a la documentación

- Crear el archivo de markdown dentro de la carpeta `docs` (y del módulo específico si pertenece a uno)
- El archivo de markdown tiene que tener, arriba de todo

```
---
id: proyecto
title: 'Proyecto: Portfolio'
sidebar_label: Proyecto
---
```

- **id** es el id del archivo que se usa para agregarlo a la barra lateral y linkearlo desde otros archivos
- **title** es el título que aparece en el documento cuando se lo abre
- **sidebar_label** es el nombre con el que aparece en la barra lateral

- Agregar el archivo a la barra lateral, en el archivo de configuración `sidebars.js`, usando como referencia el id (si está dentro de una carpeta, hay que poner la ruta de la carpeta)
- Ver ejemplo en el mismo archivo o en la documentación de Docusaurus al respecto

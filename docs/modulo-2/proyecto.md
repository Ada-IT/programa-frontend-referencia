---
id: proyecto
title: 'Editor de memes'
sidebar_label: '🖼 Proyecto: Editor de memes'
---

### ⚙️ Consigna

En este proyecto vas a estar realizando un editor para generar memes. Crearás una aplicación con la que podrás manipular el texto y la imagen de tu meme y usarás JavaScript para modificar dinámicamente su contenido y sus propiedades. Cuando quedes conforme, podrás descargar tu meme para usarlo o compartilo donde quieras.

---

### 👀 Ejemplo

Puedes ver un ejemplo funcional del proyecto siguiendo [este link](https://frontend-proyecto-meme.adaitw.org).

---

### 💬 Comentarios

Este proyecto cuenta con muchos más requisitos y funcionalidades que el proyecto anterior, por lo que implica más tiempo de desarrollo. Por lo tanto, es mejor que vayas haciéndolo de a poco a medida que vayas viendo los temas correspondientes, siguiendo las instrucciones de tu docente. De este modo, al finalizar el módulo, vas a tener tiempo de sobra para terminar de integrar todo y pulir los detalles que te hayan quedado faltantes. Es especialmente recomendable empezar a armar el diseño desde las primeras clases (ya sabés todo lo necesario para hacerlo), así podés enfocarte en agregar las funcionalidades en clase.

### 👍 Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado
- Debe ser responsive
- Debe respetar las funcionalidades especificadas
- Debe respectar los criterios de accesibilidad _básicos_

### 🎛 Funcionalidades

- Meme
- Alternar entre paneles
- Abrir y cerrar panel
- Descargar imagen
- Modo claro y modo oscuro

_Imagen_

- Agregar imagen con url
- Cambiar color de fondo
- Cambiar modo de mezcla de fondo
  - Aclarar
  - Oscurecer
  - Diferencia
  - Luminosidad
  - Multiplicar
- Cambiar filtros

| ETIQUETA         | PROPIEDAD      | MÍNIMO | MÁXIMO | INTERVALO | INICIAL |
| ---------------- | -------------- | ------ | ------ | --------- | ------- |
| Brillo           | `brightness`   | 0      | 1      | 0.1       | 1       |
| Opacidad         | `opacity`      | 0      | 1      | 0.1       | 1       |
| Contraste        | `contrast`     | 100%   | 1000%  | 1%        | 100%    |
| Desenfoque       | `blur`         | 0px    | 10px   | 0.1px     | 0px     |
| Escala de grises | `grayscale`    | 0%     | 100%   | 1%        | 0%      |
| Sepia            | `sepia`        | 0%     | 100%   | 1%        | 0%      |
| Hue              | `hue-rotation` | 0deg   | 359deg | 1deg      | 0deg    |
| Saturación       | `saturation`   | 100%   | 1000%  | 10%       | 100%    |
| Hue              | `hue-rotation` | 0deg   | 359deg | 1deg      | 0deg    |
| Negativo         | `invert`       | 0      | 1      | 0.1       | 1       |

- Restablecer filtros

_Texto_

- Editar texto superior
- Remover texto superior
- Editar texto inferior
- Remover texto inferior
- Cambiar familia de fuente
- Cambiar tamaño de fuente
- Cambiar alineación
- Cambiar color de texto
- Cambiar color de fondo de texto
- Fondo transparente
- Cambiar padding de texto
- Cambiar alto de línea de texto

### ♿️ Accesibilidad

_Básica_

- Los colores tienen un contraste adecuado
- Las imágenes tiene el atributo `alt` que corresponde
- La página tiene la información meta correspondiente
- La página tiene una semántica correcta
- Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria, texto oculto)
- Los íconos y elementos que no necesitan ser anunciados por un lector de pantalla tienen la etiqueta aria correspondiente

_Avanzada_

- La página puede ser navegada con el teclado correctamente
- Siempre hay un foco visible
  - Cuando un elemento está oculto (modales, carrito, productos), no debe poder moverse el foco a elementos del mismo
  - Cuando se abre el panel, el foco salta al botón de cierre del mismo
  - Cuando se cierra el panel, el foco salta al botón de apertura del mismo

---

### 📝 Criterios de evaluación

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
  - Respeta la consigna
  - Estructura correcta de documento HTML
  - Respeta el diseño dado
  - Respeta el funcionamiento
  - Responsive funciona correctamente
- **7 (Bueno)**
  - Buena estructura de proyecto
  - Código bien indentado
  - Comentarios que permiten mejorar la legibilidad del código
- **8 (Muy bueno)**
  - Uso correcto de etiquetas semánticas
  - Buenos nombres de clases
  - Buenos nombres de funciones y variables
- **9 (Muy bueno)**
  - Reutilización de estilos
  - Funciones pequeñas
- **10 (Excelente)**
  - Cumple con las condiciones de accesibilidad avanzada
  - Reutilización de lógica / funciones
  - Commits con mensajes adecuados

### 🧰 Recursos

- [Imágenes](https://undraw.co/illustrations)
- [Íconos](https://konpa.github.io/devicon/)

# Documentación del Proyecto: Amigo Secreto

## Descripción General
El principal objetivo de este proyecto es fortalecer las habilidades en lógica de programación mediante la implementación de un programa interactivo que permita:

1. Agregar nombres de amigos a una lista sin valores duplicados.
2. Sortear aleatoriamente un "amigo secreto" entre los nombres agregados.
3. Mostrar dinámicamente los resultados en la interfaz.

---

## Estructura del Proyecto

### Archivos Principales
- `index.html`: Contiene la estructura HTML del proyecto.
- `style.css`: Define los estilos visuales.
- `app.js`: Implementa la lógica del programa en JavaScript.

### Estructura del HTML
El archivo `index.html` contiene:

Esta sección incluye:
- Un campo de entrada para añadir nombres.
- Una lista que muestra dinámicamente los amigos ingresados.
- Un botón para realizar el sorteo.
- Un área donde se muestra el resultado del sorteo.


## JavaScript
### Funciones Principales

#### 1. `agregarAmigo()`
Agrega un nombre al arreglo `amigos`, evitando valores duplicados y campos vacíos.


##### Lógica:
- **Entrada**: Valor del input.
- **Validación**: Se asegura que el nombre no esté vacío y no se haya ingresado previamente.
- **Salida**: Actualiza la lista visible en el DOM.

---

#### 2. `sortearAmigo()`
Realiza el sorteo del "amigo secreto" de forma aleatoria.


##### Lógica:
- **Entrada**: Arreglo `amigos`.
- **Validación**: Se asegura que el arreglo tenga al menos 2 elementos.
- **Salida**: Muestra el nombre del amigo seleccionado aleatoriamente en el DOM.

---

## Estilos (CSS)
El archivo `style.css` define:

- **Fuentes**: Importadas desde Google Fonts (`Inter`, `Merriweather`).
- **Diseño**: Estructuras como `main`, `header`, botones, listas.
- **Accesibilidad**: Incluye atributos ARIA para mejorar la experiencia de usuarios con discapacidades.

---

## Funcionalidad General
1. Los usuarios pueden ingresar nombres de amigos mediante un campo de texto.
2. Los nombres ingresados aparecen en una lista dinámica.
3. Al presionar el botón de "Sortear amigo", se selecciona y muestra un amigo secreto de manera aleatoria.

---

## Ejemplo de Uso
1. Ingresa los nombres de los amigos en el campo de texto.
2. Presiona "Añadir" para incluirlos en la lista.
3. Cuando todos los nombres estén ingresados, presiona "Sortear amigo" para seleccionar al amigo secreto.

¡Y listo, disfruta de tu sorteo de amigo secreto!

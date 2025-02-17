# 🔮 Sakura Tarot

## ✨ Bienvenidos al repositorio de _Sakura Tarot_! ✨

Este es un proyecto de desarrollo de una aplicación interactiva basada en el tarot de Sakura. A través de una experiencia virtual, los usuarios podrán seleccionar cartas para conocer su pasado, presente y futuro. La aplicación consumirá una API que proporciona información sobre las cartas y permitirá guardar lecturas realizadas en un historial.

## 📖 Descripción del Proyecto

Este proyecto tiene como objetivo crear una aplicación web responsiva e interactiva utilizando **React.js** y consumiendo la API de Sakura. Se busca que la experiencia sea inmersiva y visualmente atractiva, con una interfaz intuitiva que permita a los usuarios explorar el significado de las cartas seleccionadas.

## 🌟 Características Principales

- **Visualización de cartas**: Todas las cartas se muestran inicialmente boca abajo.
- **Selección de cartas**: El usuario podrá escoger tres cartas: una para el pasado, una para el presente y una para el futuro.
- **Interpretación de las cartas**: Al seleccionar las cartas, la aplicación mostrará el significado de cada una.
- **Historial de lecturas**: Se podrá guardar la lectura realizada con la fecha y el nombre del usuario.
- **Gestor de historial**: Opciones para actualizar el nombre del usuario, eliminar una lectura o vaciar el historial completo.
- **Experiencia responsive**: Diseño adaptable a diferentes dispositivos.
- **Cartas aleatorias**: El mazo de cartas aparecerá de forma aleatoria y sin repeticiones en una misma lectura.

## 🔬 Tecnologías Utilizadas

- **Front-end**: React.js + Vite, HTML5, CSS3 y JavaScript.
- **React**: Librería utilizada para construir la interfaz de usuario de la aplicación.
- **React Router**: Implementado para gestionar la navegación entre las diferentes páginas de la aplicación.
- **React Hook Form**: Utilizado para gestionar formularios de manera eficiente, con validaciones y manejo de estados en los formularios.
- **Axios**: Se utiliza para hacer peticiones HTTP a la API y manejar los datos de las cartas y las lecturas.
- **Backend Fake Server**: Json-server para la persistencia del historial de lecturas.
- **Llamadas a API**: Axios para gestionar las peticiones HTTP.
- **Herramientas de desarrollo**: Visual Studio Code, Git/GitHub, Figma para diseño, Jira para la gestión de tareas, Postman para pruebas de API.

## ✅ Requisitos Funcionales

- La aplicación DEBE mostrar todas las cartas boca abajo.
- La aplicación DEBE permitir seleccionar solo tres cartas.
- La aplicación DEBE mostrar el significado de las cartas seleccionadas.
- La aplicación DEBE permitir guardar y gestionar un historial de lecturas.
- La aplicación DEBE consumir los datos de la API de Sakura.
- La aplicación DEBE prevenir la selección de cartas repetidas en una misma lectura.
- La aplicación DEBE manejar errores en las peticiones a la API.

## 🌱 Requisitos No Funcionales

- Diseño basado en **Atomic Design**.
- Compatible con **diseño responsive** (mobile y desktop).
- Estructura de carpetas organizada y código modular.
- Uso de **naming** claro y significativo en clases, funciones e identificadores.
- Uso de **Postman** para pruebas de endpoints.

## 🛠️ Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FabiolaCESP/Sakura-Gala.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd sakura-tarot
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor JSON (fake server):
   ```bash
   npm run server
   ```
5. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
6. Abre el navegador en `http://localhost:5173` para ver la aplicación en acción.

## ⚙️ Metodología y Fases del Proyecto

Trabajamos en equipo bajo metodologías ágiles, combinando **Scrum** y **Kanban**. En este proyecto se ejecutó un sprint final con las siguientes fases:

### ✏️ Fase 1: Diseño y Planificación

- Creación de wireframes y mockups en Figma.
- Definición del flujo de trabajo y estructura del proyecto.
- Establecimiento del GitFlow y configuración del repositorio.

### 🚀 Fase 2: Desarrollo

- Implementación de la funcionalidad básica (selección de cartas y visualización de significado).
- Integración con la API de Sakura.
- Desarrollo del gestor de historial de lecturas.
- Manejo de errores y validaciones.

### 🎨 Fase 3: Estilización y Responsividad

- Aplicación de diseño interactivo y responsivo.
- Ajustes visuales y mejoras en animaciones y transiciones.
- Pruebas y optimización del rendimiento.

## 🌐 API Endpoints

- **Obtener todas las cartas:** `GET https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/`
- **Obtener una carta por ID:** `GET https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id`

## 🏆 Copyright

**Priscila Guillén, Milena Ocoro, Eva Sisalli, Paola Morales, Fabiola Canio**

---

✨ _Gracias por tu interés en Sakura Tarot. Que las cartas te guíen en tu camino._ 🌈✨

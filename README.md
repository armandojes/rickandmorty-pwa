# Rick and Morty PWA

## Pruebalo en produccion:
https://armandojes-rickandmorty.now.sh/

## Scripts disponibles
- **npm install** Installa todas las dependencias del proyecto
- **npm run build** Empaqueta el proyecto en un archivo bundle.js
- **npm run server** Arranca un servidor local en el puerto 3000
- **npm start** construye el proyecto y el servidor
- **npm run deploy** construye el proyecto y lo envia a produccion con now.sh

Para arrancar este proyecto en tu computador solo clona el repositorio, ejecuta npm install luego npm start y acontinuacion abrir el navegador.

## caracteristicas 
- Progresive web aplication instalable en dispositivos moviles
- Diseño responsivo adaptable a cualquier tamaño de pantalla
- Buscador de episodios y personajes y capacidad de filtrar

## lenguages y librerias de codigo
- **ReatJs** Para la construccion de interfaces
- **React-router** para manejar las rutas de la aplicacion
- **Hooks** construido completamente con hooks
- **Redux** manejo de estado global e inmutable
- **Redux-thunk** Para manejar acciones asyncronas
- **Ducks pattern** Un patrón modular que combina acciones, tipos de acciones y reductores.
- **Css modules** Para manejar y encapsular los estilos se ajerca mas a lenjuage natural css y no le agrega otra capa de coplejidad como a veces sucede con styled-components
- **regenerator-runtime** Agrega soporte para **async / await**
- **Standar Slint** reglas estandar para javascript
- **webpack y babel** Para transiplar y soportar versiones recientes Ecmascript

## Arquitectura
Orzanizando bajo una arquitecura conocido como **Pods** donde cada componente tiene su propio archivos css y jsx, en caso de ser necesario los componentes se dividen en dos subcomponentes: componentes contenedores (index.jsx) y Componentes Presentacionales(view.jsx)

Bajo esta arquitectura es trivial hacer **Code-Splitting** o agregar mas **Features**

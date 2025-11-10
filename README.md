# Lumu Front-End Test

## Descripción del proyecto

Este proyecto implementa una aplicación en React + Vite que consume la API pública Bacon Ipsum.
El objetivo es generar texto simulado (tipo Lorem Ipsum), procesar la información obtenida y mostrar estadísticas de palabras, caracteres y frecuencia de uso en una interfaz limpia y estructurada.

No se usaron frameworks de interfaz (como Bootstrap o Material UI).

El diseño y la maquetación se realizaron con SASS (SCSS) aplicando la metodología BEM, siguiendo el diseño del Figma entregado en el test técnico.

## Tecnologías utilizadas
React 18 con Vite
SASS (SCSS) para los estilos
Recharts para la gráfica
JavaScript moderno (ES6+)

## Instalación
```bash
git clone https://github.com/LINAAYURE98/test_lumu.git
cd lumu-frontend-test
npm install
npm run dev
```
El proyecto se ejecutará por defecto en:
http://localhost:5173

## Estructura del proyecto
src/
├── api/ -> Archivo de conexión con la API Bacon Ipsum
├── components/ -> Componentes principales de la aplicación
│ ├── layout/ -> Header y Footer
│ ├── DataSourcePanel.jsx
│ ├── WordHistogram.jsx
│ └── WordTable.jsx
├── styles/ -> Estructura SCSS con metodología BEM
│ ├── base/ -> Variables, fuentes, reset y estilos globales
│ ├── components/ -> Estilos por componente
│ └── main.scss -> Archivo principal que usa todos los módulos
├── assets/ -> Imágenes y recursos estáticos
├── App.jsx -> Contenedor principal
└── main.jsx -> Punto de entrada

## Funcionamiento general

El flujo de la aplicación es el siguiente:

1. El usuario selecciona cuántos párrafos quiere generar y si desea que el texto inicie con “Lorem ipsum”.
2. Al hacer clic en “Generate”, se llama a la API pública de Bacon Ipsum.
3. El texto obtenido se procesa en el frontend, calculando:
   - Total de palabras.
   - Total de caracteres.
   - Palabras más repetidas (para la gráfica y la tabla).
4. El componente **WordHistogram** muestra las frecuencias en una gráfica de barras.
5. El componente **WordTable** muestra el top 5 de palabras más usadas.
6. El botón **Clear** limpia toda la información y reinicia los contadores.

## Compilación de estilos SASS (opcional)

Se puede compilar con el comando para más seguridad, pero de todas formas con solo guardar los estilos se mostrarán los cambios si la hoja está incluida en el main.scss.

```bash
npm run sass:watch
```

## Desarrollado por

Lina Ayure
Front-End Developer

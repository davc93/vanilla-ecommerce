# The Day Beauty

- Proyecto de figma




# Configuración de entorno

- Es una configuracion bastante sencilla, una vez escribas el html, el servidor de desarrollo sirve un public/ , el src de javascript debe estar en la carpeta dist del build ej: ./bundle.js
  ```
  npm run dev
  ```


# Tips para Desarrollo

A continuación se deja un conjunto de tips para el desarrollo de un sitio web, principalmente enfocado a lar performance del sitios, es en si un resumen del curso de platzi optimizacion web.

## script java script

Javascript es un proceso bloqueante, por lo que se sugiere colocar la etiqueta async o defer en el html.

## Fuentes

Para cargar las fuentes de las letras se recomiendo no usar más de 2 y usar el metodo swap de google fonts.

## CSS

- Hacer diseño mobile first primero y luego agregar archivo css especial para desktop
- Aplicar metodología BEM para nombrar bloques para que cada elemento html tenga un solo selector
- Intentar usar **opacity** y **transform** para animaciones y transiciones, ya que estas propiedades no interfieren en el proceso de paint del navegador

## WebFonts

### Metodo 

- Usa SVG de bootstrap link [aqui](https://blog.getbootstrap.com/2020/12/11/bootstrap-icons-1-2-0/), descarga la carpeta y luego referencia con etiquetas svg
- Abre el html de bootstrap donde se despligan todos los iconos en el navegador, abre el archivo en el navegador, no es necesario un servidor (./public/assets/bootstrap-icons-1.2.0/font/index.html) 

### Metodo 2
- Es muy probable que haya media que no tengas por lo cual deberás descargarla puedes usar esta pagina llamada [remi](https://remixicon.com/)

## Imagenes

- **Subelas a cloudinary**

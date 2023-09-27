////////////////////////////////////PRUEBA DE TESTING UNIDAD 1/////////////////////////////////////////

1° Configuración Inicial: Todo esto fue la descarga y preparacion tanto de GIT como la misma descarga del cypress en nuestro proyecto


2° Prueba de Navegación: Se hicieron 2 pruebas, las cuales fueron primero, la verificacion de titulo de la pagina visitanto la pagina de inicio y usando cy.title + .should para asegurarnos de que el campo del titulo contenga los caracteres correctos.

El segundo fue el logo o encabezado el cual usando cy.get(brand) + should nos iba a permitir revisar como valor el texto encabezado y poder confirmar el nombre.


3° Prueba de contenido: Este fue mas facil ya que solo copie el mismo codigo para los 2, y me asegure de añadir al .should() un contain.text que me permite hacer una lectura y comparacion rapida del texto del codigo y la pagina


4° Prueba de interaccion: En este no se encontraron menus desplegables pero se probó la funcionabilidad de los botones de navegacion, los cuales se definian y se probaba el traslado al nuevo link definido.


5° Prueba de respuesta: este fue probado junto al 6. 


6° Prueba adicionales: En esta se tuvo que revisar en la misma pagina el valor de la imagen para poder añadirlo en el codigo con 3 cy.get, y asi poder cubrir cada campo (usuario, boton de login y contraseña).
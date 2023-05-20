Este repositorio contiene los siguientes archivos relacionados con una extensión de Chrome:


## popup.js
Este archivo contiene el código JavaScript necesario para interactuar con la interfaz de usuario de la extensión de Chrome. Al abrir el popup de la extensión, se realiza una solicitud XMLHttpRequest para obtener un archivo JSON llamado "ai-plugin.json". Los datos obtenidos se utilizan para actualizar los elementos HTML en el popup.

## serviceworker.js
Este archivo contiene el código JavaScript para el Service Worker de la extensión de Chrome. El Service Worker escucha los eventos de actualización de pestañas y realiza una solicitud fetch para obtener el archivo "ai-plugin.json" cuando se completa la carga de una página. Los datos obtenidos se almacenan en la sincronización de Chrome para su posterior uso.

## popup.html
Este archivo HTML define la estructura y el diseño del popup de la extensión de Chrome. Contiene elementos HTML como encabezados, párrafos, imágenes y enlaces. Los elementos HTML se actualizan dinámicamente utilizando los datos obtenidos del archivo "ai-plugin.json".

## Uso
Para utilizar esta extensión de Chrome, sigue estos pasos:

+ Descarga los archivos de este repositorio en tu máquina local.
+ Abre Google Chrome y ve a la página de extensiones (chrome://extensions).
+ Activa el modo de desarrollador (Developer mode) en la parte superior derecha de la página.
+ Haz clic en "Load unpacked" o "Cargar extensión sin empaquetar" y selecciona la carpeta que contiene los archivos descargados.
+ La extensión se cargará y estará lista para su uso.
+ Cuando abras el popup de la extensión en Chrome, se realizará una solicitud para obtener el archivo "ai-plugin.json" y se mostrarán los datos en la interfaz de usuario.
¡Disfruta de la extensión de Chrome!

## Contribución
Si deseas contribuir a este proyecto, siéntete libre de hacerlo. Puedes enviar tus pull requests y sugerencias para mejorar la extensión.

## Autor
Este proyecto fue desarrollado por [Nombre del autor]. Puedes contactarme en [correo electrónico] para cualquier consulta relacionada con la extensión.

## Licencia
Este proyecto está bajo la licencia [nombre de la licencia]. Consulta el archivo LICENSE para obtener más información.

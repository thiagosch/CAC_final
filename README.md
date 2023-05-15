![Core Web Design](https://i.imgur.com/fbTGmGi.png)

# "Core web design" Website

# links

## __APIs y librerias__

[![No Laborales api](https://img.shields.io/badge/API-No%20Laborables-4242b9)](https://pjnovas.gitbooks.io/no-laborables/content/feriados.html)
[![Google Iframe](https://img.shields.io/badge/Iframe-Google%20maps-4242b9)](https://developers.google.com/maps/documentation/embed/get-started)
[![animate](https://img.shields.io/badge/Libreria-animate-4242b9)](https://animate.style/)
[![fontawesome](https://img.shields.io/badge/Libreria-fontawesome-4242b9)](https://fontawesome.com/)

## __integrantes__

[![ema](https://img.shields.io/badge/EmaFullStack-Emanuel-4242b9)](https://github.com/EmaFullStack/)
[![santiago](https://img.shields.io/badge/thiagosch-Santiago-4242b9)](https://github.com/thiagosch)

# __Introducción__

Este es el repositorio del sitio web de Core Web Design, una página web diseñada para el curso _codo a codo 2023_ (PYTHON-FRONT END) en el que hemos creado un sitio web que muestra las habilidades en diseño y desarrollo web que hemos adquirido.

# __Como trabajamos__

En este proyecto, hemos desarrollado un sitio web completo, centrado en un single page website.

## __animaciones y transiciones__

1. Utilizamos la libreria $\color{Tan}{animate.css}$ para agregar una animación al titulo y descripcion del sitio.
2. Creamos una transicion a mediante css al desplegar la navbar en mobile
3. Utilizamos la pseudo clase :hover para añadir efecto de elevacion en las tarjetas de presentacion del servicio y empleados.

## __Integracion de API__

Utilizamos la api $\color{Tan}{No}$ $\color{Tan}{laborales}$ para obtener informacion acerca de los feriados nacionales y asi poder informar al usuario los dias de semana en los que la empresa no estará abierta al publico.

## __Validacion Formulario__

La validacion del formulario tiene 3 componentes

<ol>
  <li>
    Validacion de email:
    </br>
<details>
<summary>
Ver explicaicion del regex
</summary>

este regex busca que el nombre de usuario este compuesto por uno o más bloques de caracteres alfanuméricos separados por un guion o un punto.
Luego, busca el símbolo "@" seguido por uno o más caracteres alfanuméricos para el dominio del correo electrónico,
y uno o más grupos de un punto seguido por dos o tres caracteres alfabéticos para la extensión de dominio

</details>
  </li>
  <li>
Validacion de nombre:</br>
  Mediante un simple bloque if chequeamos que el valor del campo de nombre de usuario contenga al menos dos palabras separadas por un espacio
  </li>
  <li>
Validacion de mensaje:</br>
  chequeamos si hay o no texto en el campo de comentarios.
  </li>
</ol>

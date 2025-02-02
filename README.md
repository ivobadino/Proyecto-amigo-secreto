![](https://github.com/user-attachments/assets/4a0bf432-7d67-4ec8-afb7-2e4744538ae2)

### Indice

- [Descripcion del proyecto](#descripcion-del-proyecto)

- [Funcionalidades](#funcionalidades)

- [Aplicacion](#aplicacion)

- [Herramientas utilizadas](#herramientas-utilizadas)

- [Acesso al projecto](#acceso-al-proyecto)

- [Usar aplicacion web](#usar-aplicacion-web)

- [](#)


## Descripcion del proyecto

Esta aplicación web te permite crear una lista de amigos y realizar un sorteo aleatorio para asignar un amigo secreto. Es una herramienta divertida y fácil de usar para organizar una infinidad de tareas que requieran de la seleccion de un amigo.


## Funcionalidades 
:heavy_check_mark: `Funcionalidad 1:` <em>Carga de nombres validos</em><br>
La aplicacion web te solicita que ingreses el nombre de un amigo por vez mediante una input de texto, al hacer clic en el boton de "añadir" la aplicacion verificara en la funcion `agregarAmigo()`, si el texto ingresado es un texto valido o un texto vacio.

En el caso de ser un texto vacio, aparecera un `alert` indicando que el texto no es valido:
![alerta de texto vacio](https://github.com/user-attachments/assets/58f1a547-edea-4db2-8315-ac4402037bb3)



En caso de si ser un texto valido, es decir el nombre de un amigo, este o estos, segun la cantidad se guardaran en forma de lista debajo del input. Esto se logra añadiendo etiquetas de html `<li>` al listado contenido por `<ul>` con el `id="listaAmigos"` mediante la funcion:

          function actualizarListaMostrada(){
            limpiarTextos();
            let listaHTML = "";
            for (let indice = 0; indice < listaAmigos.length; indice++){
                listaHTML += `<li>${listaAmigos[indice]}</li>`;
            ListaDOM.innerHTML=listaHTML;
            }
          } 

<em>lo que en la web se visualizaria:</em>

![listado de amigos](https://github.com/user-attachments/assets/c3071f2d-76d4-4e76-8d61-a167212c4ad2)


:heavy_check_mark: `Funcionalidad 2:` <em>Sorteo de un amigo</em><br>



## Aplicacion

## Herramientas utilizadas


## Tecnologías utilizadas

*   <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>   JAVASCRIPT
  
  -Herramienta escencial para el desarroyo de la funcionalidad y logica del proyecto.

*   <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40"/> </a>   HTML

  -Herramienta utilizada para la estructuracion del contenido visualizado en la web.

*   <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40"/> </a>   CSS

  -Herramienta utilizada para el estilo y diseño de la web.

## Acceso al proyecto

Para acceder al codigo fuente hacer click [aqui](https://github.com/ivobadino/Proyecto-amigo-secreto)

## Usar aplicacion web

Para utilizar la aplicacion web hacer click [aqui](https://ivobadino.github.io/Proyecto-amigo-secreto/)


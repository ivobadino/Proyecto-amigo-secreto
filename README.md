![](https://github.com/user-attachments/assets/4a0bf432-7d67-4ec8-afb7-2e4744538ae2)

### Indice

- [Descripcion del proyecto](#descripcion-del-proyecto)

- [Funcionalidades](#funcionalidades)

- [Herramientas utilizadas](#herramientas-utilizadas)

- [Acesso al projecto](#acceso-al-proyecto)

- [Usar aplicacion web](#usar-aplicacion-web)

- [Contribuciones](#contribuciones)


## Descripcion del proyecto

Esta aplicación web te permite crear una lista de amigos y realizar un sorteo aleatorio para asignar un amigo secreto. Es una herramienta divertida y fácil de usar para organizar una infinidad de tareas que requieran de la seleccion de un amigo.


## Funcionalidades 
:heavy_check_mark: `Funcionalidad 1:` <em>Carga de nombres validos</em><br>
La aplicacion web te solicita que ingreses el nombre de un amigo por vez mediante una input de texto, al hacer clic en el boton de "añadir" la aplicacion verificara en la funcion `agregarAmigo()`, si el texto ingresado es un texto valido o un texto vacio.

En el caso de ser un texto vacio, aparecera un `alert` indicando que el texto no es valido:

![alerta de texto vacio](https://github.com/user-attachments/assets/58f1a547-edea-4db2-8315-ac4402037bb3)



En caso de si ser un texto valido, es decir el nombre de un amigo, este o esto segun la cantidad, se guardaran en forma de lista debajo del input. Esto se logra añadiendo etiquetas de html `<li>` al listado contenido por `<ul>` con el `id="listaAmigos"` mediante la funcion:

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
en la aplicacion web se puede visualizar un boton debajo en la parte inferior, por debajo del listado de amigos. Dicho boton 
es el que nos permitira realizar el sorteo en caso de tener amigos en nuestro listado. Este boton mediante el html es que da inicio 
a la funcion `sortearAmigo()` la que vericara si este listado contiene nombres.

En caso de tener un listado vacio, se mostrara un `alert` que notificara que no se a agregado un nombre:

![alerta de listado vacio](https://github.com/user-attachments/assets/93e4eee4-cec7-4b46-835f-465039925662)



En el caso de tener uno o mas nombres en el listado la funcion `sortearAmigo()` realizara el sorteo aleatoriamente de los indices de la la lista donde estan almacenados los nombres, utilizando la funcion `Math.random()`:

          function sortearAmigo(){
              limpiarTextos();
              if (listaAmigos.length == 0){                 //comprobar si hay elementos en la lista
                  alert('¡No haz añadido ningun amigo a tu lista!, agrega amigos para hacer el sorteo');
                  return;
              }
              else{                                        //elejir numero random
                  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
                  const ResultadoDOM = document.getElementById('resultado');
                  ResultadoDOM.innerHTML = `<li>El amigo sorteado es: ${listaAmigos[indiceAleatorio]}</li>` ;//mostrar el nombre sorteado
              } 
          }

          
Luego de elegir un amigo de forma aleatoria, dentro de la funcion `sortearAmigo()` se crean y agregan etiquetas de html `<li>` a las etiquetas `<ul>` que tienen por id: `id="resultado"` que notificaran al usuario que nombre a sido el seleccionado

![amigo seleccionado](https://github.com/user-attachments/assets/717b1891-d36f-4825-af2a-510dd31f4951)


:heavy_check_mark: `Funcionalidad 3:` <em>Funcionalidades extra</em><br>
El programa admite seguir añadiendo nombres luego de ser realizado el sorteo y restaurara los nombres añadidos anteriormente. Esto es debido a que los nombres continuan guardados en la lista: `listaAmigos = []` la cual no es borrada. Para poder borrar el listado se tendra que re-cargar la pagina web.
Tambien el programa admite volver a sortear los nombres las veces que el usuario desee.

Mas funcionalidades seran agredas proximamente.


## Herramientas utilizadas

* **Visual Studio Code** <a href="https://code.visualstudio.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40"/> </a>
    - Entorno de desarrollo integrado (IDE) utilizado para escribir, editar y depurar el código del proyecto. Ofrece una amplia gama de extensiones y herramientas que facilitan la programación en JavaScript, HTML y CSS.

## Tecnologías utilizadas

*   **JavaScript**<a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
    - Lenguaje escencial para el desarroyo de la funcionalidad y logica del proyecto.

*    **HTML**<a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40"/> </a>

     - Lenguaje utilizada para la estructuracion del contenido visualizado en la web.

*   **CSS**<a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40"/> </a>
    - Lenguaje utilizada para el estilo y diseño de la web.

## Acceso al proyecto

Para acceder al codigo fuente hacer click [aqui](https://github.com/ivobadino/Proyecto-amigo-secreto)

## Usar aplicacion web

Para utilizar la aplicacion web hacer click [aqui](https://ivobadino.github.io/Proyecto-amigo-secreto/)

### Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. **Forkea este repositorio:** Crea una copia de este repositorio en tu cuenta de GitHub.
2. **Crea una nueva rama:** Basada en la rama `main` (o la rama principal que estés utilizando).
3. **Realiza tus cambios:** Edita los archivos y realiza los cambios que desees.
4. **Commitea tus cambios:** Guarda tus cambios localmente.
5. **Envía un pull request:** Envía una solicitud de fusión para que tus cambios sean revisados y fusionados con el repositorio principal.

**Guía de estilo:**

* Sigue el estilo de codificación existente.
* Escribe comentarios claros y concisos.
* Realiza pruebas exhaustivas antes de enviar un pull request.

**¿Cómo puedes contribuir?**
* **Corrigiendo errores:** Si encuentras algún bug, puedes enviar una corrección.
* **Agregando nuevas funcionalidades:** Puedes implementar nuevas características que consideres útiles.
* **Mejorando la documentación:** Puedes mejorar la documentación existente o agregar nueva documentación.
* **Traduciendo el proyecto:** Si hablas otros idiomas, puedes traducir el proyecto a otros idiomas.

**¡Gracias por tu interés en contribuir a este proyecto!**

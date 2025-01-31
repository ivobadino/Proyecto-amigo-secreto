let listaAmigos = [];
let nombre = '';
let amigoSorteado = '';
let amigo = '';
let ListaDOM = '';

function agregarAmigo(){
   
nombre = document.getElementById('amigo').value;                        //obtener el texto de la caja de carga
    
    if (nombre == ''){                                                  //chequear si el texto esta vacio
        alert('Por favor, ingrese un nombre valido');                   //mostrar texto de invalidez
    }
    else{                                                               //actualizar el array 
        listaAmigos.push(nombre);
        limpiarCaja();
    }                                                                   //limpiar campo de entrada
    actualizarListaMostrada();
    return;                                                             //mostrar la lista por consola
}

function actualizarListaMostrada(){
    limpiarTextos();
    let listaHTML = "";
    for (let indice = 0; indice < listaAmigos.length; indice++){
        listaHTML += `<li>${listaAmigos[indice]}</li>`;
    ListaDOM.innerHTML=listaHTML;
    }
}

function sortearAmigo(){
    limpiarTextos();
    if (listaAmigos.length == 0){                                       //comprobar si hay elementos en la lista
        alert('¡No haz añadido ningun amigo a tu lista!, agrega amigos para hacer el sorteo');
        return;
    }
    else{
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const ResultadoDOM = document.getElementById('resultado');
        ResultadoDOM.innerHTML = `<li>El amigo sorteado es: ${listaAmigos[indiceAleatorio]}</li>` ;//mostrar el nombre sorteado
    } 
}

function limpiarTextos(){                                               //limpiar todos los textos de etiqueta'<li>'
    ListaDOM = document.getElementById('resultado');
    ListaDOM.innerHTML = '';
    ListaDOM = document.getElementById('listaAmigos');   
    ListaDOM.innerHTML = '';
}

function limpiarCaja() {                                                //limpiar caja
    document.querySelector('#amigo').value = '';
    nombre.value = '';
}



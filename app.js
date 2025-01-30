let listaAmigos = [];
let nombre = '';

function agregarAmigoAlListado(){
   
    nombre = document.getElementById('amigo').value;                //obtener el texto de la caja de carga
    
if (nombre == ''){                                                  //chequear si el texto esta vacio
    //mostrar texto de invalidez
        
    }
    else{                                                           //actualizar el array 
        agregarAmigo.push(nombre);
    }
    
    limpiarCaja();                                                  //limpiar campo de entrada
    return;
}

function actualizarListaMostrada(){
    //obtener  el elemento de la lista
    //limpiar el elemento de la lista
    //iterar sobre el arreglo
    //agregar elementos a la lista

}

function seleccionarAmigos(){
    //comprobar si hay elementos en la lista
    //seleccionar un amigo
    //obtener el nombre sorteado
    //mostrar el resultado
}
function sortearAmigo(){
    //validar si lista contiene elementos
    //crear un indice aleatorio
    //seleccionar el elemento con ese indice 
    //obtener el elemento sorteado
    //mostrar el elemento sorteado
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
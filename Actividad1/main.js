//Obtengo los elementos html

const cantidadClics = document.getElementById("cantidadDeClics");
const botonSumar = document.getElementById("boton-sumar");
const botonReiniciar = document.getElementById("boton-reiniciar");

// Valor del contador
let contador = 0;

function sumarClic(){

    contador++;
    cantidadClics.textContent = contador;

}

botonSumar.addEventListener("click", sumarClic);


function reiniciarClics(){

    contador = 0;

    cantidadClics.textContent = contador;

}

botonReiniciar.addEventListener("click", reiniciarClics);
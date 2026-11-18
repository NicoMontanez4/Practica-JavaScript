const cantClics = document.getElementById("cantidadDeClics");
const botonSumar = document.getElementById("boton-sumar");
const botonReiniciar = document.getElementById("boton-reiniciar");


let contador = 0;


function realizarClic()
{
    contador++;

    cantClics.textContent = contador;
    
}

function reiniciar(){

    contador = 0;

    cantClics.textContent = 0;

}

//EVENTOS

botonSumar.addEventListener("click",realizarClic);
botonReiniciar.addEventListener("click",reiniciar);
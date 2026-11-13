//obtengo los elementos html

const cantidadClics = document.getElementById("cant-clics");
const botonRojo = document.getElementById("boton-juego");
const mensaje = document.getElementById("mensaje");

//declaro una variable de contador

let contador = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

cantidadClics.textContent = contador;

function restarClic(){

    contador--;
    cantidadClics.textContent = contador;

    if(contador===1)
    {
        mensaje.textContent = "¡A un clic de ganar!";

    } else if (contador === 0) {
        mensaje.textContent = "¡Felicitaciones!";
        botonRojo.disabled = true; // finaliza la partida
    }
}


botonRojo.addEventListener("click",restarClic);

const cantClics = document.getElementById("cant-clics");
const botonJuego = document.getElementById("boton-juego");
const mensaje = document.getElementById("mensaje");

let contador = Math.floor(Math.random()* (10 - 5 + 1)) + 5;

cantClics.textContent = contador;

function restarClic(){

    contador--;
    cantClics.textContent = contador;

    if(contador===1)
    {
        mensaje.textContent = "¡A un clic de ganar!";

    } else if (contador === 0) {
        mensaje.textContent = "¡Felicitaciones!";
        botonJuego.disabled = true; // finaliza la partida
    }
}

botonJuego.addEventListener("click", restarClic);
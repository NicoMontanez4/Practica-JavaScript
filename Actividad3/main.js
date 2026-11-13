const vistaAcceso = document.getElementById("vista-acceso");
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const mensajeError = document.getElementById("mensaje-error");
const vistaBienvenida = document.getElementById("vista-bienvenida");
const saludo = document.getElementById("saludo");
const botonVolver = document.getElementById("boton-volver");

function ingresar(evento){

    evento.preventDefault();

    const nombreIngreso = inputNombre.value.trim();

    if(nombreIngreso === "")
    {
        mensajeError.textContent = "Por favor, ingresá tu nombre";
    }
    else {
        mensajeError.textContent = "";
        saludo.textContent = "Hola, " + nombreIngreso;
        vistaAcceso.hidden = true;
        vistaBienvenida.hidden = false;
    }

}

function volver(){

    vistaAcceso.hidden = false;
    vistaBienvenida.hidden = true


}

formulario.addEventListener("submit", ingresar);
botonVolver.addEventListener("click", volver);
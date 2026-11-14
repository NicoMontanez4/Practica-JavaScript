const formulario = document.getElementById("formulario-tareas");
const inputTarea = document.getElementById("tarea");
const botonAgregarTarea = document.getElementById("boton-agregar-tarea");
const contenedorTareas = document.getElementById("contenedor-tareas");
const mensajeVacio = document.getElementById("mensaje-vacio");
const mensajeError = document.getElementById("mensaje-error");
const listaTareas = document.getElementById("lista-tareas");



/*Al darle clic al boton Agregar deberia:
-agregar una tarea a la lista (su detalle + el boton de quitar)
-quitar el mensaje de vacio
-no permitir el ingreso de tareas vacias*/ 

function agregarTarea(evento){

    evento.preventDefault();

    const tarea = inputTarea.value.trim();

    if(tarea === "")
    {
        mensajeError.textContent = "Debe ingresar una tarea";
    }
    else{

        mensajeError.textContent = "";
        mensajeVacio.hidden = true;
        
        /*Creo los elementos de la fila*/
        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = tarea;
        const botonQuitar = document.createElement("button");
   
        /*Configuro el boton de quitar tarea */

        botonQuitar.type = "button";
        botonQuitar.textContent = "Quitar";
        botonQuitar.addEventListener("click", function () {

            li.remove();
            actualizarMensajeVacio();
        });

        li.appendChild(texto);
        li.appendChild(botonQuitar);
        listaTareas.appendChild(li);

        inputTarea.value = "";
    }

}

function actualizarMensajeVacio() {
    mensajeVacio.hidden = listaTareas.children.length !== 0;
}

formulario.addEventListener("submit",agregarTarea);

const formulario = document.getElementById("formulario-compras");
const inputProducto = document.getElementById("producto");
const mensajeError = document.getElementById("mensaje-error");
const mensajeVacio = document.getElementById("mensaje-vacio");
const listaProductos = document.getElementById("lista-productos");
const botonBorrar = document.getElementById("boton-borrar");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

//agregar un producto al array

function agregarProducto(evento){

    evento.preventDefault();

    const producto = inputProducto.value.trim();

    if(producto === "")
    {
        mensajeError.textContent = "Debe ingresar un producto";
        return;
    }

        mensajeError.textContent = "";
        productos.push(producto);
        guardarProductos();
        mostrarProductos();
        inputProducto.value = "";
    
}

function guardarProductos(){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function mostrarProductos(){

    listaProductos.innerHTML = "";
    mensajeVacio.hidden = productos.length !== 0;

    productos.forEach(function(producto,indice){

        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = producto;

        const botonQuitar = document.createElement("button");
        botonQuitar.type = "button";
        botonQuitar.textContent = "Quitar";
        botonQuitar.addEventListener("click", function(){
            productos.splice(indice, 1);
            guardarProductos();
            mostrarProductos();
        })

        li.appendChild(texto);
        li.appendChild(botonQuitar);
        listaProductos.appendChild(li);
        
    })
}

function borrarLista(){
    productos = [];
    guardarProductos();
    mostrarProductos();
}

botonBorrar.addEventListener("click", borrarLista);
formulario.addEventListener("submit",agregarProducto);
mostrarProductos();
formulario.addEventListener("submit", agregarProducto);
const formulario = document.getElementById("numeros-calculadora");
const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const botonSumar = document.getElementById("boton-sumar");
const botonLimpiar = document.getElementById("boton-limpiar");
const mensajeError = document.getElementById("mensaje");
const mensajeResultado = document.getElementById("resultado");


function sumar(){

    const numero1 = inputNumero1.value.trim();
    const numero2 = inputNumero2.value.trim();

    if(numero1 === "" || numero2 === ""){

        mensajeError.textContent = "Debe completar ambos campos";
        mensajeResultado.textContent = "";

    }
    else{

        mensajeError.textContent = "";
        const resultado = Number(numero1) + Number(numero2);
        mensajeResultado.textContent = "Resultado: " + resultado;
    
    }

}

function limpiar(){


    inputNumero1.value = "";
    inputNumero2.value = "";
    mensajeError.textContent = "";
    mensajeResultado.textContent = "";

}

botonSumar.addEventListener("click", sumar);
botonLimpiar.addEventListener("click", limpiar);

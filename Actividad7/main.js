// ============================================
// GUARDO REFERENCIAS A LOS ELEMENTOS
// ============================================

const formulario = document.getElementById("formulario");
const inputPais = document.getElementById("buscador");
const grilla = document.getElementById("grilla-paises");
const popup = document.getElementById("popup");
const popupNombre = document.getElementById("popup-nombre");
const popupBandera = document.getElementById("popup-bandera");
const popupInfo = document.getElementById("popup-info");
const popupBotonCerrar = document.getElementById("popup-cerrar");


// ============================================
// LOS DATOS (array de objetos)
// ============================================
const paises = [

    {name: "Argentina", flag: "https://flagcdn.com/w80/ar.png", capital: "Buenos Aires"},
    {name: "Australia", flag: "https://flagcdn.com/w80/au.png", capital: "Canberra"},
    {name: "Brasil", flag: "https://flagcdn.com/w80/br.png", capital: "Brasilia" },
    {name: "Chile", flag: "https://flagcdn.com/w80/cl.png", capital: "Santiago"},
    {name: "Dinamarca", flag: "https://flagcdn.com/w80/dk.png", capital: "Copenhague" },
    {name: "Etiopía", flag: "https://flagcdn.com/w80/et.png", capital: "Addis Ababa" },
    {name: "Francia", flag: "https://flagcdn.com/w80/fr.png", capital: "París" },
    {name: "Japón", flag: "https://flagcdn.com/w80/jp.png", capital: "Tokyo" },
    

];

// ============================================
// EVITAR QUE LA PÁGINA SE RECARGUE
// ============================================
// Si el usuario aprieta Enter en el input, el form intenta enviarse.


formulario.addEventListener("submit", (evento) => evento.preventDefault());


// ============================================
// DIBUJAR LA GRILLA
// ============================================

function renderizarPaises(lista){

    grilla.innerHTML = "";

    lista.forEach((pais) => {


        const celda = document.createElement("div");
        celda.className = "celda-pais";

        const nombre = document.createElement("span");
        nombre.textContent = pais.name;

        const bandera = document.createElement("img");
        bandera.src = pais.flag;

        celda.append(nombre,bandera);

        celda.addEventListener("click", function(){
            abrirPopup(pais);
        });

        grilla.appendChild(celda);
        
    });

}


// ============================================
// NORMALIZAR TEXTO (mayúsculas/minúsculas)
// ============================================

function normalizar(texto){

    return texto.toLowerCase().trim();

}

// ============================================
// FILTRAR
// ============================================


    function filtrarPaises(){

    // 1 Tomar lo que escribió el usuario, normalizado
    const texto = normalizar(inputPais.value);

    // 2 Quedarme solo con los países cuyo nombre incluye ese texto
   const filtrados = paises.filter(function(pais){

    return normalizar(pais.name).includes(texto);

   })

    // 3 Volver a dibujar la grilla con el resultado

   renderizarPaises(filtrados);

   }


// ============================================
// POPUP
// ============================================

function abrirPopup(pais){

    // Rellenar los "huecos" del dialog con los datos del país

    popupNombre.textContent = pais.name;
    popupBandera.src = pais.flag;
    popupBandera.alt = "Bandera de " + pais.name;
    popupInfo.textContent = "Capital: " + pais.capital;
    

    // Mostrarlo

    popup.showModal();

    // Cerrarlo con el botón

    popupBotonCerrar.addEventListener("click", function(){
        popup.close();
    });
}



// ============================================
// ARRANQUE
// ============================================
// Dibujar todos los países al cargar la página

renderizarPaises(paises);
inputPais.addEventListener("input", filtrarPaises);


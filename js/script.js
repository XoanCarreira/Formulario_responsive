const popupCerrar = document.getElementById("popupButton");
const popupContainer = document.getElementById("popupContainer");
const textoPopup = document.querySelector(".popup__p");

let nombre = document.getElementById("nombre");
let mensaje = document.getElementById("mensaje");
let apellidos = document.getElementById("apellidos");




function verificar() {
    if (nombre.value !== "" & apellidos.value !== "" & mensaje.value !== "") {
        mostrar();
    } else {
        alert("Debes rellenar los campos indicados");
        if(nombre.value === ""){
            nombre.focus();
        }else if(apellidos.value === ""){
            apellidos.focus();
        }else if(mensaje.value === ""){
            mensaje.focus();
        }
    }
}


function mostrar() {
    popupContainer.classList.toggle("ocultar");
    textoPopup.textContent = `Hola ${nombre.value} ${apellidos.value}, gracias por el comentario ("${mensaje.value}") pero esto solo es un formulario de muestra.`;
}




function cerrar() {
    popupContainer.classList.toggle("ocultar");
}

const enviar = document.querySelector(".button__enviar");
enviar.addEventListener("click", function(event){event.preventDefault()});
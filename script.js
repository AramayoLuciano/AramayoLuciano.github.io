var munieco = document.querySelector(".contenedor-munieco")
var h1 = document.querySelector(".contenedor-h1")
var h3 = document.querySelector(".contenedor-h3")
var mostrarResultadoDerecha = document.querySelector(".resultado-seccion-derecha")

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ";
    
    especiales = [8,13];
    tecla_especial = false;
    for(var i in especiales) {
       if(key == especiales[i]) {
        tecla_especial = true;
        break;
       } 
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        swal("Porfavor no ingrese caracteres especiales.", "Solo letras.", "error");
        return false
    }

}

function ocultarPanelDerecho() {
     munieco.classList.add("ocultar")
     h1.classList.add("ocultar")
     h3.classList.add("ocultar")
}
function mostrarPanelDerecho(){
    munieco.classList.remove("ocultar")
    h1.classList.remove("ocultar")
    h3.classList.remove("ocultar")
}
function vaciarTexto() {
    document.getElementById("textoIngresado").value = ""
}

function encriptar() {
    var textoIngresado = document.querySelector(".areaTexto")
    if (textoIngresado.value.length > 0) {

    ocultarPanelDerecho();
    mostrarResultadoDerecha.classList.remove("ocultar")
    
    var textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();

    var textoEncriptado = textoIngresado.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoResultado").innerHTML = textoEncriptado;

    } 
    
    else {
        swal("Usted no ingreso ningun texto...", "Porfavor ingrese el texto que desea encriptar", "error");
    }
}

function desencriptar() {

    var textoIngresado = document.querySelector(".areaTexto")
    if (textoIngresado.value.length > 0) {

    ocultarPanelDerecho();
    mostrarResultadoDerecha.classList.remove("ocultar")
    
    var textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();

    var textoEncriptado = textoIngresado.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoResultado").innerHTML = textoEncriptado;
} 
else {
    swal("Usted no ingreso ningun texto...", "Porfavor ingrese el texto que desea desencriptar", "error");
}
}

function copiar() {

    mostrarResultadoDerecha.classList.add("ocultar")

    var contenido = document.querySelector("#textoResultado");
    contenido.select();
    document.execCommand("copy");
    swal("El texto fue copiado!", "Siga encriptando sus textos", "success");
    mostrarPanelDerecho();
    vaciarTexto();
    document.querySelector(".areaTexto").focus()
}
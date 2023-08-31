//DECLARACIÓN DE VARIABLES
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".resgister"); 

abrir_publicación=function(){
  addEventListener
}

window.onload=function(){
  var loader= document.getElementById('cotenedor_loader');
    loader.style.visibility='hidden';
    loader.style.opacity='0';
}

const loader_foto = document.querySelector("loader_foto")
   input=document.querySelector("loader_")
 input.addEventListener("change",() =>{
   loader_foto.src=createObjectURL(input.files[0]);
 } );
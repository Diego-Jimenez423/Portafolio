let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});

var botonlis4 = document.getElementById("lisBoton4");
var boton4 = document.getElementById("boton4");

function desplegarBoton4(){
    botonlis4.classList.add("mostrar");
}

function ocultarBoton4(){
botonlis4.classList.remove("mostrar");    
}

boton4.addEventListener("mouseover",desplegarBoton4,true);
boton4.addEventListener("mouseout",ocultarBoton4,true);
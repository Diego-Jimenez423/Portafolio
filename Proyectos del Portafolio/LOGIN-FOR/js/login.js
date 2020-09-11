function datos(e){
e.preventDefault();
    
 var user =["gato@correo.com", "perro@correo.com", "tomate@correo.com"];
 var password = ["A123","B123","C123"];
    
    var correo = document.querySelector("#Correo").value;
    var pass = document.querySelector("#Password").value;
    var usuario = "Diego";
    var IdDeEtiqueta = document.querySelector ("#mensaje");
    
    for(var i=0;i<=2;i++){
    
    /*-------------------------------------------------------*/
        
    if(correo===user[i]){
        
        if(pass===password[i]){
           IdDeEtiqueta.textContent = "Bievenido "+ usuario;
        }else{
             IdDeEtiqueta.textContent = "Contraseña Incorrecta";
        }
    }
    /*------------------------------------------------------*/    
}
}

var boton = document.querySelector("#Botones");
boton.addEventListener("click", datos);

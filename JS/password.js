const longitud = document.getElementById("longitudcontraseña")
const newpassword = document.getElementById("contraseñanueva")
const botoncontraseña = document.getElementById("botoncontraseña")



//pasamos el argumento longitud, para con los condicianales retornarlo//
//paso 1
function passwordLength(longitud = 12) {
    
    if(longitud < 12) {
        return "La contraseña debe tener mínimo 12 caracteres"
    }else if (longitud > 50){
        return "La contraseña no puede tener más de 50 caracteres"

    }
    let contraseña = crearContraseña(longitud) //invocamos la funcion crearContrasena 
    newpassword.innerHTML= contraseña

    //Math.random para asegurarnos que haya cada tipo de caracter al azar//
}

//paso 2
function crearContraseña (longitud){

   
    let mayuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let minuscula = "bcdefghijklmnopqrstuvwxyz"
    let numeros = "0123456789"
    let simbolos = "@#$%^&*()-_=+"
    let caracteres = [[...mayuscula] , [...minuscula] ,[...numeros] , [...simbolos]] // lo vamos a utilizar solo para seleccionar uno de cada tipo analizarlo Barbi
   
    let contraseña = []

for (let i = 0; i < longitud; i++) {
    
    let all = [...mayuscula  ,...minuscula ,...numeros , ...simbolos] //analizar Barbi
    
    i < 4 ? contraseña.push(caracteres[i][Math.floor(Math.random() * caracteres[i].length)]) : contraseña.push(all[Math.floor(Math.random() * all.length)]);
    
    
   
}

return contraseña.join('');
}


//Boton generar contraseña//
//Inicio
botoncontraseña.addEventListener("click", () => {
   let newpasslength = longitudcontraseña.value //obtenemos el valor del input
   passwordLength(newpasslength) // llamamos la la funcion passwordLength y le pasamos como argument el valor del input
  
   
})
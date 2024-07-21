const longitud = document.getElementById("longitudcontraseña")
const newpassword = document.getElementById("contraseñanueva")
const botoncontraseña = document.getElementById("botoncontraseña")



//pasamos el argumento longitud, para con los condicianales retornarlo//
//paso 1
function passwordLength(longitud = 12 ) {//si pones nº < 12 no te da contraseña//
    
    if(longitud < 12) {
       alert ("La contraseña debe tener mínimo 12 caracteres")
       return//aquí e para, si no se ejecuta uno
    }else if (longitud > 50){
        alert( "La contraseña no puede tener más de 50 caracteres")
       return
    }
    let contraseña = crearContraseña(longitud) //invocamos la funcion crearContraseña //
    newpassword.innerHTML= contraseña
    
} 

//paso 2
function crearContraseña (longitud){

   
    let mayuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"//arr con caracteres//
    let minuscula = "bcdefghijklmnopqrstuvwxyz"
    let numeros = "0123456789"
    let simbolos = "@#$%^&*()-_=+"
    let caracteres = [[...mayuscula] , [...minuscula] ,[...numeros] , [...simbolos]] // lo vamos a utilizar solo para seleccionar uno de cada //
  console.log(caracteres)
    let contraseña = []//arr vacio para generar contraseña//

for (let i = 0; i < longitud; i++) {//va de 0 a longitud//
    
    let all = [...mayuscula  ,...minuscula ,...numeros , ...simbolos] 
   console.log(all)
    
    i < 4 ? contraseña.push(caracteres[i][Math.floor(Math.random() * caracteres[i].length)]) : contraseña.push(all[Math.floor(Math.random() * all.length)]);
    //4 para que haya uno de cada tipo, math.random agraga un caracter al azar de cada tipo//
    
    
   
}

return contraseña.join("");//retornamos y con join quitamos las comas
}


//Boton generar contraseña//

botoncontraseña.addEventListener("click", () => {
   let newpasslength = longitudcontraseña.value //obtenemos el valor del input//
   passwordLength(newpasslength) // llamamos la la funcion passwordLength y le pasamos como argument el valor del input//
    
})
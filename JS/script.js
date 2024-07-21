//RELOJ//

//capturamos date y time//

const time =document.getElementById("time")
const date = document.getElementById("date")
const mensaje = document.getElementById("frase")


//const para meses y días//
const daysName = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


let frase = ""
//En cada intervalo se obtiene fecha y hora a través de new date//

const interval = setInterval (() => {//se ejecuta cada segundo(1000)
    const local = new Date()
    const options = {//definimos que queremos 2 dígitos siempre, para que si es - de 10 ponga un 0 delante//
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit',
        hour12: false
        }
    //extraemos dia,mes y año//
    let hour = local.getHours()
    let day = local.getDay();
    let month = local.getMonth();
    let year = local.getFullYear();


    let tiempocompleto = local.toLocaleTimeString("en-GB", options)//metemos el option definido arriba, para que cuando el nº < 10, se ponga un 0 delante//el en-GB muestra las 24h, en lugar de 12H y 12H//

 
    //se actualiza el Hmtl con fecha y hora//
    time.innerHTML= tiempocompleto;
    date.innerHTML = `${daysName[day-1]} ${months[month]} ${year}`;//day-1, ya que comienza desde 0//

    


    mostrarFrase()//invocamos la función para que nos de la frase según la hora que sea//
},1000)

function mostrarFrase() {//dará una frase según la hora//
    let frase ="";

    if(hour =>  0 &&  hour < 7) {
        frase = "Es hora de descansar. Apaga y sigue mañana"
    }else if (hour => 7 && hour < 12) {
        frase ="Buenos días, desayuna fuerte y a darle al código"
    }else if (hour => 12 && hour < 14) {
        frase ="Echa un rato más pero no olvides comer"
    }else if (hour => 14 && hour < 16) {
        frase ="Espero que hayas comido"
    }else if (hour => 16 && hour < 18) {
        frase ="Buenas tardes, el último empujón"
    }else if (hour => 18 && hour < 20) {
        frase ="Esto ya son horas extras, ... piensa en parar pronto"
    }else {//si no son niguna de las horas de los if o else if, nos dará esta frase//
        frase = "Buenas noches, es hora de pensar en parar y descansar"
    }

    mensaje.innerHTML = frase
}

//LINKS//

const nombre = document.getElementById("nombre")
const enlace = document.getElementById("enlace")
const btnGuardar = document.getElementById("guardar")
const linkList = document.getElementById("itemscontainer")
const lista = document.querySelector(".ulList")

//funcion para agregar enlace//

// localStorage.clear()

//funcion localstorage//
const sendDataLocalStorage = () => {
    const getData = localStorage.getItem("links")//info en localStorage con la clave links//
    const arraElements = getData ? JSON.parse(getData) : []//se parsea, si getData es null nos da un [] vacio
    const dateInputs = {//objeto con 2 prop.//
        pageName : nombre.value,
        pageUrl : enlace.value
    }
    
    arraElements.push(dateInputs)//se añade el dateInputs a arraElements//

    localStorage.setItem("links",JSON.stringify(arraElements))// se añade links al array que se ha parseado//
    showData()//invocamos función//
}
function showData () {
   
    const getLocalData = JSON.parse(localStorage.getItem('links'))//recuperamos info guardada, si no hay datos será null//
   
    if (getLocalData) {//si getLocalData no es null, borra los elementos de html//
        lista.innerHTML = ""//saca los elem. del getLocalData//
        getLocalData.forEach(item => {// se extraen el name y url y se crea un elemento html con el enlace a la url y al name, se ñaade botón de cerar(X)
            const {pageName,pageUrl} = item
            const element = `<a href="${pageUrl}"> 
                                <li>${pageName}</li>
                                
                            </a>
                            <div id="${pageUrl}" class='delete'>X</div>
                            `
            
            lista.innerHTML += element//lo del forEach se concatena a la lista para saque los elementos en pantalla//
        });
        
        const allDeleteItems = document.querySelectorAll(".delete")//capturamos el botón//
        
        allDeleteItems.forEach((item)=>{//seleccionamos elementos con la clase delete//
            item.addEventListener("click", (e) =>{//cuando se da al botón se cierran los elementos de la lista ydel local Storage//
                deleteItem(e)
            })
        })
    }
}
const deleteItem = (e) => {
    
    const itemSelected = e.target.id//se obtien el id del elemento y se guarda en itemSelected//
    const getLocalData = JSON.parse(localStorage.getItem("links"))//info del localStorage, se parsea y se quedada guardada en la variable
    
    const filterArr = getLocalData.filter(data =>  data.pageUrl !== itemSelected )// se excluye elemento con url y itemSelected que hemos acado arriba
    
    localStorage.setItem("links",JSON.stringify(filterArr))//nos da el nuevo arr filtrado y convertimos a JSON//
    showData()
}
btnGuardar.addEventListener ("click", sendDataLocalStorage)

showData()//muestra los datos del localStorage en el DOM//


//CONTRASEÑA//

const longitud = document.getElementById("longitudcontraseña")
const newpassword = document.getElementById("contraseñanueva")
const botoncontraseña = document.getElementById("botoncontraseña")



//pasamos el argumento longitud, para con los condicianales retornarlo//
//paso 1
function passwordLength(longitud = 12) {//si pones nº < 12 no te da contraseña//
    
    if(longitud < 12) {
        return "La contraseña debe tener mínimo 12 caracteres"
    }else if (longitud > 50){
        return "La contraseña no puede tener más de 50 caracteres"

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
  
    let contraseña = []//arr vacio para generar contraseña//

for (let i = 0; i < longitud; i++) {//va de 0 a longitud//
    
    let all = [...mayuscula  ,...minuscula ,...numeros , ...simbolos] 
    
    
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

//TIEMPO//

const api = "https://api.weatherapi.com/"
const apiKey = "9d767ea520924c83ad8170615241707"
const weatherContainer = document.getElementById("weather")
const forecast = document.getElementById("forecast")


fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Madrid&aqi=no`)//obtenemmos datos(get) desde la api de Madrid//
 .then(response => response.json())//se convierte objeto Json//
 .then (data =>  {//json se guarda en data//
  showInfo(data)//invocamos función//
  console.log(data)// Buscamos aqui dentro los datos que meteremos en var. OJO! forecast es un array
   const city = data.location.name
        country = data.location.country
        image = data.current.condition.icon
        weather = data.current.condition.text
        temperature = data.current.temp_c
        humidity = data.current.humidity
        wind = data.current.wind_kph
        precipitation = data.current.precip_mm
        pronostico = data.forecast.forecastday[0].hour
        
            
 })   

 function showInfo(data) {
  
    const current = data.current
    const location = data.location

    const divWeather = document.createElement ("div")
    divWeather.classList.add("details")//info actual clima Madrid

    divWeather.innerHTML = `
    <h2>${location.name}, ${location.country}</h2>
    <p>Estado del clima: ${current.condition.text}</p>
    <img src="${current.condition.icon}" alt= "weather icon">
    <p>Temperatura: ${current.temp_c}</p>
    <p>Humedad: ${current.humidity}</p>
    <p>Viento: ${current.wind_kph}</p>
    <p>Precipitación: ${current.precip_mm}</p>
    <ul id ="list"></ul>
  `
  const weatherContainer = document.getElementById("weather")
   if(weatherContainer !== null) {
    weatherContainer.appendChild(divWeather)//si existe se añade como hijo//
   
   
  const ul = divWeather.querySelector("#list");
  const hourForecast = data.forecast.forecastday[0].hour//
  hourForecast.forEach(hour => {//se recorre/7
    const li = document.createElement("li");//se añade cada elemento//
    li.textContent = ` ${hour.temp_c} ${hour.condition.text}`;//se crea un elemento para cada hora con la tª//
    ul.appendChild(li);//se añada cada elemento a la ul//

   })
  }

 
  }
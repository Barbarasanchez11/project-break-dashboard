const api = "https://api.weatherapi.com/"
const apiKey = "9d767ea520924c83ad8170615241707"
const weatherContainer = document.getElementById("weather")
const forecast = document.getElementById("forecast")


//async para hacer petición a la api//

//const infoWeather = async () => {
  //const weatherAwait = fetch await(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Madrid&aqi=no`)//se pasa la apiKey y Madrid
  //const data = await weatherAwait.json()
 // console.log(data)//devuelve promesa que se guarda en weatherAwait, se convierte en objeto con JSON//
 //try {//errores//
  // const weatherInfo = data.forecast.forecastday[0].day.condition.text//info de clima actual dentro de data,se guarda en weatherInfo//
  // console.log(`El tiempo en Madrid es: ${weatherInfo}`)//imprimir clima//
 //} catch (error) {
  //console.log("Lo sentimos, la información no está disponible")//mensaje no disponible//
  
 //}
//}

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Madrid&aqi=no`)//obtenemmos datos desde la api de Madrid//
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
        // no funciona probado con [0] en hour y sin//
            
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
  const hourForecast = data.forecast.forecastday[0].hour
  hourForecast.forEach(hour => {
    const li = document.createElement("li");
    li.textContent = ` ${hour.temp_c} ${hour.condition.text}`;
    ul.appendChild(li);

   })
  }

 
  }

    
 

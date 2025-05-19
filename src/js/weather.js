const api = "https://api.weatherapi.com/"
const apiKey = "9d767ea520924c83ad8170615241707"
const weatherContainer = document.getElementById("weather")
const forecast = document.getElementById("forecast")
const isMainContainer = document.getElementById("index")

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Madrid&aqi=no`)//obtenemmos datos(get) desde la api poniendo la localización en Madrid//
 .then(response => response.json())//se convierte objeto Json//
 .then (data =>  {//json se guarda en data//
  showInfo(data)//invocamos función//
  // Buscamos aqui dentro los datos que meteremos en var. OJO! forecast es un array
   const city = data.location.name
        country = data.location.country
        image = data.current.condition.icon
        weather = data.current.condition.text
        temperature = data.current.temp_c
        humidity = data.current.humidity
        wind = data.current.wind_kph
        precipitation = data.current.precip_mm
        pronostico = data.forecast.forecastday[0].hour
        console.log(pronostico)
        
            
 })   
 .catch(error => {
  console.error("Error", error)
 })

 function showInfo(data) {
  
    const current = data.current//tiempo actual
    const location = data.location//ubicación

    const divWeather = document.createElement ("div")
    divWeather.classList.add("details")//info actual clima Madrid

    divWeather.innerHTML = ` 
      <div class="details">
        <h2>${location.name}, ${location.country}</h2>
        <p class="sunny"> ${current.condition.text}</p>
      </div>
      <div class="temperatura">
        <img src="${current.condition.icon}" class="weather-icon" alt="weather icon">
        <p class="title">${current.temp_c}</p>
      
        <img src= "${isMainContainer ? "./src/assets/celsius.png" : "../assets/celsius.png"}" class="termometro" alt="termómetro">
        
        <div class="precipitacion">
          <p>Precipitaciones: ${current.precip_mm}%</p>
          <p>Humedad: ${current.humidity}%</p>
          <p>Viento: ${current.wind_kph}km/h</p>
        </div>
      </div>
      
    
    <ul id ="list">
     
    </ul>
  `
  const weatherContainer = document.getElementById("weather")
   if(weatherContainer !== null) {
    weatherContainer.appendChild(divWeather)//si existe se añade como hijo//
   
   let hour = "" 
   
  const ul = divWeather.querySelector("#list");
  const hourForecast = data.forecast.forecastday[0].hour//
  hourForecast.forEach(hour => {//se recorre//
    const li = document.createElement("li");
    const time = hour.time.split(" ")[1]//separamos hora de fecha, se accede al 1 que es la hora//
   
    li.innerHTML = `
    
      <div class="horas"> ${time}</div>
      
       <div class="forecastImg">
        <img src="${hour.condition.icon}">
      </div>

      <div class="grados">
       <p>${hour.temp_c} ºC</p>
   
    
    `
    ul.appendChild(li);//se añade cada elemento a la ul//
    
   })
  }
  }

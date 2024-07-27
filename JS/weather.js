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
      <div class="details">
        <h2>${location.name}, ${location.country}</h2>
        <p class="sunny"> ${current.condition.text}</p>
      </div>
      <div class="temperatura">
        <img src="${current.condition.icon}" class="weather-icon" alt="weather icon">
        <p class="title">${current.temp_c}</p>
      
        <img src="../IMAGE/icons/celsius.png" class="termometro" alt="termómetro">
        
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
  hourForecast.forEach(hour => {//se recorre/7
    const li = document.createElement("li");
    const time = hour.time.split(" ")[1]
    li.innerHTML = `
    
      <div class="horas"> ${time}</div>
      
       <div class="forecastImg">
        <img src="${hour.condition.icon}">
      </div>

      <div class="grados">
       <p>${hour.temp_c} ºC</p>
   
    
    `
    ul.appendChild(li);//se añada cada elemento a la ul//
    
   })
  }

 
  }
//const fetchingWeather = async() =>{
  //try {
    //const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Madrid&aqi=no`)
    
    //if (!response.ok) {
      //throw new Error(`Error fetching data`, console.log(error.message))
    //}
    //const data = await response.json()
    

    //const city = { 
        // name :  data.location.name,
         //country :  data.location.country,
         //image : data.current.condition.icon,
         //weather : data.current.condition.text,
         //temperature : data.current.temp_c,
         //humidity : data.current.humidity,
         //wind : data.current.wind_kph,
         //precipitation : data.current.precip_mm,
         //pronostico : data.forecast.forecastday[0].hour,
       //}
       
      // return city
       
  //} catch (error) {
   
  //}
 //} 

 //async function showInfo() {
   // const data = await fetchingWeather()
    //console.log(data);   
  
    //const {name, country, image, weather,temperature, humidity, wind, precipitation, pronostico} = data
    //console.log('city',city)
    //console.log('country',country)
    //console.log('image',image)
    //console.log('weather',weather)
    //console.log('temperature',temperature)
    //console.log('humidity',humidity)
    //console.log('wind',wind)
    //console.log('precipitation',precipitation)
    //console.log('pronostico',pronostico)
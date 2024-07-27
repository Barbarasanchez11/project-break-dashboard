//capturamos date y time//

const time =document.getElementById("time")
const date = document.getElementById("date")
const mensaje = document.getElementById("frase")


let hour= ""
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

     let tiempocompleto = local.toLocaleTimeString("en-GB", options)//metemos el option definido arriba, para que cuando el nº < 10, se ponga un 0 delante//el en-GB muestra las 24h, en lugar de 12H y 12H//
   
     //extraemos dia,mes y año//
    
    const day = local.getDate();
    
    const month = local.getMonth();
    const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const currentMonth = months[month]
    const year = local.getFullYear();
 
    //se actualiza el Hmtl con fecha y hora//
    time.innerHTML= tiempocompleto;
    date.innerHTML = ` ${day} / ${currentMonth} / ${year}`;

    


    mostrarFrase()//invocamos la función para que nos de la frase según la hora que sea//
},1000)

function mostrarFrase() {//dará una frase según la hora//
    let frase ="";
    let hour = new Date().getHours()
    

    if(hour >=  0 &&  hour < 7) {
        frase = "Es hora de descansar. Apaga y sigue mañana"
    }else if (hour  >= 7 && hour < 12) {
        frase ="Buenos días, desayuna fuerte y a darle al código"
    }else if (hour  >= 12 && hour  < 14) {
        frase ="Echa un rato más pero no olvides comer"
    }else if (hour >= 14 && hour  < 16) {
        frase ="Espero que hayas comido"
    }else if (hour  >= 16 && hour  < 18) {
        frase ="Buenas tardes, el último empujón"
    }else if (hour  >= 18 && hour  < 20) {
        frase ="Esto ya son horas extras, ... piensa en parar pronto"
    }else {//si no son niguna de las horas de los if o else if, nos dará esta frase//
        frase = "Buenas noches, es hora de pensar en parar y descansar"
    }

    mensaje.innerHTML = frase
}
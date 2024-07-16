//capturamos date y time//

const time =document.getElementById("time")
const date = document.getElementById("date")
const mensaje = document.getElementById("frase")


//const para meses//

const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

//En cada intervalo se obtiene fecha y hora a través de new date//

const interval = setInterval (() => {
    const local = new Date()
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit',
        hour12: false
        }
    //extraemos dia,mes y año//
    let day = local.getDate();
    let month = local.getMonth();
    let year = local.getFullYear();


    let tiempocompleto = local.toLocaleTimeString("en-GB", options)

 
    //se actualiza el Hmtl con fecha y hora//
    time.innerHTML= tiempocompleto;
    date.innerHTML = `${day} ${months[month]} ${year}`;

    //ternario para que h,m,s tengan dos dígitos, poner un cero delante cuando sea menor a 10(de momento no fuciona)



    mostrarFrase()
},1000)

function mostrarFrase() {
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
        frase ="sto ya son horas extras, ... piensa en parar pronto"
    }else {
        frase = "Buenas noches, es hora de pensar en parar y descansar"
    }

    mensaje.innerHTML = frase
}
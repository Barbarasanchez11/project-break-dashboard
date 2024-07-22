const fotos = ["../IMAGE/foto1.jpg", "../IMAGE/foto2.jpg", "../IMAGE/foto3.jpg", "../IMAGE/foto4.jpg",
    "../IMAGE/foto5.jpg", "../IMAGE/foto6.jpg", "../IMAGE/foto7.jpg", "../IMAGE/foto8.jpg", "../IMAGE/foto9.jpg",
    "../IMAGE/foto10.jpg", "../IMAGE/foto11.jpg", "../IMAGE/foto12.jpg",
 ]

 const fondo = () => {
    const aleatorio = Math.floor(Math.random() * 12)
    const cambio = fotos[aleatorio]
    document.body.style.backgroundImage = `url${cambio}`
 }

 let cambioTiempo = setInterval(fondo, 10000)

 fondo()
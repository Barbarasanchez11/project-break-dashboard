const fotos = [
    "https://unsplash.com/es/fotos/un-avion-volando-en-el-cielo-al-atardecer-x3imzakRdNo",
    "https://unsplash.com/es/fotos/una-gran-masa-de-agua-rodeada-de-montanas-cubiertas-de-nieve-Du3rpaUWkTY",
    "https://unsplash.com/es/fotos/un-gran-objeto-en-forma-de-espiral-en-el-cielo-pZNMBa_8bts",
    "https://unsplash.com/es/fotos/una-imagen-generada-por-computadora-de-una-puesta-de-sol-en-el-desierto-PEJHMgx_ilo",
    "https://unsplash.com/es/fotos/el-sol-se-pone-sobre-las-montanas-y-el-agua-uAnxVqzj8gk",
    "https://unsplash.com/es/fotos/un-bote-esta-en-el-agua-cerca-de-unas-rocas--wknoTM0SuE",
    "https://unsplash.com/es/fotos/una-montana-cubierta-de-nieve-bajo-un-cielo-nublado-atxldtmQVdI",
    "https://unsplash.com/es/fotos/un-sendero-con-un-letrero-en-el-costado-ExRfDYo2oFw",
    "https://unsplash.com/es/fotos/una-vista-aerea-de-una-playa-de-arena-y-el-oceano-TsX_YcL-rDE",
    "https://unsplash.com/es/fotos/un-pajaro-volando-sobre-un-cuerpo-de-agua-al-atardecer-HYX-SkM91p0",
    "https://unsplash.com/es/fotos/una-imagen-borrosa-de-un-jarron-con-una-flor-en-su-interior-KuPqBkBjfao"
];

const fondo = () => {
    const aleatorio = Math.floor(Math.random() * fotos.length);
    const cambio = fotos[aleatorio];
    document.body.style.backgroundImage = `url("${cambio}")`;
}

setInterval(fondo, 10000);
fondo();
console.log(fondo)


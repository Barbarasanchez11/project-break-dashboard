const nombre = document.getElementById("nombre")
const enlace = document.getElementById("enlace")
const btnGuardar = document.getElementById("guardar")
const linkList = document.getElementById("itemscontainer")
const lista = document.querySelector(".ulList")

//funcion para agregar enlace//

// localStorage.clear()

//funcion localstorage//
const sendDataLocalStorage = () => {
    const getData = localStorage.getItem('links')
    const arraElements = getData ? JSON.parse(getData) : []
    const dateInputs = {
        pageName : nombre.value,
        pageUrl : enlace.value
    }
    
    arraElements.push(dateInputs)

    localStorage.setItem('links',JSON.stringify(arraElements))
    showData()
}
function showData () {
   
    const getLocalData = JSON.parse(localStorage.getItem('links'))
   
    if (getLocalData) {
        lista.innerHTML = ''
        getLocalData.forEach(item => {
            const {pageName,pageUrl} = item
            const element = `<a href="${pageUrl}">
                                <li>${pageName}</li>
                                
                            </a>
                            <div id="${pageUrl}" class='delete'>X</div>
                            `
            
            lista.innerHTML += element
        });
        
        const allDeleteItems = document.querySelectorAll('.delete')
        
        allDeleteItems.forEach((item)=>{
            item.addEventListener('click', (e) =>{
                deleteItem(e)
            })
        })
    }
}
const deleteItem = (e) => {
    
    const itemSelected = e.target.id
    const getLocalData = JSON.parse(localStorage.getItem('links'))
    
    const filterArr = getLocalData.filter(data =>  data.pageUrl !== itemSelected )
    
    localStorage.setItem('links',JSON.stringify(filterArr))
    showData()
}
btnGuardar.addEventListener ("click", sendDataLocalStorage)

showData()
// const nombreIn = nombre.value//con el click se obtiene el valor introducido//
    // const enlaceIn = enlace.value
    // const nuevoEnlace= document.createElement("li")//elemento que se guardará en nuevoEnlace//
    // nuevoEnlace.innerHTML = `<a href="${enlaceIn}">${nombreIn}></a>`//utiliza los valores de nombre y enlace//

    // const btnBorrar = document.createElement("button")
    // btnBorrar.textContent = "eliminar"


    // linkList.appendChild(nuevoEnlace)
      
    // nombre.value = ""//cadena vacia que limpia después de guardar el enlace//
    // enlace.value = ""


    // arrLinks(nombreIn, enlaceIn)
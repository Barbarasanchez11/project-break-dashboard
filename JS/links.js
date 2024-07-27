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
        let element = ""
        getLocalData.forEach(item => {// se extraen el name y url y se crea un elemento html con el enlace a la url y al name, se añade botón de cerar(X)
            const {pageName,pageUrl} = item

         element += ` <li>${pageName}
         <a href="${pageUrl}"> 
                            </a>
                            <div id="${pageUrl}" class='delete'>X</div>
                            </li>
                            `
            
            //lo del forEach se concatena a la lista para saque los elementos en pantalla//
        });

        lista.innerHTML += element
        
        const allDeleteItems = document.querySelectorAll(".delete")//capturamos el botón//
        
        allDeleteItems.forEach((item)=>{//seleccionamos elementos con la clase delete//
            item.addEventListener("click", (e) =>{//cuando se da al botón se cierran los elementos de la lista ydel local Storage//
                deleteItem(e)
            })
        })
    }
}
const deleteItem = (e) => {
    
    const itemSelected = e.target.id//se obtiene el id del elemento y se guarda en itemSelected//
    const getLocalData = JSON.parse(localStorage.getItem("links"))//info del localStorage, se parsea y se queda guardada en la variable
    
    const filterArr = getLocalData.filter(data =>  data.pageUrl !== itemSelected )// se excluye elemento con url y itemSelected que hemos sacado arriba
    
    localStorage.setItem("links",JSON.stringify(filterArr))//nos da el nuevo arr filtrado y convertimos a JSON,ahora es el localStorage//
    showData()
}
btnGuardar.addEventListener ("click", sendDataLocalStorage)

showData()//muestra los datos del localStorage en el DOM//

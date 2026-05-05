import { DB } from './db.js'

function TraerDatos(Datos) {

    let Contenedor = document.querySelector('.contenedor')
    Contenedor.innerHTML = "";

    Datos.forEach(i => {
        let ContenedorAux = document.createElement('div')
        ContenedorAux.className = 'Tarjetas'

        ContenedorAux.innerHTML =
            `
            <h1>${i.Nombre}</h1>
            <h2>$${i.Precio}</h2>
            <h3>Cantidad: ${i.Stock}</h3>
            <p>${i.Descripcion}</p>
            <img src="${i.Imagen}" alt="img">
            <button onclick="agregarfavorito()" class="btnfav">❤️</button>
        `
        Contenedor.appendChild(ContenedorAux)
    });

}

TraerDatos(DB)


// --> Tomamos el input de HTML con el ID(#)Filtro
let Filtro = document.querySelector('#Filtro')
let Contenedor = document.querySelector('.contenedor')
/* Agregamos un evento al input, cada vez que se escriba una tecla, se ejecuta la función */
Filtro.addEventListener('keyup', function () {
    // --> Evitamos que se ejecute el evento por defecto del input
    let Filtros = DB.filter(i => i.Nombre.toLowerCase().includes(Filtro.value.toLowerCase()))
    // --> Llamamos a la función TraerDatos y le pasamos el resultado del filtro como argumento
    if(Filtros.length>0){
        TraerDatos(Filtros)
    }
    else{
        Contenedor.innerHTML=`<p>Producto no Encontrado</p>`
    }
    
})


// function Favoritos(parametros) {
//     let Fav = document.querySelector('.Favorito')

//     Filtro.addEventListener('click', function (e) {
//         e.preventDefault()

//         let Filtros = DB.filter(i => i.Nombre.toLowerCase().includes(Filtro.value.toLowerCase()))
//         TraerDatos(Filtros)
//     })
// }

let contador=0;

window.agregarfavorito=function(){
    contador++;
    document.getElementById('fav').innerText=contador;
}
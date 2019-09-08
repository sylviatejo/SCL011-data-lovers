/* Manejo del DOM */

//asignar a una variable total de data pokemon.js
const allPokeData = POKEMON.pokemon;

//asignar evento al boton pokemon comunes para filtrar y calcular
const buttonPokeComm = document.getElementById("pokeComm");

//Asignar a una variable el resultado del filtro pokemones comunes que fue un nuevo arreglo de 41 pokemones
const printPokeComm = window.filterPoke.filterPokeCommon(allPokeData);

//asigna div root a variable container principal como padre
const container = document.getElementById("principal");

// const prinMediaPoke = window.filterPoke.mediaPokeCal(allPokeData);


buttonPokeComm.addEventListener("click", () => {



    //recorrer el nuevo arreglo de 41 pokemones que esta guardado en la variable printPokeComm
    printPokeComm.forEach(element => {
        //Creando el elemento div que contiene la mini tarjeta pokemon
        let createMiniPokeCars = document.createElement("div");
        //Asignando elemento padre al div creado con variable que es el contenedor
        let asigPadre = document.getElementById("principal"); //deberia ser la caja pokebox
        //asignamos atributos de clases dadas en style
        createMiniPokeCars.setAttribute("class", "classDivMiniCard");
        //agregamos hijo al padre con metodo appendChild
        asigPadre.appendChild(createMiniPokeCars);
        //Imprimo los valores de las propiedades de la data filtrada
        createMiniPokeCars.innerHTML += `<img src = ${element.img}>
                                        <h1>${element.name}</h1>
                                        <p>Spawn ${element.avg_spawns}</p>`
    })

})

// refrescar index 

//document.getElementById("clear").addEventListener('click', () => {
//location.reload()
//});
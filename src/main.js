//asignar a una variable total de data pokemon.js
const allPokeData = window.POKEMON.pokemon;
const mediaPoke = window.data.pokeMedia(allPokeData);



//asignar evento al boton pokemon comunes para filtrar y calcular
const buttonPokeComm = document.getElementById("pokeComm");

//Asignar a una variable el resultado del filtro pokemones comunes que fue un nuevo arreglo de 41 pokemones
const printPokeComm = window.data.filterPokeCommon(allPokeData, mediaPoke);
console.log(printPokeComm);

//asignar evento al boton pokemon raros para filtrar y calcular
const buttonPokeRare = document.getElementById("pokeRare");

//Asignar a una variable el resultado del filtro pokemones inusuales que fue un nuevo arreglo de 41 pokemones
const printPokeRare = window.data.filterPokeRare(allPokeData, mediaPoke);
//console.log(printPokeRare);

/*asigna div root a variable container principal como padre
const container = document.getElementById("principal");

const buttonBlock = document.getElementById("divbuttons");
const containerPoke = document.getElementById("pokeComm")
containerPoke.addEventListener("click", () => {
    buttonBlock.style.display = "block";
});*/



buttonPokeComm.addEventListener("click", () => {

    document.getElementById("principal").innerHTML = "";

    //recorrer el nuevo arreglo de pokemones que esta guardado en la variable printPokeComm
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
                                        <p>Spawn % ${element.spawn_chance}</p>
                                        <p>Hora ${element.spawn_time}</p>`
    })


});



buttonPokeRare.addEventListener("click", () => {

    document.getElementById("principal").innerHTML = "";

    //recorrer el nuevo arreglo de  pokemones que esta guardado en la variable printPokeComm
    printPokeRare.forEach(element => {

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
                                        <p>Spawn % ${element.spawn_chance}</p>
                                        <p>Hora ${element.spawn_time}</p>`
    });

});


// ordenar
document.getElementById("sortPokemon").addEventListener("change", ordenPoke);
document.getElementById("principal").innerHTML = "";

function ordenPoke() {
    //contenedor de las card ordenadas
    const contOrderPoke = document.getElementById("principal");
    //asiganr variable del valor de select
    let sorPoke = document.getElementById("sortPokemon").value;

    let ordenPokemonEnd = window.data.sortPokemon(printPokeComm, sorPoke);

    //imprimir

    document.getElementById("principal").innerHTML = "";

    ordenPokemonEnd.forEach(element => {

        contOrderPoke.innerHTML +=
            `<div class="classDivMiniCard">
            <img src = ${element.img}>
            <h1>${element.name}</h1>
            <p>Spawn % ${element.spawn_chance}</p>
            <p>Hora ${element.spawn_time}</p>
            </div>`
    });


};
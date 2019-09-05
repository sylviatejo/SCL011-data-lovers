/* Manejo del DOM */
//asignar a una variable total de data pokemon.js
const allPokeData = POKEMON.pokemon;

//asignar evento al boton pokemon comunes para filtrar y calcular
const buttonPokeComm = document.getElementById("pokeComm")
    //Asignar a una variable el resultado del filtro pokemones comunes que fue un nuevo arreglo de 41 pokemones
const printPokeComm = window.filterPoke.filterPokeCommon(allPokeData).resultFilterCommons;



buttonPokeComm.addEventListener("click", () => {
    document.getElementById("principal").innerHTML = printPokeComm;

    //recorrer el nuevo arreglo de 41 pokemones que esta guardado en la variable printPokeComm
    for ()

})






/*
//for (let [key, value] of newdataObject.entries(newdataObject)) {
//console.log(key.name + ':' + value.name);
*/
/* Manejo del DOM */

//asignar a una variable total de data pokemon.js
const allPokeData = window.POKEMON.pokemon;

//asignar evento al boton pokemon comunes para filtrar y calcular
const buttonPokeComm = document.getElementById("pokeComm");

//Asignar a una variable el resultado del filtro pokemones comunes que fue un nuevo arreglo de 41 pokemones
const printPokeComm = window.data.filterPokeCommon(allPokeData);
//console.log(printPokeComm);

//asigna div root a variable container principal como padre
const container = document.getElementById("principal");

buttonPokeComm.addEventListener("click", () => {

    crearSelect();

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


//asignar evento al boton pokemon raros para filtrar y calcular
const buttonPokeRare = document.getElementById("pokeRare");

//Asignar a una variable el resultado del filtro pokemones inusuales que fue un nuevo arreglo de 41 pokemones
const printPokeRare = window.data.filterPokeRare(allPokeData);
//console.log(printPokeRare);


buttonPokeRare.addEventListener("click", () => {

    crearSelect();
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


/*
function crearSelect() {
    //crear select de ordenar 
    let createSelect = document.createElement("select");
    //deberia ir un for para crear las opciones
    let padreSelect = document.getElementById("principal");
    //Atributos del select
    createSelect.setAttribute("id", "sortPoke");
    //agregamos hijo al padre con metodo appendChild
    padreSelect.appendChild(createSelect);

    //crear option de select 
    let createOptionSelect = document.createElement("option");
    //deberia ir un for para crear las opciones
    let padreOptionSelect = document.getElementById("sortPoke");
    let textoOption = document.createTextNode("Por Nombre");
    createOptionSelect.appendChild(textoOption);
    //Atributos de option
    createOptionSelect.setAttribute("value", "name");
    //agregamos hijo al padre con metodo appendChild
    padreOptionSelect.appendChild(createOptionSelect);

    let valueName = document.getElementById("sortPoke").value;
    console.log(valueName);
    container.innerHTML = window.data.sortFilterPokeCommon(valueName);

}
*/

/*let selectOrderPoke = document.getElementById("sortPoke");
    document.getElementById("sortPoke").addEventListener("change", );
let valueName = document.getElementById("sortPoke").value;
console.log(valueName);
document.getElementById("principal").innerHTML = window.data.sortFilterPokeCommon(valueName);*/

//document.getElementById("sortPoke").addEventListener("change", crearSelect);










// refrescar index 
//document.getElementById("clear").addEventListener('click', () => {
//location.reload()
//});
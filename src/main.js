//asignar a una variable total de data pokemon.js
const allPokeData = window.POKEMON.pokemon;
const mediaPoke = window.data.pokeMedia(allPokeData);
let ordenPokemonEnd = document.getElementById("idSelect");



//asignar evento al boton pokemon comunes para filtrar y calcular
const buttonPokeComm = document.getElementById("pokeComm");

//Asignar a una variable el resultado del filtro pokemones comunes que fue un nuevo arreglo de 41 pokemones
const printPokeComm = window.data.filterPokeCommon(allPokeData, mediaPoke);
//console.log(printPokeComm);

//asignar evento al boton pokemon raros para filtrar y calcular
const buttonPokeRare = document.getElementById("pokeRare");

//Asignar a una variable el resultado del filtro pokemones inusuales que fue un nuevo arreglo de 41 pokemones
const printPokeRare = window.data.filterPokeRare(allPokeData, mediaPoke);
//console.log(printPokeRare);

const buttonfindMe = document.getElementById("findMe");






buttonFindMe.addEventListener("click", () => {

    document.getElementById("divButton2").innerHTML = "";

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

    document.getElementById("divButton1").innerHTML = "";

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


// mostar data completa con boton

buttonfindMe.addEventListener("click", () => {

    document.getElementById("pokeBox").innerHTML = "";

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
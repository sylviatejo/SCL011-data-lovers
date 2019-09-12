// data completa
const allPokeData = window.POKEMON.pokemon;
// data promediada con una propiedad
const mediaPoke = window.data.pokeMedia(allPokeData);
// data filtrada
const printPokeComm = window.data.filterPokeCommon(allPokeData, mediaPoke);
//console.log(printPokeComm);
// data ordenada

//asignar evento al botones
const buttonPokeComm = document.getElementById("pokeComm");
const buttonPokeRare = document.getElementById("pokeRare");

//Asignar a una variable el resultado del filtro pokemones inusuales que fue un nuevo arreglo de 41 pokemones
const printPokeRare = window.data.filterPokeRare(allPokeData, mediaPoke);
//console.log(printPokeRare);
//comentario de prueba
const buttonFindMe = document.getElementById("findMe");






buttonPokeComm.addEventListener("click", () => {

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
    })

});


// mostar data completa con boton findme

buttonFindMe.addEventListener("click", () => {

    document.getElementById("pokeBox").innerHTML = "";

    //recorrer la data
    allPokeData.forEach(element => {

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

    //funcion ordenar y anidarlo a select
    document.getElementById("sortPoke").addEventListener("change", showOrdenPoke);
    document.getElementById("pokeBox").innerHTML = "";


    function showOrdenPoke() {

        const showSortPokemon = document.getElementById("principal");
        let sortPokemones = document.getElementById("sortPoke").value;

        let sortPokePrint = window.data.sortPokemon(allPokeData, sortPokemones);
        showSortPokemon.innerHTML = sortPokePrint.map(element => {

            return `<div>
     <img src = ${element.img}>
     <h1>${element.name}</h1>
     <p>Spawn % ${element.spawn_chance}</p>
     <p>Hora ${element.spawn_time}</p>
     </div>`
        }).join("");
    };

});
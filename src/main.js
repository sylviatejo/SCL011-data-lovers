// data completa
const allPokeData = window.POKEMON.pokemon;
// data promediada con una propiedad (nuevo arreglo numerico)
const mediaPoke = window.data.pokeMedia(allPokeData);
// data filtrada
const printPokeComm = window.data.filterPokeCommon(allPokeData, mediaPoke);
const printPokeRare = window.data.filterPokeRare(allPokeData, mediaPoke);
const printPokeNum = window.data.filterNumber(allPokeData);

//asignar variables botonesss
const buttonPokeComm = document.getElementById("pokeComm");
const buttonPokeRare = document.getElementById("pokeRare");
const buttonFindMe = document.getElementById("findMe");
const buttonNum = document.getElementById("btnNum");
const butnInfo = document.getElementById("info");
let containerFather = document.getElementById("principal");
//const buttonName = document.getElementById("pokeName");
//------------TARJETAS POKEMON--------------------------------------------------------
// Crear funcion para las tarjetas pokecard
function cardsPokemonGo(allPokeData) {
    allPokeData.forEach(element => {
        //Creando el elemento div que contiene la mini tarjeta pokemon
        let createMiniPokeCars = document.createElement("div");
        //Asignando elemento padre al div creado con variable que es el contenedor
        let contPadre = document.getElementById("principal");
        //asignamos atributos de clases dadas en style
        createMiniPokeCars.setAttribute("class", "classDivMiniCard");
        //asignamos atributos de id 
        createMiniPokeCars.setAttribute("id", "divMiniCard");
        //agregamos hijo al padre con metodo appendChild
        contPadre.appendChild(createMiniPokeCars);
        //Imprimo los valores de las propiedades de la data
        createMiniPokeCars.innerHTML += `<img src = ${element.img}>
                                        <h1>${element.name}</h1>
                                        <p>Spawn % ${element.spawn_chance}</p>
                                        <p>Hora ${element.spawn_time}</p>
                                        <a href="#modal"  id="abrir">Mas...</a> `
            //------------Creacion de MODAL-------------------------------------------
        let createDivModal = document.createElement("div");
        contPadre.appendChild(createDivModal);
        createDivModal.className = "modal";
        createDivModal.setAttribute("id", "miModal");
        //div flex que sera mi contenedor del modal 
        let createDivFlex = document.createElement("div");
        createDivModal.appendChild(createDivFlex);
        createDivFlex.className = "flex";
        createDivFlex.setAttribute("id", "flex");
        let createDivContenido = document.createElement("div");
        createDivFlex.appendChild(createDivContenido);
        createDivContenido.className = "contenido-modal";
        createDivContenido.setAttribute("id", "contenido");
        let createDivheader = document.createElement("div");
        createDivContenido.appendChild(createDivheader);
        createDivheader.className = "modal-header flex";
        createDivheader.setAttribute("id", "headerMod");
        createDivheader.innerHTML += `<h1>${element.name}</h1>
                                             <span class="close" id="close">&times; </span>`
        let createDivBody = document.createElement("div");
        createDivContenido.appendChild(createDivBody);
        createDivBody.className = "modalBody";
        createDivBody.setAttribute("id", "bodyMod");
        createDivBody.innerHTML += `<img src = ${element.img}></br>
                                    <strong>Pokedex:</strong>  <p>${element.id}</p>
                                    <strong>Caramelos:</strong>  <p>${element.candy}</p>
                                    <strong>Cantidad de Caramelos:</strong>  <p>${element.candy_count}</p>
                                    <strong>Tipo:</strong>  <p>${element.type}</p>
                                    <strong>Cantidad de Huevos:</strong>  <p>${element.egg}</p>
                                    <strong>Spawn:</strong>  <p>${element.avg_spawns}</p>
                                    <strong>Hora:</strong>  <p>${element.spawn_time}</p>
                                    <strong>Debilidades:</strong>  <p>${element.weaknesses}</p>`
        let createDivFooter = document.createElement("div");
        createDivContenido.appendChild(createDivFooter);
        createDivFooter.className = "footer";
        createDivFooter.setAttribute("id", "footerMod");
        createDivFooter.innerHTML += `<h2>Creado por Marielys y Sylvia</h2>`

        let modal = document.getElementById("miModal");
        let flex = document.getElementById("flex");
        let abrir = document.getElementById("abrir");
        let cerrar = document.getElementById("close");
        //asignamos eventos click para abrir y cerrar modal
        abrir.addEventListener("click", function() {
            modal.style.display = 'block';
        });

        cerrar.addEventListener("click", function() {
            modal.style.display = 'none';
        });
        window.addEventListener("click", function(e) {
            if (e.target == flex) {
                modal.style.display = 'none';
            }
        });
        //cierre foreach
    });
    //cierre de funcion crear tarjetas
}
//--------------------INFORMACION----------------------------------
butnInfo.addEventListener("click", () => {
        document.getElementById("pokeBox").innerHTML = "";
        containerFather.innerHTML += `<h1>Información</h1>
        <p>PokeMe</p>`
    })
    //----------------POKEDEX DE KANTO---------------------------
    // mostar data completa a traves del boton POKEDEX
buttonFindMe.addEventListener("click", () => {
    document.getElementById("pokeBox").innerHTML = "";
    //llamo a funcion tarjetas y muestra todos los pokemones
    cardsPokemonGo(allPokeData);
});
//----------------POKEMON COMUNES------------------------------
//asigno evento al boton e imprimo data filtrada POKEMON COMUNES
buttonPokeComm.addEventListener("click", () => {
    document.getElementById("divButton2").innerHTML = "";
    //document.getElementById("pokeBox").innerHTML = "";
    //llamo a la funcion tarjetas e imprimo solo la data filtrada
    cardsPokemonGo(printPokeComm);
});
//----------------POKEMON RAROS-------------------------------------
//asigno evento al boton e imprimo data filtrada POKEMON RAROS
buttonPokeRare.addEventListener("click", () => {
    document.getElementById("divButton1").innerHTML = "";
    //llamo a la funcion tarjetas e imprimo solo la data filtrada
    cardsPokemonGo(printPokeRare);
});

//asigno evento al boton e imprimo data filtrada poke por numeros
buttonNum.addEventListener("click", () => {
    document.getElementById("pokeBox").innerHTML = "";
    //llamo a la funcion tarjetas e imprimo solo la data filtrada
    cardsPokemonGo(printPokeNum);
});

//-----------------SELECT TIPO--------------------------------
const selectTypePoke = document.getElementById("typePoke");
selectTypePoke.addEventListener("change", () => {
    let pokeType = document.getElementById("typePoke").value;
    let printPokeType = window.data.pokeFilterType(allPokeData, pokeType);
    document.getElementById("principal").innerHTML = "";
    cardsPokemonGo(printPokeType);
});

//------------------ORDENAR--------------------------------
//asignar valor de select a una variable
const sortPokemon = document.getElementById("sortPoke");
//funcion ordenar y anidarlo a select
sortPokemon.addEventListener("change", showOrdenPoke);
document.getElementById("principal").innerHTML = "";

function showOrdenPoke() {
    // asignamos valor de la opcion que se escoje en seletc
    let selectedOrder = sortPokemon.options[sortPokemon.selectedIndex].value;
    let pokeType = document.getElementById("typePoke").value;
    let datapokeFilter = window.data.pokeFilterType(allPokeData, pokeType);
    // asigno funcion order de data a una variable para mostrar
    let datapokemones = window.data.sortPoke(datapokeFilter, selectedOrder);
    document.getElementById("principal").innerHTML = "";
    cardsPokemonGo(datapokemones);
}
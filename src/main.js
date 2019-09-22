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
                                        <p>Hora ${element.spawn_time}</p>`
            //------------Creacion de MODAL-----------------------
            //creamos etiqueta <a> para abrir modal a cada tarjeta
        let createAmodal = document.createElement("a");
        createMiniPokeCars.appendChild(createAmodal);
        createAmodal.className = "classDivMiniCard";
        createAmodal.setAttribute("id", "abrir");
        createAmodal.setAttribute("href", "#modal");
        let textoA = document.createTextNode("Mas...");
        createAmodal.appendChild(textoA);
        //varios div para creacion y funcionamiento de modal
        let createDivModal = document.createElement("div");
        contPadre.appendChild(createDivModal);
        createDivModal.className = "modal";
        createDivModal.setAttribute("id", "miModal");
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
        createDivBody.innerHTML += `<img src = ${element.img}>
                                    <p>Numero ${element.id}</p>
                                    <p>Caramelos ${element.candy_count}</p>
                                    <p>Tipo: ${element.type}</p>
                                    <p>Spawn ${element.avg_spawns}</p>
                                    <p>Hora ${element.spawn_time}</p>
                                    <p>Debilidades: ${element.weaknesses}</p>`
        let createDivFooter = document.createElement("div");
        createDivContenido.appendChild(createDivFooter);
        createDivFooter.className = "footer";
        createDivFooter.setAttribute("id", "footerMod");
        createDivFooter.innerHTML += `<h2>Creado por Marielys y Sylvia</h2>`

        //cierre foreach
    });
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
    //cierre de funcion crear tarjetas
}

// mostar data completa a traves del boton POKEDEX DE KANTO
buttonFindMe.addEventListener("click", () => {
    document.getElementById("pokeBox").innerHTML = "";
    //llamo a funcion tarjetas y muestra todos los pokemones
    cardsPokemonGo(allPokeData);
});

//asigno evento al boton e imprimo data filtrada POKEMON COMUNES
buttonPokeComm.addEventListener("click", () => {
    document.getElementById("divButton2").innerHTML = "";
    //llamo a la funcion tarjetas e imprimo solo la data filtrada
    cardsPokemonGo(printPokeComm);
});

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

//--------------Ordenar--------------------------------
//asignar valor de select a una variable
const sortPokemon = document.getElementById("sortPoke");
//funcion ordenar y anidarlo a select
sortPokemon.addEventListener("change", showOrdenPoke);
document.getElementById("principal").innerHTML = "";

function showOrdenPoke() {
    // asignamos valor de la opcion que se escoje en seletc
    let selectedOrder = sortPokemon.options[sortPokemon.selectedIndex].value;
    // asigno funcion order de data a una variable para mostrar
    let datapokemones = window.data.sortPoke(allPokeData, selectedOrder);
    document.getElementById("principal").innerHTML = "";
    cardsPokemonGo(datapokemones);
}

//--------------Filtro por Tipo--------------------------------
const selectTypePoke = document.getElementById("typePoke");
selectTypePoke.addEventListener("change", () => {
    let pokeType = document.getElementById("typePoke").value
    let printPokeType = window.data.pokeFilterType(allPokeData, pokeType);
    document.getElementById("principal").innerHTML = "";
    cardsPokemonGo(printPokeType);
});

/*//mostrar nombres de pokemon
buttonName.addEventListener("click", () => {
    document.getElementById("pokeBox").innerHTML = "";
    //creo funcion para llamar nueva data mostrada por name
    allPokeData.forEach(element => {
        const contName = document.getElementById("principal");
        contName.innerHTML += `<h3>${element.name}</h3>
        <h3>${element.num}</h3>`
    });;


});*/
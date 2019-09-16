//funcion filtrar
window.data = {
    //calculo de media para filtrar comunes y raros
    pokeMedia: (allPokeData) => {

        //convierte un array de objetos en un array numerico
        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
        let acumAvgSpawns = 0;
        //para llenar el array con los numeros del nuevo array
        for (let i = 0; i < avgSpawns.length; i++) {
            acumAvgSpawns += avgSpawns[i];
        }
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        //console.log(mediaPoke);
        return mediaPoke;
    },

    //Funcion Filtrar Pokemones Comunes
    filterPokeCommon: (allPokeData, mediaPoke) => {
        let filterPoke;
        const resultFilterCommons = allPokeData.filter(elementObject => {
            filterPoke = elementObject.avg_spawns > mediaPoke;
            return filterPoke;
        });
        return resultFilterCommons; //nuevo arreglo de pokemones mayor a la media
    },

    //Funcion Filtrar Pokemones Raros
    filterPokeRare: (allPokeData, mediaPoke) => {
        let filterPoke;
        const resultFilterRare = allPokeData.filter(elementObject => {
            filterPoke = elementObject.avg_spawns < mediaPoke;
            return filterPoke;
        });
        return resultFilterRare; //nuevo arreglo de pokemones menor a la media
    },

    //Funcion Ordenar
    sortPoke: (allPokeData, sortPokemon) => {
        let sortPoke;
        if (sortPokemon === "name") {
            sortPoke = allPokeData.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        } else if (sortPokemon === "spawn_chance") {
            sortPoke = allPokeData.sort((a, b) => {
                return (a.spawn_chance - b.spawn_chance);
            })
        }
        return sortPoke;
    },

};
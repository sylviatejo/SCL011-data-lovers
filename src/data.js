//funcion filtrar
window.data = {
    //calculo de media para condicion de filtrar comunes y raros

    pokeMedia: (allPokeData) => {
        //convierte un array de objetos en un array numerico
        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
        const acumAvgSpawns = avgSpawns.reduce((acum, elemt) => acum + elemt, 0)
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        return mediaPoke;
    },

    //Funcion Filtrar Pokemones Comunes
    filterPokeCommon: (allPokeData, mediaPoke) => {
        let filterPoke;
        const resultFilterCommons = allPokeData.filter(elementObject => {
            filterPoke = elementObject.avg_spawns >= mediaPoke;
            return filterPoke;
        });
        return resultFilterCommons; //nuevo arreglo de pokemones mayor a la media
    },

    //Funcion Filtrar Pokemones Raros
    filterPokeRare: (allPokeData, mediaPoke) => {
        let filterPoke;
        const resultFilterRare = allPokeData.filter(elementObject => {
            filterPoke = elementObject.avg_spawns <= mediaPoke;
            return filterPoke;
        });
        return resultFilterRare; //nuevo arreglo de pokemones menor a la media
    },

    //Funcion Ordenar todo
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
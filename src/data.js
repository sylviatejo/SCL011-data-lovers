window.data = {
    //calculo de media para condicion de filtrar comunes y raros
    pokeMedia: (allPokeData) => {
        //convierte un array de objetos en un array numerico
        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
            //Suma todos los elementos del arreglo numerico de map
        const acumAvgSpawns = avgSpawns.reduce((acum, elemt) => acum + elemt, 0)
            //Para saber el promedio o media se divide la sumatoria entre el tamaño del array
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        return mediaPoke;
    },

    //Funcion Filtrar Pokemones Comunes
    filterPokeCommon: (allPokeData, mediaPoke) => {
        const resultFilterCommons = allPokeData.filter(elementObject => {
            let filterPoke = elementObject.avg_spawns >= mediaPoke;
            return filterPoke;
        });
        return resultFilterCommons; //nuevo arreglo de pokemones mayor a la media
    },

    //Funcion Filtrar Pokemones Raros
    filterPokeRare: (allPokeData, mediaPoke) => {
        const resultFilterRare = allPokeData.filter(elementObject => {
            let filterPoke = elementObject.avg_spawns <= mediaPoke;
            return filterPoke;
        });
        return resultFilterRare; //nuevo arreglo de pokemones menor a la media
    },

    //Funcion filtrar por numero
    filterNumber: (allPokeData) => {
        const filterPokeNum = allPokeData.filter(elementObject => {
            let filterNum = elementObject.id;
            return filterNum;
        });
        return filterPokeNum;
    },

    //Funcion filtrar por Type
    pokeFilterType: (allPokeData, pokeType) => {
        const filterPokeType = allPokeData.filter(element => {
            return element.type.includes(pokeType)
        });
        return filterPokeType;
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
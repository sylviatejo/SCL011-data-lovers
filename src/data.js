/* Manejo de data */

//funcion filtrar
window.data = {
    //calculo de media para filtrar comunes y raros
    pokeMedia: (allPokeData) => {
        //console.log(allPokeData);

        //convierte un array de objetos en un array numerico
        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
            //console.log(avgSpawns);
        let acumAvgSpawns = 0;
        //para llenar el array con los numeros del nuevo array
        for (let i = 0; i < avgSpawns.length; i++) {
            acumAvgSpawns += avgSpawns[i];
        }
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        //console.log(mediaPoke);
        return mediaPoke;

    },



    filterPokeCommon: (allPokeData, mediaPoke) => {

        const resultFilterCommons = allPokeData.filter(elementObject => {
            return filterPoke = elementObject.avg_spawns > mediaPoke;
            //console.log(filterPoke);

        });
        return resultFilterCommons; //nuevo arreglo de pokemones mayor a la media
    },

    filterPokeRare: (allPokeData, mediaPoke) => {

        const resultFilterRare = allPokeData.filter(elementObject => {
            return filterPoke = elementObject.avg_spawns < mediaPoke;
            //console.log(filterPoke);

        });
        //console.log(resultFilterCommons);

        return resultFilterRare; //nuevo arreglo de pokemones menor a la media
    },






    sortPokemon: (resultFilterCommons, sortPoke) => {
        if (sortPoke === 'name') {
            const sortPokemones1 = resultFilterCommons.sort((a, b) => {
                return (a.name < b.name) ? -1 : 1
            })
            return sortPokemones1;
        }



        /*
       const sortPokemones1 = resultFilterCommons.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

        });
        console.log(sortPokemones1);
    }*/

    }
};
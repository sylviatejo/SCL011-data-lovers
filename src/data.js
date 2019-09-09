/* Manejo de data */

//funcion filtrar
window.filterPoke = {


    filterPokeCommon: (allPokeData) => {
        //console.log(allPokeData);

        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
            //console.log(avgSpawns);
        let acumAvgSpawns = 0;
        for (let i = 0; i < avgSpawns.length; i++) {
            acumAvgSpawns += avgSpawns[i];
        }
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        console.log(mediaPoke);

        const resultFilterCommons = allPokeData.filter(elementObject => {
            return filterPoke = elementObject.avg_spawns > mediaPoke;
            //console.log(filterPoke);

        });
        console.log(resultFilterCommons);

        return resultFilterCommons; //nuevo arreglo de pokemones mayor a al promedio con todos sus objetos

    }

};

//Hola soy comentario
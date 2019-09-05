/* Manejo de data */

//funcion filtrar
window.filterPoke = {

    filterPokeCommon: (allPokeData) => {
        //console.log(allPokeData);
        const resultFilterCommons = allPokeData.filter(elementObject => {
            return elementObject.avg_spawns > 50;

        });
        console.log(resultFilterCommons);

        return resultFilterCommons; //nuevo arreglo de 41 pokemones con todos sus objetos

    }

};
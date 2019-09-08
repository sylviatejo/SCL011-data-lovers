/* Manejo de data */

//funcion filtrar
window.filterPoke = {

    filterPokeCommon: (allPokeData) => {
        let result = 0;
        let acumAvg_spawns;
        console.log(allPokeData);
        allPokeData.forEach(element => {

            //Number.parseInt(document.getElementById("offset").value);
            acumAvg_spawns = (`${element.avg_spawns}`);
            console.log(acumAvg_spawns);

        });
        result = result + acumAvg_spawns;
        console.log(result);

        const resultFilterCommons = allPokeData.filter(elementObject => {
            return elementObject.avg_spawns > 50;

        });
        console.log(resultFilterCommons);

        return resultFilterCommons; //nuevo arreglo de 41 pokemones con todos sus objetos

    }

};
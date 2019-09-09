/* Manejo de data */

//funcion filtrar
window.data = {


    filterPokeCommon: (allPokeData) => {
        console.log(allPokeData);

        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
            //console.log(avgSpawns);
        let acumAvgSpawns = 0;
        for (let i = 0; i < avgSpawns.length; i++) {
            acumAvgSpawns += avgSpawns[i];
        }
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        //console.log(mediaPoke);

        const resultFilterCommons = allPokeData.filter(elementObject => {
            return filterPoke = elementObject.avg_spawns > mediaPoke;
            //console.log(filterPoke);

        });


        return resultFilterCommons; //nuevo arreglo de pokemones mayor a al promedio con todos sus objetos

    },

    filterPokeRare: (allPokeData) => {
        //console.log(allPokeData);

        const avgSpawns = allPokeData.map(elementAvg => elementAvg.avg_spawns)
            //console.log(avgSpawns);
        let acumAvgSpawns = 0;
        for (let i = 0; i < avgSpawns.length; i++) {
            acumAvgSpawns += avgSpawns[i];
        }
        let mediaPoke = acumAvgSpawns / avgSpawns.length;
        //console.log(mediaPoke);

        const resultFilterRare = allPokeData.filter(elementObject => {
            return filterPoke = elementObject.avg_spawns < mediaPoke;
            //console.log(filterPoke);

        });
        //console.log(resultFilterCommons);

        return resultFilterRare; //nuevo arreglo de pokemones mayor a al promedio con todos sus objetos

    },


    /*---var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 }
    ];
    items.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });  ---*/


    sortFilterPokeCommon: () => {
        document.getElementById("principal").innerHTML = "hola";
    }

};
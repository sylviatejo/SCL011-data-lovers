global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data');
require('./data.spec.js');

describe('filterPokeCommon', () => {
    const sampleCommon = [{
            "name": "Poliwag",
            "avg_spawns": 219,
        },
        {
            "name": "Eevee",
            "avg_spawns": 275,
        },
        {
            "name": "Oddish",
            "avg_spawns": 102,
        },
    ]

    describe('filterPokeCommon', () => {
        it('debería ser una función', () => {
            assert.equal(typeof window.data.filterPokeCommon, 'function');
        });

        it('debería retornar objeto "Eevee" para filtro "275 avg_spawns"', () => {
            assert.deepEqual(window.data.filterPokeCommon(sampleCommon, '275'), [{ "name": "Eevee", "avg_spawns": 275 }]);
        });
    })
})

describe('filterPokeRare', () => {
    const sampleRare = [{
            "name": "Mew",
            "avg_spawns": 0,
        },
        {
            "name": "Lapras",
            "avg_spawns": 0.6,
        },
        {
            "name": "Dewgong",
            "avg_spawns": 1.3,
        },
    ]

    describe('filterPokeRare', () => {
        it('debería ser una función', () => {
            assert.equal(typeof window.data.filterPokeRare, 'function');
        });

        it('debería retornar objeto "Mew" para filtro "avg_spawns": 0', () => {
          assert.deepEqual(window.data.filterPokeRare(sampleRare, '0'), [{"name": "Mew", "avg_spawns": 0}]);
      })
    })

    describe('sortPoke', () =>{
      const sampleOrderName = [
        {
          "name": "Charmander"
        },
        {
          "name": "Vulpix"
        },
        {
          "name": "Arcanine"
        }
      ];
      it('debería ser uan función',() =>{
        assert.equal(typeof window.data.sortPoke, 'function');
      });

      it('debería retornar el objeto "Arcanine", "Charmander", "Vulpix" al ordenar por ABC', () => {
        assert.deepEqual(window.data.sortPoke(sampleOrderName,"ABC"), [{"name": "Arcanine"},{"name": "Charmander"},{"name": "Vulpix"}]);

      });
    })
            assert.deepEqual(window.data.filterPokeRare(sampleRare, '0'), [{ "name": "Mew", "avg_spawns": 0 }]);
        })
    })
})


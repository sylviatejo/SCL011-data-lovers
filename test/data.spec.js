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
    ];

    describe('filterPokeRare', () => {
        it('debería ser una función', () => {
            assert.equal(typeof window.data.filterPokeRare, 'function');
        });

        it('debería retornar objeto "Mew" para filtro "avg_spawns": 0', () => {
            assert.deepEqual(window.data.filterPokeRare(sampleRare, '0'), [{ "name": "Mew", "avg_spawns": 0 }]);
        })
    })

    describe('sortPoke', () => {
        const sampleOrderName = [{
                "name": "Charmander"
            },
            {
                "name": "Vulpix"
            },
            {
                "name": "Arcanine"
            }
        ];

        it('debería ser una función', () => {
            assert.equal(typeof window.data.sortPoke, 'function');
        });

        it('debería retornar el objeto "Arcanine", "Charmander", "Vulpix" al ordenar por "name"', () => {
            assert.deepEqual(window.data.sortPoke(sampleOrderName, "name"), [{ "name": "Arcanine" }, { "name": "Charmander" }, { "name": "Vulpix" }]);

        });
    })
})

describe('sortPoke', () => {
    const sampleOrderNumber = [{
            "name": "Rapidash",
            "spawn_chance": 0.011,
        },
        {
            "name": "Seel",
            "spawn_chance": 0.28,
        },
        {
            "name": "Gastly",
            "spawn_chance": 0.79,
        }
    ];

    it('debería ser una función', () => {
        assert.equal(typeof window.data.sortPoke, 'function');
    });

    it('debería rertornar el objeto "Rapidash", "Seel", "Gastly" al ordenar por "spawn_chance"', () => {
        assert.deepEqual(window.data.sortPoke(sampleOrderNumber, "spawn_chance"), [{ "name": "Rapidash", "spawn_chance": 0.011, }, { "name": "Seel", "spawn_chance": 0.28, }, { "name": "Gastly", "spawn_chance": 0.79, }]);
    });
})

//test de calculo promedio o media

describe('pokeMedia', () => {
    const samplePokeProm = [{

            "avg_spawns": 219,
        },
        {

            "avg_spawns": 275,
        },
        {

            "avg_spawns": 102,
        },
    ];

    describe('pokeMedia', () => {
        it('debería ser una función', () => {
            assert.equal(typeof window.data.pokeMedia, 'function');
        });

        it('debería retornar 198.66666666666666', () => {
            assert.deepEqual(window.data.pokeMedia(samplePokeProm), 198.66666666666666);
        });
    });
});


//test filtrado por tipo
describe('pokeFilterType', () => {
    const samplePokeFilter = [{
            "name": "Nidoran ♂",
            "type": ["Poison"]
        },
        {
            "name": "Psyduck",
            "type": ["Water"]
        },


    ]
    describe('pokeFilterType', () => {

        it('debería ser una función', () => {
            assert.equal(typeof window.data.pokeFilterType, 'function');
        });


        it('debería retornar objeto "Psyduck" para filtro Water" ', () => {
            assert.deepEqual(window.data.pokeFilterType(samplePokeFilter, 'Water'), [{ "name": "Psyduck", "type": ["Water"] }]);
        });

    })
})
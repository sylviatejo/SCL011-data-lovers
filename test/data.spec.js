global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe(data.filterPokeCommon, ()=>{
  const sampleCommon = [
    {
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

describe('data.filterPokeCommon', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterPokeCommon, 'function');
  });
  
  it('debería retornar objeto "Poliwag" para filtro "avg_spawns": 219', () => { assert.deepEqual(window.filterPokeCommon(sampleCommon),[{"name": "Poliwag", "avg_spawns": 219}]);
  });
})
})

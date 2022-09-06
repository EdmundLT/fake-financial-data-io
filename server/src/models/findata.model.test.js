const { getRandomFloat } = require("./findata.model");

describe('Unit Testing function getRandomFloat(base)', () => { 
    test('should return a float number bigger than base and smaller than base + 20', () => { 
        const base = 100;
        const res = getRandomFloat(base)
        console.log(res)
         expect(res >= base && res <= 120).toBe(true)
     })
 })

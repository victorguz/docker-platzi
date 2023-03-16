const { tick } = require("../../tasks/tick");

describe('tick test', () => {
    

    test('should execute the process 2 times', () => {
        tick();
        const times = tick()
        console.log("se llamó " + times + " veces")
        
        expect(times).toBe(2)
    });
});
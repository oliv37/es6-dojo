// TODO : Importer le fichier math-legacy présent dans src-legacy/math.js pour faire passer les 2 premiers tests
/* A enlever */
import '../src-legacy/math.js';
// TODO : Importer les fonctions présentes dans src/math.js pour faire passer les 3 derniers tests
/* A enlever */
import sayHello from '../src/math.js';
import {add as addWith3Params, substract} from '../src/math.js';

describe('Import ES6', function() {
    
    it('legacy add function', function() {
        expect(add(2, 2)).toBe(4);
    });
    
    it('legacy multiply function', function() {
        expect(multiply(5, 4)).toBe(20);
    });

    it('add function with 3 params', function() {
        expect(addWith3Params(2, 2, 5)).toBe(9);
    });

    it('substract function', function() {
        expect(substract(3, 2)).toBe(1);
    });
    
    it('sayHello', function() {
        expect(sayHello()).toBe('Hello from math.js');
    });
});
import { add } from '../src/math.js'; 

describe('Spread Rest', function() {

    it('spread examples', function() {
        // A enlever
        since('error').expect([1, ...[2, 3], 4]).toEqual([1, 2, 3, 4]);
        since('error').expect(Math.max(1, ...[5, 10], 8, 3)).toBe(10);
    });
    
    it('spread array', function() {
        const arr1 = ['john', 'jack', 'jim'];
        const arr2 = ['sandy', 'mary'];
        const arr3 = ['paul'];

        // A enlever
        const all = [...arr1, ...arr2, ...arr3];
        
        expect(all).toEqual(['john', 'jack', 'jim', 'sandy', 'mary', 'paul']);
    });

    it('spread function call', function() {
        const numbers = [4, 3, 10, 4, 2, 1];

        // A enlever
        const min = Math.min(...numbers);

        expect(min).toBe(1);
    });

    it('spread object', function() {
        const p1 = {
            name: 'john',
            age: 10,
            address: {
                town: 'paris',
                zip: '75002'
            },
            enabled: true
        };

        // A enlever
        const p2 = {...p1, enabled: false};

        expect(p2).not.toBe(p1);
        expect(p2.address).toBe(p1.address);
        expect(p2.name).toBe('john');
        expect(p2.age).toBe(10);
        expect(p2.enabled).toBe(false);
    });

    it('rest array', function() {
        // TODO : réécrire la fonction add dans 'math.js' pour accepter un nombre illimité d'arguments

        expect(add(1, 2 ,3, 4)).toBe(10);
        expect(add(1, 1, 1, 1, 1, 1, 1, 1)).toBe(8);
        expect(add(3, 7)).toBe(10);
    });

    it('rest function parameters', function() {
        const [a, ...rest] = [1, 2, 3, 4, 5];

        // A enlever
        expect(a).toBe(1);
        expect(rest).toEqual([2, 3, 4, 5]);
    });

    it('rest join', function() {
        // A enlever
        function join(delimiter, ...args) {
            return args.join(delimiter);
        }

        expect(join('-', 1, 2, 4)).toBe('1-2-4');
        expect(join(',', 'john', 'mike', 'richard')).toEqual('john,mike,richard');
    });

    it('rest object', function() {
        const p1 = {
            name: 'john',
            age: 10,
            address: {
                town: 'paris',
                zip: '75002'
            },
            enabled: true
        };

        // A enlever
        const {address, ...p1WithoutAddress} = p1;

        expect(p1WithoutAddress).toEqual({name: 'john', age: 10, enabled: true});
        expect(address).toBe(p1.address);
    });

});
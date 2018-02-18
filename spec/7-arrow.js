// Ne plus utiliser le mot-clé function

describe('Arrow function', () => {

    it('typeof', () => {
        const mult = (x, y) => x * y;
        
        // TODO : à enlever
        since('error').expect(typeof mult).toBe('function');
    });

    it('map reduce', () => {
        const inputs = ["Hello", "arrow", "functions"];

        // TODO : A enlever
        const str = inputs.map(s => s.charAt(0))
                          .reduce((acc, current) => acc + current, '');

        expect(str).toBe('Haf');
    });

    it('function declaration', () => {
        // TODO : à compléter
        const add2 = nb => nb + 2;
        const isOdd = nb => nb % 2; 
        const transform = (arr, filterFn, mapFn) => arr.filter(filterFn).map(mapFn);

        expect(add2(4)).toBe(6);
        expect(add2(7)).toBe(9);
        expect(isOdd(1)).toBeTruthy();
        expect(isOdd(9)).toBeTruthy();
        expect(isOdd(2)).toBeFalsy();
        expect(transform([1, 4, 7], isOdd, add2)).toEqual([3, 9]);
    });

    it('literal object', () => {
        // TODO : à compléter
        const func = () => ({a: 2});

        expect(func()).toEqual({a: 2});
    });

    it('multi lines', () => {
        const func = (a, b) => {
            if (a > b) {
              return a;
            } else {
              return b;
            }
        };

        // TODO : réécrire func en une seule instruction (sans les crochets)
        const func2 = (a, b) => a > b ? a : b;

        expect(func(2, 3)).toBe(3);
        expect(func2(2, 3)).toBe(3);
        
        expect(func(4, 4)).toBe(4);
        expect(func2(4, 4)).toBe(4);
    })

    it('destructuring', () => {
        // TODO : à compléter
        const func = ({a, b}) => a + b;

        var foo = {a: 1, b: 3};
        var bar = {a: 7, b: 2};
        
        expect(func(foo)).toBe(4);
        expect(func(bar)).toBe(9);
    });

    it('rest', () => {
        // TODO : à compléter
        const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

        expect(sum(1, 2, 5, 8)).toBe(16);
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, 1, 1, 2, 6)).toBe(11);
    });

    it('closure', () => {
        // TODO : compléter la fonction makeAdd qui doit retourner une fonction
        const makeAdd = (nb1) => (nb2 = 0) => nb1 + nb2;

        const add2 = makeAdd(2);
        const add5 = makeAdd(5);

        expect(add2(4)).toBe(6);
        expect(add2(5)).toBe(7);
        expect(add2()).toBe(2);

        expect(add5(4)).toBe(9);
        expect(add5(1)).toBe(6);
        expect(add5()).toBe(5);
    });

    it('This - Object- 1', function() {
        var obj = {
            a: 3,
            func: function() {
                function getThis() {
                    return this;
                }

                return getThis();
            }
        };

        // A enlever
        since('error').expect(obj === obj.func()).toBeFalsy();
    });

    it('This - Object - 2', function() {
        var obj = {
            a: 3,
            func: function() {
                const getThis = () => this;
                return getThis();
            },
            func2: function() {
                const add2 = () => this.a + 2;
                return add2();
            },
            func3() { return this.a },
            func4: () => {
                return this.a;
            }
        };

        // A enlever
        since('error').expect(obj === obj.func()).toBeTruthy();
        since('error').expect(obj.func2()).toBe(5);
        since('error').expect(obj.func3()).toBe(3);
        since('error').expect(obj.func4()).toBe(undefined);
    });


});
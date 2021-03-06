describe('Destructuring ES6', function() {
    
    it('destructuring array', function() {
        const iterable = ['john', 'jack', 'jim'];

        // const ... = ...;
        const [john,,jim] = iterable;
        
        expect(john).toBe('john');
        expect(jim).toBe('jim');
    });

    it('destructuring object', function() {
        const rectangle = {
            x: 0,
            y: 0,
            width: 10,
            height: 3,
        };

        /* const ... = ...; */
        const {width, height} = rectangle;
        
        expect(width).toBe(10);
        expect(height).toBe(3);
    });

    it('destructuring object in function argument', function() {
        const obj = {
            name: 'Jim',
            age: 20
        };

        /* */
        function toString({name, age}) {
            return `${name} is ${age}`;
        }

        expect(toString(obj)).toBe('Jim is 20');
    });

    it('destructuring array with default values', function() {
        /* */
        function sumFirstTwoValues([firstValue = 0, secondValue = 0]) {
            return firstValue + secondValue;
        }

        expect(sumFirstTwoValues([])).toBe(0);
        expect(sumFirstTwoValues([3])).toBe(3);
        expect(sumFirstTwoValues([3, 4])).toBe(7);
        expect(sumFirstTwoValues([6, 2, 5])).toBe(8);

        const [{ prop: x } = { prop: 123 }] = [];
    });

    it('destructuring string', function() {
        // const [firstLetter] = 'abc'; 
        const [firstLetter] = 'abc';

        expect(firstLetter).toBe('a');
    });

    it('destructuring with reference', function() {
        /* */
        function sumWithSpecialBehavior([x = 0, y = x]) {
            return x + y;
        }

        expect(sumWithSpecialBehavior([])).toBe(0);
        expect(sumWithSpecialBehavior([0])).toBe(0);
        expect(sumWithSpecialBehavior([1])).toBe(2);
        expect(sumWithSpecialBehavior([2])).toBe(4);
        expect(sumWithSpecialBehavior([6, 3])).toBe(9);
    });

    it('destructuring with default values (difficult)', function() {
        /* */
        function getNameOfFirstPerson([{name = ''} = {name: ''}]) {
            return name;
        }

        expect(getNameOfFirstPerson([])).toBe('');
        expect(getNameOfFirstPerson([{}])).toBe('');
        expect(getNameOfFirstPerson([{name: 'john'}])).toBe('john');
        expect(getNameOfFirstPerson([{name: 'john'}, {name: 'jim'}])).toBe('john');
    });

});
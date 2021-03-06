var global = this;

describe('This', function() {

    it('With window', function() {
        var obj = {
            getThis: function() {
                return this;
            }
        }

        function func() {
            return this;
        }

        // A enlever
        since('error').expect(global === window).toBeTruthy();
        since('error').expect(obj.getThis() === window).toBeFalsy();
        since('error').expect(func() === window).toBeTruthy();
    });

    it('This - Object', function() {
        function getA() {
            return this.a;
        }

        var obj = {
            a: 3,
            myMethod: function() {
                return getA();
            },
            getA: function() {
                return this.a;
            },
            get propA() {
                return this.a;
            }
        }

        // A enlever
        since('error').expect(obj.myMethod()).toBe(undefined);
        since('error').expect(obj.getA()).toBe(3);
        since('error').expect(obj.propA).toBe(3);
    });

    it('This - Call', function() {
        function fun(n) {
            this.a = 7;
            this.b = 4;
            this.c = n;
        }

        var obj = { a: 3 };

        // TODO : modifier la ligne suivante pour faire passer les tests (utiliser la fonction call)
        fun.call(obj, 10);

        since('error').expect(obj.a).toBe(7);
        since('error').expect(obj.b).toBe(4);
        since('error').expect(obj.c).toBe(10);
    });

    it('This - Bind', function() {
        window.a = 6;

        function addValueToA(b) {
            return this.a + b;
        }

        var obj = { a: 3 }

        var func1 = addValueToA.bind(obj);
        var func2 = addValueToA.bind(obj, 7);

        // A enlever
        since('error').expect(addValueToA(3)).toBe(9);
        since('error').expect(func1(3)).toBe(6);
        since('error').expect(func2()).toBe(10);
        since('error').expect(func2(5)).toBe(10);

        window.a = undefined;
    });
    
});
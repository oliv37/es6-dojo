describe('other', () => {
    
        it('template string', () => {
            const name = 'JACK';
            const age = 20; 

            // TODO : enlever
            const str = `${name.toLocaleLowerCase()} is ${age + 2} years old`;

            expect(str).toBe('jack is 22 years old');
        });

        it('map reduce', () => {
            // TODO : écrire une fonction fn qui doit prendre un nombre indéterminé de chaînes de caractères
            // en entrée, qui extrait la première lettre de chacune d'elles et qui retourne la concaténation
            // de ces lettres
            
            const fn = (...inputs) => 
                inputs.map(s => s[0]).reduce((acc, current) => acc + current, '');

            expect(fn()).toBe('');
            expect(fn('Zuul')).toBe('Z');
            expect(fn("Hello", "arrow", "functions")).toBe('Haf');
            expect(fn("foo", "bar", "jim", "paul")).toBe('fbjp');
        });

        it('average', () => {
            // TODO : compléter la fonction average qui accepte un nombre indéterminé de chiffre 
            // en entrée et qui retourne la moyenne, la fonction retourne 0 s'il n'y a aucun paramètres

            function average(...numbers) {
                const sum = numbers.reduce((acc, val) => acc + val, 0);
                return sum / numbers.length;
            }

            expect(average()).toBeNaN();
            expect(average(4)).toBe(4);
            expect(average(4, 6, 11)).toBe(7);
            expect(average(1, 2, 5, 2)).toBe(2.5);
        });

        it('count words', () => {
            // TODO : écrire une fonction countWords qui prend en paramètre un tableau de chaînes de caractères
            // la fonction doit retourner un objet qui contient le nombre de d'occurences de chaque mot.
            function countwords(inputWords) {
                return inputWords.reduce(function(obj, word) {
                    obj[word] = obj[word] + 1 || 1;
                    return obj;
                }, {});
            }

            expect(countwords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'])).toEqual({
                Apple: 2,
                Banana: 1,
                Durian: 3
            });
        })

        /*
        it('short messages', () => {
            function getShortMessages(objs) {
                return objs.map(function (obj) {
                    return obj.message;
                }).filter(function (message) {
                    return message.length < 50;
                });
            }
        });
        */

        it('bind', () => {
            function add(a, b) {
                return a + b;
            }

            // TODO : utiliser la fonction bind pour créer une fonction add2
            const add2 = add.bind(null, 2);

            expect(add2(0)).toBe(2);
            expect(add2(3)).toBe(5);
            expect(add2(5)).toBe(7);
        });

});
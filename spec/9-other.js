describe('class', () => {
    
        it('template string', () => {
            const name = 'JACK';
            const age = 20; 

            const str = `${name.toLocaleLowerCase()} is ${age + 2} years old`;

            expect(str).toBe('jack is 22 years old');
        });

});
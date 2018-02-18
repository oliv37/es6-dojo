describe('Const-Let ES6', function() {
    
    it('const object', function() {
        const obj = {
            a: 1,
            b: 2
        };

        // TODO : enlever un fail
        try {
            obj.a = 3;
            // fail();
        } catch (e) {
            fail();
        }

        // A enlever
        since('error').expect(obj.a).toBe(3);
    });

    it('if block with var', function() {
        if (true) {
            var toto = 'toto';
        }
        
        // A enlever
        since('error').expect(toto).toBe('toto');
    });

    it('if block with const', function() {
        if (true) {
            const toto = 'toto';
        }
        
        // TODO : enlever un fail
        try {
            expect(foo).toBe('toto');
            fail();
        } catch(e) {
            // fail();
        }
    });

    it('if block with let', function() {
        if (true) {
            let toto = 'toto';
        }
        
        // TODO : enlever un fail
        try {
            expect(toto).toBe('toto');
            fail();
        } catch(e) {
            // fail();
        }
    });

    it('for block with var', function() {
        for(var i of [1, 2 ,3]) {
            var j = i;
        }

        // A enlever
        since('').expect(i).toBe(3);
        since('').expect(j).toBe(3);
    });
    
    it('for block with let', function() {
        for(let i of [1, 2 ,3]) {}

        // TODO : enlever un fail
        try {
            expect(i).toBeDefined();
            fail();
        } catch(e) {
            // fail();
        }
    });

});
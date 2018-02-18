describe("2 - Equality", function () {

	it("Strings - single or double quote", function() {
		var a = 'REMPLIR';
		var b = "REMPLIR";

		expect(a).toBe('c\'est "beau" ?');
		expect(b).toBe('c\'est "beau" ?');
	});

	it("== vs ===", function () {
		var KO;

		var a = "",
			_ = '', // oui _ peut être une variable tout comme $ ;)
			b = '1',
			c = 1;

		// Utiliser les variables, n'en utiliser qu'une
		expect(1 == KO).toBeTruthy();
		expect("Toto" == KO).toBeTruthy();
		expect(1 === KO).toBeTruthy();
		expect(1 === KO).toBeFalsy();
	});

	it("True or False", function () {
		expect(true) // .toBeFalsy() .toBeTruthy()
		expect(false) // .toBeFalsy() .toBeTruthy()
		expect(!false) // .toBeFalsy() .toBeTruthy()
		expect(!true) // .toBeFalsy() .toBeTruthy()


		expect('false')//.toBeFalsy() .toBeTruthy()

		expect('true')//.toBeFalsy() .toBeTruthy()
		expect('')//.toBeFalsy() .toBeTruthy()
		expect('0')//.toBeFalsy() .toBeTruthy()
		expect('1') // .toBeFalsy() .toBeTruthy()
		expect(1) // .toBeFalsy() .toBeTruthy()
		expect(0) // .toBeFalsy() .toBeTruthy()
		expect(!1) // .toBeFalsy() .toBeTruthy()
		expect(!0) // .toBeFalsy() .toBeTruthy()
		expect(!!1) // .toBeFalsy() .toBeTruthy()
		expect(!!0) // .toBeFalsy() .toBeTruthy()

		expect({}) // .toBeFalsy() .toBeTruthy()
		expect([]) // .toBeFalsy() .toBeTruthy()

		var emptyVar;
		expect(emptyVar) // .toBeFalsy() .toBeTruthy()

		var emptyStr = '';
		expect(emptyVar) // .toBeFalsy() .toBeTruthy()

		var zeroVar = 0;
		expect(zeroVar) // .toBeFalsy() .toBeTruthy()


		expect("toto" == true) // .toBeFalsy() .toBeTruthy()

		fail('TODO');

		//BONUS
		expect(false + 1)//.toBe();
		expect(true + 1)//.toBe();
		expect(true % 1)//.toBe();

		var wtf = {
			counter: 0,
			valueOf: function () {
				return this.counter++;
			}
		}

		expect(wtf == 0 && wtf == 1 && wtf == 2)//.toBeTruthy() .toBeFalsy()

	});


	it("Evaluation Order", function () {
		var case1 = 'yes' || 'no';
		since('').expect(case1).toBe('');

		var case1 = 'yes' && 'no';
		since('').expect(case1).toBe('');

		function throwError() {
			throw 'OMG UNE ERREUR !';
		}

		//Supprimer un fail! 

		try {
			'yes' || throwError();
			fail('Fail');
		} catch (e) {
			fail('Fail');
		}

	});

	it("Evaluation Order - throw", function () {
		function throwError() {
			throw 'OMG UNE ERREUR !';
		}

		//Supprimer un fail pour faire passer le test
		try {
			'yes' && throwError();
			fail('Fail');
		} catch (e) {
			fail('Fail');
		}
	});

});

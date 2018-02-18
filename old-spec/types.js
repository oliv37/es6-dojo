describe("1 - Js Types", function () {
	it("String", function () {
		var string = "bob";

		since('KO').expect(typeof string).toBe();
		since('KO').expect(typeof "bob").toBe();
		since('KO').expect(typeof 'bob').toBe();
	});

	it("True of False", function () {
		since('KO').expect(typeof true).toBe('');
		since('KO').expect(typeof false).toBe('');
	});

	it("Numbers", function () {
		var number = 111;
		var floatNumber = 1.2;


		since('KO').expect(typeof number).toBe();
		since('KO').expect(typeof floatNumber).toBe();
	});

	it("Arrays", function () {
		var array = [];
		var array2 = new Array();
		since('KO').expect(typeof array).toBe();
		since('KO').expect(typeof array2).toBe();
	});

	it("Objects", function () {
		since('KO').expect(typeof {}).toBe();
		since('KO').expect(typeof new Object()).toBe();
	});

	it("Variables", function () {
		var array = [];
		var object = {};
		var nada;
		since('KO').expect(typeof array ).toBe();
		since('KO').expect(typeof object).toBe();
		since('KO').expect(typeof nada).toBe();
	});

	it("Mutations", function () {
		var myvar;
		since('KO').expect(typeof myvar).toBe();

		myvar = "toto";
		since('KO').expect(typeof myvar).toBe();

		myvar = 123;
		since('KO').expect(typeof myvar).toBe();
	});

	it("Null and undefined", function () {
		since('KO').expect(typeof null).toBe();

		since('KO').expect(typeof undefined).toBe();
	});
});

describe("3 - Functions", function () {
	it("fct1 - Global Function", function () {
		var result = fct1();
		since('fct1-KO-').expect(result).toBe('');
		since('fct1-KO-2').expect(fct1()).toBe('');
	});

	it("fct2 - Function in Variable", function () {
		var result = fct2();
		since('fct2-KO').expect(result).toBe('');
	});

	it("fct3 - Function in scope", function () {
		var result = fct3();
		since('fct3-KO').expect(result).toBe('');
		function fct3() {
			return 'good';
		}
	});
	

	it("fct4 - fct3 not visible", function () {
		var result = fct3();
		since('fct4-KO').expect(result).toBe('good');
	});

	it("fct5 - Correct order", function () {
		var result = fct5();
		var fct5 = function () {
			return 'good'
		};
		since('fct5-KO').expect(result).toBe('good');
	});

	it("JS Classes", function () {
		function chien(nom, prenom, age) {
			this.age = age;

			this.appeler = function () {
				return nom + " " + prenom;
			}
		}

		var pixel = new chien("deadpool","pixel");
		var unicorn = new chien("transilien","unicorn",5);

		since('KO').expect(pixel.appeler()).toBe();
		since('KO').expect(unicorn.appeler()).toBe();

		since('KO').expect(unicorn.nom).toBe();
		since('KO').expect(pixel.age).toBe();
		since('KO').expect(unicorn.age).toBe();
	});

});

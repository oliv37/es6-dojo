jasmine.getFixtures().fixturesPath = 'base/fixtures/';
describe("5 - jQuery", function () {
	beforeEach(function () {
		loadFixtures('test.html');
	});

	it("By ID", function () {
		since('KO').expect(jQuery('#main').length).toBe();
		since('KO').expect(jQuery('#main').size()).toBe();
		since('KO').expect(jQuery('#doubleId').length).toBe();
	});

	it("Find", function () {
		since('KO1').expect(jQuery('.par-1').length).toBe();
		since('KO2').expect(jQuery('#main .par-1').length).toBe();
		since('KO3').expect(jQuery('#container-1').find('.par-1').length).toBe();
	});

	it('Beware of object return', function() {
		function cas1() {
			return jQuery('#main').offset().top
		}

		function cas2() {
			return jQuery('#notPresent').offset().top
		}

		since().expect(cas1)// .not.toThrow()// .toThrow()
		since().expect(cas2)// .not.toThrow()// .toThrow()
	});
});

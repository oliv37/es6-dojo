describe("6 - Object & Arrays", function () {
	it("Objects", function () {
		var o = {
			a: 'ok'
		};
		o.b = 'a';

		since('KO1').expect(o.a).toBe();
		since('KO2').expect(o.b).toBe();
		since('KO3').expect(o['a']).toBe();
		since('KO4').expect(o[o.b]).toBe();
	});

	it("Arrays", function () {
		var a = [];
		a[10] = 'yes';

		since('KO1').expect(a.length).toBe();
		since('KO2').expect(a[10]).toBe();
		since('KO3').expect(a[4]).toBe();
		since('KO4').expect(a[15]).toBe();

		a.jsMaster = 'yes';
		since('KO5').expect(a['jsMaster']).toBe();

		a.length = 2;
		since('KO6').expect(a.length).toBe();
		since('KO7').expect(a['length']).toBe();
		since('KO8').expect(a[10]).toBe();
	});

	it("Sub Objects", function () {
		var o = {
			a: 'ok',
			sub: {
				bottom: 0,
				f: function() { return 'yes'; }
			}
		};
		since('KO').expect(o.sub.bottom).toBe();
		since('KO2').expect(o['sub']['f']()).toBe();
	});
});

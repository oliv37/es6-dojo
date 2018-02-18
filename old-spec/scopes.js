describe("4 - Scopes", function() {
	myScope = 'a';
	myScope1= 'u';
  it("Without var", function() {
	  since('').expect(myScope).toBe('');
	  myScope = 'b';
	  since('').expect(myScope).toBe('');
  });

  it("With var", function() {
	  var myVarScope = 'toto';
	  if (true) {
	  	var myIfVarScope = 'tutu';
	  }
	  since('').expect(myVarScope).toBe('');
	  since('').expect(myIfVarScope).toBe('');
  });

  it("With var2", function() {
	  since('').expect(myVarScope).toBe('');
  });

  it("In Function", function() {
  	  function inFunction() {
  	  	var inFuncScope = "what";
	  }
	  since('').expect(inFuncScope).toBe('');
  });

	it("In Closure", function() {
		function inFunction() {
			var counter = 0;
			return function(arg) {
				return arg + counter++;
			};
		}
		var myFunction = inFunction();
		since('').expect(myFunction(5)).toBe(0);
		since('').expect(myFunction(5)).toBe(0);
		since('').expect(myFunction(5)).toBe(0);
	});

	it("In Closure2", function() {
		function inFunction(counter) {
			return function(arg) {
				return arg + counter++;
			};
		}
		var myFunction = inFunction(2);
		since('').expect(myFunction(5)).toBe(0);
		since('').expect(myFunction(5)).toBe(0);
		since('').expect(myFunction(5)).toBe(0);
	});
});

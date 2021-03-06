
describe( "Item 18: Understanding the Difference between Function, Method, and Constructor Calls...", function() {
	it("callingFunctions() demonstrates why using 'this' in functions (as opposed to methods and constructors) should be avoided...", function() {
		expect(ch3.callingFunctions()).toBe(undefined);
	});
	it("callingMethods() should be fixed so it uses an appropriate receiver...", function() {
		expect(ch3.callingMethods()).toEqual("Bruce");
	});
	it("callingConstructors() should be fixed so it calls the constructor correctly...", function() {
		expect(ch3.callingConstructors()).toEqual("Bruce");
	});
});

describe( "Item 19: Get comfortable Using Higher-Order Functions...", function() {
	it("reverse() should return the array [5, 4, 3, 2, 1]...", function() {
		expect(ch3.reverse()).toEqual([5,4,3,2,1]);
	});
	it("square() should return the array [25, 4, 9, 1, 16]...", function() {
		expect(ch3.square()).toEqual([25,4,9,1,16]);
	});
});

describe( "Item 20: Use call to Call methods with a Custom Receiver...", function() {
	it("How can addEntryToObj be fixed so that obj.entries.length is equal 1...", function() {
		expect(ch3.entries.length).toBe(1);
	});
});

describe( "Item 21: Use apply to Call Functions with Different Numbers of Arguments...", function() {

});

describe( "Item 22: Use arguments to Create Variadic Functions...", function() {
	it("sumNumbers() should work no matter how many arguments it is sent...", function() {
		expect(ch3.sumNumbers()).toBe(0);
		expect(ch3.sumNumbers(1)).toBe(1);
		expect(ch3.sumNumbers(1,2,3)).toBe(6);
	});
});

describe( "Item 23: Never Modify the arguments Object...", function() {

});

describe( "Item 24: Use a Variable to Save a Reference to arguments...", function() {

});

describe( "Item 25: Use bind to Extract Methods with a Fixed Receiver...", function() {

});

describe( "Item 26: Use bind to Curry Functions...", function() {

});

describe( "Item 27: Prefer Closures to Strings for Encapsulating Code...", function() {

});

describe( "Item 28: Avoid Relying on the toString Method of Functions...", function() {

});

describe( "Item 29: Avoid Nonstandard Stack Inspection Properties...", function() {

});

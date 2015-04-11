
describe( "Item 8: Minimize Use of the Global Object...", function() {

	sum = "global";
	var returnLocalSum = function() {
		var sum;
		return sum;
	};

	it("returnLocalSum() should return undefined", function() {
		expect(returnLocalSum()).toBe(undefined);
	});
});	

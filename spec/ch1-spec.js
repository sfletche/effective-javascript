
describe( "Type Coercion", function () {

	var point = function(x, y) {
		if (!x) {
			x = 5;
		}
		if (!y) {
			y = 5;
		}
		return {
			x: x,
			y: y
		}
	}

	it("creates default point (5, 5)", function() {
		expect(point().x).toEqual(5);
		expect(point().y).toEqual(5);
	});
	it("creates point (0, 0)", function() {
		expect(point(0, 0).x).toEqual(0);
		expect(point(0, 0).y).toEqual(0);
	});
	it("creates point (10, 10)", function() {
		expect(point(10, 10).x).toEqual(10);
		expect(point(10, 10).y).toEqual(10);
	});
});

describe( "Primitives over Object Wrappers", function () {

	var checkType = function(s) {
		return typeof s == "string";
	};
	var equals = function(s1, s2) {
		return s1 == s2;
	};

	it("should be type string", function() {
		expect(checkType(new String("hello world"))).toBe(true);
		expect(point().y).toEqual(5);
	});
	it("should equal itself", function() {
		expect(equals(new String("foo"), new String("foo"))).toEqual(true);
	});
});



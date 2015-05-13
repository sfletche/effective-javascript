

describe( "Item 1: Know Which Javascript You Are Using...", function() {
	it("whichJS() should return true", function() {
		expect(ch1.whichJS()).toBe(true);
	});
});

describe( "Item 2: Understand Javascript's Floating Point Numbers...", function() {
	it("checkFloatingPointEquality() should return true", function() {
		expect(ch1.checkFloatingPointEquality()).toBe(true);
	});
});	

describe( "Item 3: Beware of Implicit Coercion...", function () {
	it("calling point(0,0) should create point = (0,0)", function() {
		var p1 = ch1.point(0, 0);
		expect(p1.x).toBe(0);
		expect(p1.y).toBe(0);
	});
});

describe( "Item 4: Prefer Primitives to Object Wrappers...", function () {
	it("'foo' should be of type string", function() {
		expect(ch1.checkType()).toBe(true);
	});
	it("'foo' should equal itself", function() {
		expect(ch1.checkStringEquality()).toBe(true);
	});
});

describe( "Item 5: Avoid Using == with Mixed Types...", function() {

	var nullIsNotUndefined = function() {
		return null == undefined;
	};
	var zeroIsNotFalse = function() {
		return 0 == false;
	};
	var string5isNotNumber5 = function() {
		return '5' == 5;
	}

	it("null should not equal undefined", function() {
		expect(nullIsNotUndefined()).toBe(false);
	});
	it("0 should not equal false", function() {
		expect(zeroIsNotFalse()).toBe(false);
	});
	it("'5' should not equal 5", function() {
		expect(string5isNotNumber5()).toBe(false);
	});
});

describe( "Item 6: Learn the Limits of Semicolon Insertion..." , function() {

	var returnTrue = function() {
		var a=1, b=2
		b = a
		return a === b
	}
	var returnObject = function() {
		var status = 'Success!'
		return 
		{
			status: status
		}
	}
	var returnOne = function() {
		var a=1, b=2, c=3
		b = a
		(c = b)
		return c
	}

	it("returnTrue should return true", function() {
		expect(returnTrue()).toBe(true);
	})
	it("returnObject should return an object", function() {
		expect(returnObject().status).toBe('Success!');
	})
	it("returnOne should return 1", function() {
		expect(returnOne()).toBe(1);
	})
});

describe( "Item 7: Think of Strings As Sequences of 16-Bit Code Units", function() {

	var aHasLengthOf1 = function() {
		return 'a'.length === 1;
	};
	var pooHasLengthOf1 = function() {
		return '💩'.length === 1;
	};


	it("aHasLengthOf1 should return true", function() {
		expect(aHasLengthOf1()).toBe(true);
	});
	it("pooHasLengthOf1 should return true", function() {
		expect(pooHasLengthOf1()).toBe(true);
	});
});
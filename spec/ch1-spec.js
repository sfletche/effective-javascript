
describe( "Item 1: Know Which Javascript You Are Using...", function() {

	var amIUsingES6 = function() {
		// check for template strings
		var no = "Yes!";
		return "${no}" === "Yes!";
	};
	var amIUsingES5 = function() {
		// check trailing commas
		var obj = { 
			a: 1,
			b: 2,
		};
		return true;
	};
	var whichJS = function() {
		var es3, es5, es6;
		if (amIUsingES6) {
			es6 = true;
		} else if(amIUsingEs5) {
			es5 = true;
		} else {
			es3 = true;
		}
		return es3;
	};

	it("whichJS() should return true", function() {
		expect(whichJS()).toBe(true);
	});
});

describe( "Item 2: Understand Javascript's Floating Point Numbers...", function() {

	var checkEquality = function() {
		var a = .1,
			b = .2,
			c = a + b;
		return c === .3;
	};

	it("checkEquality() should return true", function() {
		expect(checkEquality()).toBe(true);
	});
});	

describe( "Item 3: Beware of Implicit Coercion...", function () {

	var point = function(x, y) {
		x = x || 5;
		y = y || 5;
		return { x: x, y: y };
	}

	it("calling point() should create default point = (5,5)", function() {
		expect(point().x).toBe(5);
		expect(point().y).toBe(5);
	});
	it("calling point(0,0) should create point = (0,0)", function() {
		expect(point(0, 0).x).toBe(0);
		expect(point(0, 0).y).toBe(0);
	});
});

describe( "Item 4: Prefer Primitives to Object Wrappers...", function () {

	var checkType = function() {
		return typeof new String('foo') === 'string';
	};
	var checkEquality = function() {
		return new String('foo') === new String('foo');
	};

	it("'foo' should be of type string", function() {
		expect(checkType()).toBe(true);
	});
	it("'foo' should equal itself", function() {
		expect(checkEquality()).toBe(true);
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

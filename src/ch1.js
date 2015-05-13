var ch1 = function() {

	// Return a function, whichJS() that returns true after determining which JS you are using
	var item_1 = function() {
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
			var es3 = false, 
				es5 = false,
				es6 = false;
			if (amIUsingES6) {
				es6 = true;
			} else if(amIUsingEs5) {
				es5 = true;
			} else {
				es3 = true;
			}
			return es3;
		};		
		return {
			whichJS: whichJS
		};
	}();

	// Write function, checkEquality(), that explores the ambiguities of floating point addition
	var item_2 = function() {
		var checkEquality = function() {
			var a = .1,
				b = .2,
				c = a + b;
			return c === .3;
		};
		return {
			checkEquality: checkEquality
		};
	}();

	// Write a function, point(x,y), that defaults to (5,5) when no arguments are provided
	var item_3 = function() {		
		var point = function(x, y) {
			x = x || 5;
			y = y || 5;
			return { x: x, y: y };
		};
		return {
			point: point
		};
	}();

	// Write 2 functions, checkType() that determines the type of a new String object,
	// and checkEquality(), that checks to see if 2 new String objects are equal
	var item_4 = function() {
		var checkType = function() {
			return typeof new String('foo') === 'string';
		};
		var checkEquality = function() {
			return new String('foo') === new String('foo');
		};
		return {
			checkType: checkType,
			checkEquality: checkEquality
		}
	}();

	return {
		whichJS: item_1.whichJS,
		checkFloatingPointEquality: item_2.checkEquality,
		point: item_3.point,
		checkType: item_4.checkType,
		checkStringEquality: item_4.checkEquality
	};

}();
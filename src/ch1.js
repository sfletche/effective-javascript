var ch1 = function() {

	// Return a function, whichJS() that returns true after determining which JS you are using
	var item_1 = function() {
		return {
			whichJS: function() {
				var amIUsingES6 = function() {
					// check for template strings
					var no = "Yes!";
					return "${no}" === "Yes!";
				};
				var amIUsingES5 =function() {
					// check trailing commas
					var obj = { 
						a: 1,
						b: 2,
					};
					return true;
				};
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
			}
		};
	}();

	// Write function, checkEquality(), that explores the ambiguities of floating point addition
	var item_2 = function() {
		return {
			checkEquality: function() {
				var a = .1,
					b = .2,
					c = a + b;
				return c === .3;
			}			
		};
	}();

	// Write a function, point(x,y), that defaults to (5,5) when no arguments are provided
	var item_3 = function() {	
		return {
			point: function(x, y) {
				x = x || 5;
				y = y || 5;
				return { x: x, y: y };
			}			
		};
	}();

	// Write 2 functions, checkType() that determines the type of a new String object,
	// and checkEquality(), that checks to see if 2 new String objects are equal
	var item_4 = function() {
		return {
			checkType: function() {
				return typeof new String('foo') === 'string';
			},
			checkEquality: function() {
				return new String('foo') === new String('foo');
			}
		};
	}();

	var item_5 = function() {	
		return {
			nullIsNotUndefined: function() {
				return null == undefined;
			},
			zeroIsNotFalse: function() {
				return 0 == false;
			},
			string5isNotNumber5: function() {
				return '5' == 5;
			}
		};
	}();

	var item_6 = function() {
		return {
			returnTrue: function() {
				var a=1, b=2
				b = a
				return a === b
			},
			returnObject: function() {
				var status = 'Success!'
				return 
				{
					status: status
				}
			},
			returnOne: function() {
				var a=1, b=2, c=3
				b = a
				(c = b)
				return c
			}			
		};
	}();

	var item_7 = function() {
		return {
			aHasLengthOf1: function() {
				return 'a'.length === 1;
			},
			pooHasLengthOf1: function() {
				return '💩'.length === 1;
			}			
		};
	}();

	return {
		whichJS: item_1.whichJS,
		checkFloatingPointEquality: item_2.checkEquality,
		point: item_3.point,
		checkType: item_4.checkType,
		checkStringEquality: item_4.checkEquality,
		nullIsNotUndefined: item_5.nullIsNotUndefined,
		zeroIsNotFalse: item_5.zeroIsNotFalse,
		string5isNotNumber5: item_5.string5isNotNumber5,
		returnTrue: item_6.returnTrue,
		returnObject: item_6.returnObject,
		returnOne: item_6.returnOne,
		aHasLengthOf1: item_7.aHasLengthOf1,
		pooHasLengthOf1: item_7.pooHasLengthOf1
	};

}();
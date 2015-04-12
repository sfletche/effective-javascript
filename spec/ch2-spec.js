
describe( "Item 8: Minimize Use of Globals...", function() {

	var i, sum;
	var sumArrays = function(arrays) {
		sum = 0;
		for (i = 0; i < arrays.lenth; i += 1) {
			sum += sumArray(arrays[i]);
		}
		return sum;
	};
	var sumArray = function(array) {
		sum = 0;
		for (i = 0; i < array.length; i += 1) {
			sum += array[i];
		}
		return sum;
	}

	it("sumArrays([1,2], [3,4,5]) should return 15", function() {
		expect(sumArrays[1,2], [3,4,5]).toBe(15);
	});
});	

describe( "Item 9: Always Declare Local Variables...", function() {

	var sumArrays = function(arrays) {
		sum = 0;
		for (i = 0; i < arrays.lenth; i += 1) {
			sum += sumArray(arrays[i]);
		}
		return sum;
	};
	var sumArray = function(array) {
		sum = 0;
		for (i = 0; i < array.length; i += 1) {
			sum += array[i];
		}
		return sum;
	}

	it("sumArrays([1,2], [3,4,5]) should return 15", function() {
		expect(sumArrays[1,2], [3,4,5]).toBe(15);
	});
});

describe( "Item 10: Avoid with...", function() {

});

describe( "Item 11: Get Comfotable with Closures...", function() {

	var create3Functions = function() {
		var functions = [];
		for (var i = 0; i < 3; i += 1) {
			functions[i] = function() {
				return i;
			}
		}
		return functions;
	};
	var my3Functions = create3Functions();

	it("my3Functions[0]() should return 0", function() {
		expect(my3Functions[0]()).toBe(0);
	});
	it("my3Functions[1]() should return 1", function() {
		expect(my3Functions[1]()).toBe(1);
	});
	it("my3Functions[2]() should return 2", function() {
		expect(my3Functions[2]()).toBe(2);
	});
});

describe( "Item 12: Understand Variable Hoisting...", function() {

});

describe( "Item 13: Use Immediately Invoked Function Expressions to Create Local Scopes...", function() {

});

describe( "Item 14: Beware of Unportable Scoping of Named Function Expressions...", function() {

});

describe( "Item 15: Beware of Unportable Scoping of Block-Local Function Declarations...", function() {

});

describe( "Item 16: Beware Creating Local Variables with eval...", function() {

});

describe( "Item 17: Prefer Indirect eval to Direct eval...", function() {

});
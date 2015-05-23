
describe( "Item 8: Minimize Use of Globals...", function() {	
	it("sumArrays([1,2], [3,4,5]) should return 15", function() {
		expect(ch2.sumArrays[1,2], [3,4,5]).toBe(15);
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
	it("my3Functions[0]() should return 0", function() {
		expect(ch2.my3Functions[0]()).toBe(0);
	});
	it("my3Functions[1]() should return 1", function() {
		expect(ch2.my3Functions[1]()).toBe(1);
	});
	it("my3Functions[2]() should return 2", function() {
		expect(ch2.my3Functions[2]()).toBe(2);
	});
});

describe( "Item 12: Understand Variable Hoisting...", function() {
	var isWinner = function(player, others) {
	    var highest = 0;
	    for (var i = 0, n = others.length; i < n; i++) {
	        var player = others[i]; // same scope as player parameter!
	        if (player.score > highest) {
	            highest = player.score;
	        }
	    }
	    return player.score > highest;
	};
	var checkWinner = function() {
		var player = {
			score: 23
		};
		var others = [{
			score: 18
		}, {
			score: 21
		}, {
			score: 15
		}];
		return isWinner(player, others);
	};

	it("checkWinner() should return true", function() {
		expect(checkWinner()).toBe(true);
	});
});

describe( "Item 13: Use Immediately Invoked Function Expressions to Create Local Scopes...", function() {
	var wrapElements =  function(a) {
	    var result = [], i, n;
	    for (i = 0, n = a.length; i < n; i++) {
	        result[i] = function() { return a[i]; };
	    }
	    return result;
	}

	var wrapped = wrapElements([10, 20, 30, 40, 50]);
	var f = wrapped[0];
	
	it("f() should return 10", function() {
		expect(f()).toBe(10);
	})
});

describe( "Item 14: Beware of Unportable Scoping of Named Function Expressions...", function() {

});

describe( "Item 15: Beware of Unportable Scoping of Block-Local Function Declarations...", function() {

});

describe( "Item 16: Beware Creating Local Variables with eval...", function() {

});

describe( "Item 17: Prefer Indirect eval to Direct eval...", function() {

});
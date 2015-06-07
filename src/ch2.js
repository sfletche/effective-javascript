var ch2 = function() {

	// Return a function, whichJS() that returns true after determining which JS you are using
	var item_8 = function() {
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
		return {
			sumArrays: sumArrays
		}
	}();

	var item_11 = function() {
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
		
		return {
			my3Functions: my3Functions
		};
	}();

	var item_12 = function() {
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
		return {
			checkWinner: checkWinner
		}
	}();

	var item_13 = function() {
		var wrapElements =  function(a) {
		    var result = [], i, n;
		    for (i = 0, n = a.length; i < n; i++) {
		        result[i] = function() { return a[i]; };
		    }
		    return result;
		}
		var wrapped = wrapElements([10, 20, 30, 40, 50]);
		return {
			f: wrapped[0]
		};		
	}();

	return {
		sumArrays: item_8.sumArrays,
		my3Functions: item_11.my3Functions,
		checkWinner: item_12.checkWinner,
		f: item_13.f
	};

}();
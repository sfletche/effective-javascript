var ch1 = function() {

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

	var item_2 = function() {

	}();

	return {
		whichJS: item_1.whichJS
	};

}();
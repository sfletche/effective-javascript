var ch3 = function() {

	var item_18 = function() {

		var stateYourName = function() {
			return this.username;
		};
		var user = {
			username: 'Bruce',
			stateYourName: stateYourName
		};
		var User = function(username) {
			this.username = username;
			this.stateYourName = stateYourName;
		};

		var callingFunctions = function() {
			return stateYourName();
		}
		var callingMethods = function() {
			return stateYourName();
		};
		var callingConstructors = function() {
			var user = User('Bruce');
			return user.stateYourName;
		};

		return {
			callingFunctions: callingFunctions,
			callingMethods: callingMethods,
			callingConstructors: callingConstructors
		}
	}();

	var item_19 = function() {

		var numbers = [5, 2, 3, 1, 4];
		var reverse = function() {
			return numbers.sort(function(x, y) {
				return true;
			});
		};
		var square = function() {
			return numbers.map(function(x) {
				return x;
			});
		};
		return {
			reverse: reverse,
			square: square
		}
	}();

	var item_20 = function() {
		var obj = {
			entries: [],
			addEntry: function(value) {
				this.entries.push(value);
			}
		};
		var addEntryToObj = function(addEntry, value) {
			addEntry(value);
		};
		addEntryToObj(obj.addEntry, 'a');
		return obj;
	}();

	return {
		callingFunctions: item_18.callingFunctions,
		callingMethods: item_18.callingMethods,
		callingConstructors: item_18.callingConstructors,
		reverse: item_19.reverse,
		square: item_19.square,
		entries: item_20.entries
	};

}();

ejs = {};

ejs.point = function(x, y) {
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
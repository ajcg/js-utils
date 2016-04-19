
/**
 *  Returns a random integer between min (included) and max (included)
 *  @param {number} min - The minimum number to generate inclusive.
 *  @param {number} max - The maximum number to generate inclusive.
 */
exports.getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

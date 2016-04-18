
/**
 *  Returns an average of the elements (period) everytime it is called.
 *  @param {number} period - The number of elements to average.
 */
exports.Avg = function(period) {
    var nums = [];
    return function (num) {
        nums.push(num);
        if (nums.length > period)
            nums.splice(0, 1);  // remove the first element of the array
        var sum = 0;
        for (var i in nums)
            sum += nums[i];
        var n = period;
        if (nums.length < period)
            n = nums.length;
        return (sum / n);
    }
}

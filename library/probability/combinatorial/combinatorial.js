function combinatorial(quantity, sample, orderMatters, sampleLessThanTotal) {
    function factorial(value) {
        if (typeof (value) === 'number') {
            var temp_1 = 1;
            for (var i = 0; i < value; i++) {
                temp_1 = temp_1 * (value - i);
            }
            return temp_1;
        }
        else {
            console.error('The argument of fatorial function must be a number');
        }
    }
    var order = orderMatters ? 1 : 0;
    var sampleLimited = sampleLessThanTotal ? 1 : 0;
    var temp;
    if (!orderMatters && !sampleLessThanTotal) {
        return factorial(quantity);
    }
    else {
        temp = factorial(quantity) / ((factorial(sample) * order) * (factorial(quantity - sample) * sampleLimited));
        return temp;
    }
}
module.exports = combinatorial;